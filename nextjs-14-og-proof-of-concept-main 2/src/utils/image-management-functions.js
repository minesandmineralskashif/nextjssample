/* eslint-disable no-param-reassign */
import axios from 'axios';
import { getCookie } from 'cookies-next';
import {
  // eslint-disable-next-line no-unused-vars
  validate as uuidValidate,
  // eslint-disable-next-line no-unused-vars
  version as uuidVersion,
  v4 as uuidv4,
} from 'uuid';
import { useAuth } from '../hooks/use-auth';
import { refreshIdTokenAsNeeded } from './aws-cognito-custom';

export const handleDrop = (newFiles, imageFiles, setImageFiles) => {
  const updatedFiles = newFiles.map((file) => {
    const clientGeneratedImageId = uuidv4();
    file.preview = URL.createObjectURL(file);
    file.key = clientGeneratedImageId;
    file.clientGeneratedImageId = clientGeneratedImageId;
    file.mimeType = file.type;
    file.fileSize = file.size;
    file.sortOrder = imageFiles.length + 1;
    return file;
  });

  if (!imageFiles.length) {
    setImageFiles(updatedFiles);
  } else {
    setImageFiles(prevFiles => [...prevFiles, ...updatedFiles]);
  }
};

export const encodeImageFileAsURLAsync = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onloadend = function () {
    return resolve({ data: reader.result });
  };
  reader.readAsDataURL(file);
}).catch(err => Promise.reject(new Error({ status: 'failed' })));

export const hasImagesToUpload = async (arrFileKeysAlreadyUploaded, imageFiles) => {
  let isHasImagesToUpload = false;

  for (const file of imageFiles) {
    // BEGIN fix for AA-224
    if (file.preview.search(/blob/i) === -1) {
      continue;
    }
    // END fix for AA-224

    const mime = file.type;
    const { name } = file;
    const { size } = file;
    const fileType = file.type;
    const clientGeneratedImageId = file.key;

    // TODO mdichirico -- need to refactor the following line to now use the 'await' keyword:
    // see:https://eslint.org/docs/latest/rules/no-await-in-loop
    // eslint-disable-next-line no-await-in-loop
    const encodedData = await encodeImageFileAsURLAsync(file);
    const parts = encodedData?.data?.split(';');
    const base64Data = parts[1];

    if (!arrFileKeysAlreadyUploaded.includes(clientGeneratedImageId)) {
      isHasImagesToUpload = true;
    }
  }

  return isHasImagesToUpload;
};

export const handleImageUploads = async (
  arrFileKeysAlreadyUploaded,
  imageFiles,
  encodeImageFileAsURLAsync,
  setArrFileKeysAlreadyUploaded,
  mapServerSideGeneratedImageNamesToClientGeneratedImageIds,
  mapClientGeneratedImageIdsToServerSideGeneratedImageNames,
  imageUrlsAssociatedToIngredient,
  setImageUrlsAssociatedToIngredient,
  setMapServerSideGeneratedImageNamesToClientGeneratedImageIds,
  setMapClientGeneratedImageIdsToServerSideGeneratedImageNames,
  setIsImageUploadedSuccessfully,
  username,
  userId,
  accessToken,
  sortedImageFiles,
  setSortedImageFiles,
  setImageFiles,
  setIsFileTooLarge,
) => {
  const self = this;

  const apiCalls = [];
  const cloneArrFileKeysAlreadyUploaded = [...arrFileKeysAlreadyUploaded];

  for (const file of imageFiles) {
    // BEGIN fix for AA-224
    if (file.preview.search(/blob/i) === -1) {
      continue;
    }
    // END fix for AA-224

    const mime = file.type;
    const { name } = file;
    const { size } = file;
    const fileType = file.type;
    const clientGeneratedImageId = file.key;

    // eslint-disable-next-line no-await-in-loop
    const encodedData = await encodeImageFileAsURLAsync(file);
    const parts = encodedData?.data?.split(';');
    const base64Data = parts[1];

    if (!cloneArrFileKeysAlreadyUploaded.includes(clientGeneratedImageId)) {
      const response = axios.post(process.env.NEXT_PUBLIC_IMAGE_ADD_ENDPOINT, {
        mime,
        name,
        fileType,
        image: base64Data,
        clientGeneratedImageId,
        size: file.size,
      }, {
        headers: {
          Authorization: getCookie(process.env.NEXT_PUBLIC_AUTHENTICATION_ID_TOKEN),
        },
      });

      apiCalls.push(response);

      cloneArrFileKeysAlreadyUploaded.push(clientGeneratedImageId);
    }
  } // close for loop

  setArrFileKeysAlreadyUploaded(cloneArrFileKeysAlreadyUploaded);

  // Do a shallow copy of the Maps, which is good enough for our use case:
  const cloneMapServerSideGeneratedImageNamesToClientGeneratedImageIds = new Map(mapServerSideGeneratedImageNamesToClientGeneratedImageIds);
  const cloneMapClientGeneratedImageIdsToServerSideGeneratedImageNames = new Map(mapClientGeneratedImageIdsToServerSideGeneratedImageNames);
  const cloneSortedImageFiles = JSON.parse(JSON.stringify(sortedImageFiles));

  if (apiCalls.length) {
    Promise.all(apiCalls).then((responses) => {
      if (responses.length) {
        const newArrayImageUrlsAssociatedToIngredient = [...imageUrlsAssociatedToIngredient];
        for (const response of responses) {
          // update 'sortedImageFiles':
          for (let i = 0; i < cloneSortedImageFiles.length; i++) {
            if (cloneSortedImageFiles[i].clientGeneratedImageId === response?.data?.clientGeneratedImageId) {
              cloneSortedImageFiles[i].imagesTableId = response?.data?.imagesTableId;
              cloneSortedImageFiles[i].imageUrl = response?.data?.imageUrl;
              cloneSortedImageFiles[i].imageWidth = response?.data?.imageWidth;
              cloneSortedImageFiles[i].imageHeight = response?.data?.imageHeight;
              cloneSortedImageFiles[i].src = response?.data?.imageUrl;
              cloneSortedImageFiles[i].fileSize = response?.data?.size;
              cloneSortedImageFiles[i].mimeType = response?.data?.fileType;
              cloneSortedImageFiles[i].name = response?.data?.imageUrl.split('amazonaws.com/')[1]; // TODO mdichirico -- the 'amazonaws.com' should be placed in .env file in the rare event that we ever need to split on something else in the string
              cloneSortedImageFiles[i].preview = response?.data?.imageUrl;
              for (let j = 0; j < cloneSortedImageFiles[i].images.length; j++) {
                cloneSortedImageFiles[i].images[j].src = response?.data?.imageUrl;
              }
            }
          }

          if (response?.data?.imageUrl && response.data.imageUrl.length) {
            if (!imageUrlsAssociatedToIngredient.includes(response.data.imageUrl)) {
              newArrayImageUrlsAssociatedToIngredient.push(response.data.imageUrl);
              const serverSideImageName = response.data.imageUrl.split('amazonaws.com/')[1];
              const { clientGeneratedImageId } = response.data;

              cloneMapClientGeneratedImageIdsToServerSideGeneratedImageNames.set(
                clientGeneratedImageId,
                serverSideImageName,
              );

              cloneMapServerSideGeneratedImageNamesToClientGeneratedImageIds.set(
                serverSideImageName,
                clientGeneratedImageId,
              );
            }
          }
        } // close for loop
        setImageUrlsAssociatedToIngredient(newArrayImageUrlsAssociatedToIngredient);
        setMapServerSideGeneratedImageNamesToClientGeneratedImageIds(cloneMapServerSideGeneratedImageNamesToClientGeneratedImageIds);
        setMapClientGeneratedImageIdsToServerSideGeneratedImageNames(cloneMapClientGeneratedImageIdsToServerSideGeneratedImageNames);
        setSortedImageFiles(cloneSortedImageFiles);
        setImageFiles(cloneSortedImageFiles);
      }

      setIsImageUploadedSuccessfully(true);
      // setImageFiles([])
    }).catch((err) => {
      setIsImageUploadedSuccessfully(false);

      if (err.response?.status === 413) {
        if (err.response?.data?.message?.indexOf('exceeds the maximum file allowed size') !== -1) {
          // file was too large to upload and was not accepted by endpoint. Inform the calling component:
          setIsFileTooLarge(true);
        }
      }
    });
  }
};

export const handleRepopulatingClientDataForImageUploads = (
  imagesObj,
  setImageFiles,
  setImageUrlsAssociatedToIngredient,
  setMapClientGeneratedImageIdsToServerSideGeneratedImageNames,
  setMapServerSideGeneratedImageNamesToClientGeneratedImageIds,
  setArrFileKeysAlreadyUploaded,
  setSortedImageFiles,
) => {
  const serverSideImageNames = [];
  const clientSideImageIds = [];
  const serverSideImageNamesToClientSideImageIds = [];
  const clientSideImageIdsToServerSideImageNames = [];
  const files = [];
  const arrImageUrls = [];

  imagesObj.forEach((imageObj) => {
    // as of AA-123, the new format is for an image object to be in the parameter 'imagesObj.' However,
    // not all previously saved 'ingredient' objects have this updated 'images' structure. They would still
    // be storing a raw URL. We check for that condition before we assign to the arrImageUrls variable:
    arrImageUrls.push(imageObj.src ? imageObj.src : imageObj);
  });

  let sortOrder = 0;
  arrImageUrls.forEach((imageUrl) => {
    const serverSideImageName = imageUrl.split('amazonaws.com/')[1];
    let clientGeneratedImageId;
    if (imageUrl.clientGeneratedImageId !== undefined && imageUrl.clientGeneratedImageId?.length) {
      clientGeneratedImageId = imageUrl.clientGeneratedImageId;
    } else {
      clientGeneratedImageId = uuidv4();
    }

    const imagesTableId = imageUrl.imagesTableId !== undefined ? imageUrl.imagesTableId : '';
    const imageWidth = imageUrl.imageWidth ?? '';
    const imageHeight = imageUrl.imageHeight ?? '';

    serverSideImageNames.push(serverSideImageName);
    clientSideImageIds.push(clientGeneratedImageId);

    serverSideImageNamesToClientSideImageIds.push({
      [serverSideImageName]: clientGeneratedImageId,
    });

    clientSideImageIdsToServerSideImageNames.push({
      [clientGeneratedImageId]: serverSideImageName,
    });

    files.push({
      fileSize: '',
      height: 100, // TODO mdichirico -- need to set this as a dynamic variable in the .env file
      id: clientGeneratedImageId,
      imagesTableId,
      clientGeneratedImageId,
      // eslint-disable-next-line no-use-before-define
      images: getImageBreakpoints(imageUrl, 80, 100), // TODO mdichirico -- need to set this as a dynamic variable in the .env file
      key: clientGeneratedImageId,
      name: serverSideImageName,
      preview: imageUrl,
      sortOrder: ++sortOrder,
      src: imageUrl,
      width: 80, // TODO mdichirico -- need to set this as a dynamic variable in the .env file
      imageWidth: imageWidth?.length ? imageWidth : '',
      imageHeight: imageHeight?.height ? imageHeight : '',
    });
  });
  imagesObj.forEach((imageObj) => {
    if (imageObj.id !== undefined) {
      for (let i = 0; i < files.length; i++) {
        const fileObj = files[i];
        if (fileObj.src === imageObj.src) {
          fileObj.id = imageObj.id;
          fileObj.imagesTableId = imageObj.imagesTableId;
          fileObj.clientGeneratedImageId = imageObj.clientGeneratedImageId ? imageObj.clientGeneratedImageId : fileObj.clientGeneratedImageId;
          fileObj.key = imageObj.key;
          fileObj.mimeType = imageObj.mimeType;
          fileObj.name = imageObj.name;
          fileObj.fileSize = imageObj.fileSize;
          fileObj.height = imageObj.height;
          fileObj.images = imageObj.images;
          fileObj.sortOrder = imageObj.sortOrder;
          fileObj.width = imageObj.width;
          fileObj.imageWidth = imageObj.imageWidth;
          fileObj.imageHeight = imageObj.imageHeight;
          files[i] = fileObj;
        }
      }
    }
  });

  const serverSideImageNamesToClientSideImageIdsMap = new Map();
  for (const obj of serverSideImageNamesToClientSideImageIds) {
    serverSideImageNamesToClientSideImageIdsMap.set(Object.keys(obj)[0], Object.values(obj)[0]);
  }

  const clientSideImageIdsToServerSideImageNamesMap = new Map();
  for (const obj of clientSideImageIdsToServerSideImageNames) {
    clientSideImageIdsToServerSideImageNamesMap.set(Object.keys(obj)[0], Object.values(obj)[0]);
  }

  setImageFiles(files);
  setSortedImageFiles(files);
  setArrFileKeysAlreadyUploaded(clientSideImageIds);
  setImageUrlsAssociatedToIngredient(arrImageUrls);
  setMapServerSideGeneratedImageNamesToClientGeneratedImageIds(serverSideImageNamesToClientSideImageIdsMap);
  setMapClientGeneratedImageIdsToServerSideGeneratedImageNames(clientSideImageIdsToServerSideImageNamesMap);
};

export const handleRemove = (evt, file, setImageFiles, setSortedImageFiles, setIsShowDeleteImageDialog, setImagesTableIdToDelete, setImageUrlToDelete) => {
  setImagesTableIdToDelete(file?.imagesTableId);
  setImageUrlToDelete(file?.preview || file?.src);
  setIsShowDeleteImageDialog(true);

  /*
  setImageFiles((prevFiles) => prevFiles.filter((_file) => _file.preview !== file.preview));
  setSortedImageFiles((prevFiles) => prevFiles.filter((_file) => _file.preview !== file.preview));
  */
};

export const handleRemoveAll = (setImageFiles, setSortedImageFiles) => {
  setImageFiles([]);
  setSortedImageFiles([]);
};

export const handleImagesViewerClose = (evt, setIndexOfCurrentImageForImagesViewer, setIsImagesViewerOpen) => {
  setIndexOfCurrentImageForImagesViewer(0);
  setIsImagesViewerOpen(false);
};

export const handleClickThumbnail = (evt, indexOfImage, setIndexOfCurrentImageForImagesViewer) => {
  setIndexOfCurrentImageForImagesViewer(indexOfImage);
};

export const handleImagesViewerOnClickNext = (indexOfCurrentImageForImagesViewer, imageSetForImageViewer, setIndexOfCurrentImageForImagesViewer) => {
  const nextIndex = indexOfCurrentImageForImagesViewer + 1;
  if (nextIndex < imageSetForImageViewer.length) {
    setIndexOfCurrentImageForImagesViewer(nextIndex);
  }
};

export const handleImagesViewerOnClickPrev = (indexOfCurrentImageForImagesViewer, setIndexOfCurrentImageForImagesViewer) => {
  const prevIndex = indexOfCurrentImageForImagesViewer - 1;
  if (prevIndex >= 0) {
    setIndexOfCurrentImageForImagesViewer(prevIndex);
  }
};

export const handleDeleteImage = async (
  evt,
  imagesTableIdToDelete,
  imageUrlToDelete,
  imageUrlsAssociatedToIngredient,
  arrFileKeysAlreadyUploaded,
  mapServerSideGeneratedImageNamesToClientGeneratedImageIds,
  mapClientGeneratedImageIdsToServerSideGeneratedImageNames,
  setImageSetForImageViewer,
  handleImagesViewerClose,
  setArrFileKeysAlreadyUploaded,
  setImageUrlsAssociatedToIngredient,
  setImageFiles,
  setMapServerSideGeneratedImageNamesToClientGeneratedImageIds,
  setMapClientGeneratedImageIdsToServerSideGeneratedImageNames,
  setIsImageDeletedSuccessfully,
  setIndexOfCurrentImageForImagesViewer,
  setIsImagesViewerOpen,
  imageFiles,
  ingredientId,
  menuItemId,
  sortedImageFiles,
  setSortedImageFiles,
  accessToken,
  setIsShowDeleteImageDialog,
  setIsImageNotFound,
  setIsConfirmButtonDisabled,
  logout,
  router,
) => {
  let newArrImageUrlsAssociatedToIngredient = [...imageUrlsAssociatedToIngredient];
  let cloneArrFileKeysAlreadyUploaded = [...arrFileKeysAlreadyUploaded];
  // C the Maps, which is good enough for our use case:
  const cloneMapServerSideGeneratedImageNamesToClientGeneratedImageIds = new Map(JSON.parse(JSON.stringify(Array.from(mapServerSideGeneratedImageNamesToClientGeneratedImageIds))));
  const cloneMapClientGeneratedImageIdsToServerSideGeneratedImageNames = new Map(JSON.parse(JSON.stringify(Array.from(mapClientGeneratedImageIdsToServerSideGeneratedImageNames))));

  const bar = JSON.parse(JSON.stringify(Array.from(mapServerSideGeneratedImageNamesToClientGeneratedImageIds)));
  const foo = new Map(bar);

  const serverSideImageName = imageUrlToDelete.split('amazonaws.com/')[1];

  setIsConfirmButtonDisabled(true);

  // BEGIN fix for https://desdemicocinaconamor.atlassian.net/browse/AA-284
  // An image that has not yet been uploaded will have "blob" in the image URL. Let's check for that:
  let isImageAlreadyUploaded = true;
  if (imageUrlToDelete.includes('blob')) {
    isImageAlreadyUploaded = false;
    // We have an image that has not yet been uploaded. We need to remove it from the imageFiles array:
    const indexOfImageToDelete = imageFiles.findIndex(imageFile => imageFile.url === imageUrlToDelete);
    if (indexOfImageToDelete > -1) {
      // We have an image that has not yet been uploaded. We need to remove it from the imageFiles array:
      imageFiles.splice(indexOfImageToDelete, 1);
      setImageFiles(imageFiles);
      // We also need to remove the image from the sortedImageFiles array:
      const indexOfImageToDeleteInSortedImageFiles = sortedImageFiles.findIndex(imageFile => imageFile.url === imageUrlToDelete);
      if (indexOfImageToDeleteInSortedImageFiles > -1) {
        sortedImageFiles.splice(indexOfImageToDeleteInSortedImageFiles, 1);
        setSortedImageFiles(sortedImageFiles);
      }
    }
  }
  // END fix for https://desdemicocinaconamor.atlassian.net/browse/AA-284

  let imageDeleteResult = {
    status: null,
  };

  if (isImageAlreadyUploaded) {
    const hasIdToken = await refreshIdTokenAsNeeded();
    if (!hasIdToken) {
      logout();
      router.push('/').catch(console.error);
    }
    imageDeleteResult = await axios.delete(process.env.NEXT_PUBLIC_IMAGE_DELETE_ENDPOINT, {
      data: {
        imageName: serverSideImageName,
        imagesTableId: imagesTableIdToDelete,
        ingredientId,
        menuItemId,
      },
      headers: {
        Authorization: getCookie(process.env.NEXT_PUBLIC_AUTHENTICATION_ID_TOKEN),
      },
    }).catch((err) => {
      switch (err?.response?.status) {
        case 401:
          logout();
          router.push('/').catch(console.error);
          break;
        case 404:
          setIsImageDeletedSuccessfully(false);
          setIsShowDeleteImageDialog(false);
          setIsImageNotFound(true);
          break;
        default:
          setIsImageDeletedSuccessfully(false);
          setIsShowDeleteImageDialog(false);
      }
    });
  }

  // TODO mdichirico -- update the following code to use === instead of == (see https://eslint.org/docs/rules/eqeqeq)
  // eslint-disable-next-line eqeqeq
  if (imageDeleteResult?.status == 200 || !isImageAlreadyUploaded) {
    // Close the image viewer. IMPORTANT - to prevent a bug with the image viewer attempting to show
    // an image that had just been deleted, be sure to empty out the array used by the image viewer.
    // This is fine to do here because we will then close the image viewer and later in this block of code,
    // we re-populate the imageSetForImageViewer with an updated array that does NOT include the image
    // that had just been deleted.
    setImageSetForImageViewer([]);
    handleImagesViewerClose(null, setIndexOfCurrentImageForImagesViewer, setIsImagesViewerOpen);
    // remove from the arrays:

    // 0. Get the clientGeneratedImageId (new way as of 2023-01-18):
    let clientGeneratedImageId = '';
    let imageObj = {};
    if (imagesTableIdToDelete) {
      // eslint-disable-next-line prefer-destructuring
      imageObj = sortedImageFiles.filter(imageObj => imageObj.imagesTableId === imagesTableIdToDelete)[0];
      clientGeneratedImageId = imageObj.clientGeneratedImageId;
    } else if (imageUrlToDelete) {
      // eslint-disable-next-line prefer-destructuring
      imageObj = sortedImageFiles.filter(imageObj => imageObj.src === imageUrlToDelete)[0];

      clientGeneratedImageId = imageObj.clientGeneratedImageId;
    } else {
      clientGeneratedImageId = cloneMapServerSideGeneratedImageNamesToClientGeneratedImageIds.get(serverSideImageName);
    }

    // 1. arrFileKeysAlreadyUploaded
    cloneArrFileKeysAlreadyUploaded = cloneArrFileKeysAlreadyUploaded.filter(fileKey => fileKey !== clientGeneratedImageId);
    setArrFileKeysAlreadyUploaded(cloneArrFileKeysAlreadyUploaded);

    // 2. imageUrlsAssociatedToIngredient
    newArrImageUrlsAssociatedToIngredient = newArrImageUrlsAssociatedToIngredient.filter(fileUrl => fileUrl !== imageUrlToDelete);
    setImageUrlsAssociatedToIngredient(newArrImageUrlsAssociatedToIngredient);

    // 3. imageSetForImageViewer
    const imageSetForImageViewerFromMap = newArrImageUrlsAssociatedToIngredient.map(imageUrl => ({ src: imageUrl }));
    setImageSetForImageViewer(imageSetForImageViewerFromMap);

    // 4. imageFiles
    const newImageFiles = imageFiles.filter(file => file.key !== clientGeneratedImageId);
    setImageFiles(newImageFiles);

    const newSortedImageFiles = sortedImageFiles.filter(file => file.key !== clientGeneratedImageId);
    setSortedImageFiles(newSortedImageFiles);

    // 5. Lastly, remove entry from the two Map objects:
    cloneMapServerSideGeneratedImageNamesToClientGeneratedImageIds.delete(serverSideImageName);
    cloneMapClientGeneratedImageIdsToServerSideGeneratedImageNames.delete(clientGeneratedImageId);
    setMapServerSideGeneratedImageNamesToClientGeneratedImageIds(cloneMapServerSideGeneratedImageNamesToClientGeneratedImageIds);
    setMapClientGeneratedImageIdsToServerSideGeneratedImageNames(cloneMapClientGeneratedImageIdsToServerSideGeneratedImageNames);

    setIsImageDeletedSuccessfully(true);
    setIsShowDeleteImageDialog(false);
  }
};

export const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

export const getImageBreakpoints = (imageUrl, photoWidth, photoHeight) => breakpoints.map((breakpoint) => {
  const height = Math.round((photoHeight / photoWidth) * breakpoint);
  return {
    src: imageUrl,
    width: breakpoint,
    height,
  };
});
