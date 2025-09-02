/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { useTheme } from '@mui/material/styles';
import numeral from 'numeral';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  Fade,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  ListSubheader,
  MenuItem,
  Paper,
  Popper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';

import HelpIcon from '@mui/icons-material/Help';
import { FileDropzone } from '../file-dropzone';

import DeleteImageDialog from './delete-image-dialog';
import ImagesDragAndDropSortable from './images-drag-and-drop-sortable';

import { UserProfileContext, UserProfilePictureContext } from '../../contexts/UserProfileContext';

export function ImageUploader(props) {
  const {
    handleDeleteImage,
    handleDrop,
    handleImageUploads,
    handleRemove,
    handleRemoveAll,
    imageFiles,
    imagesTableIdToDelete,
    imageUrlToDelete,
    thumbs,
    setImageFiles,
    setSortedImageFiles,
    setIsShowDeleteImageDialog,
    setImagesTableIdToDelete,
    setImageUrlToDelete,
    isShowDeleteImageDialog,
    isConfirmButtonDisabled,
    setIsConfirmButtonDisabled,
    helperText,
    toggleHelpDocsSection,
    isOneOrMoreFilesTooLarge,
    isDisabled,
    showHelpDocsSection,
    ...rest
  } = props;

  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const [arrowRef, setArrowRef] = useState(null);
  const [userProfile, setUserProfile] = useContext(UserProfileContext);

  const xsUp = useMediaQuery(theme => theme.breakpoints.up('xs'));
  const smUp = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const mdUp = useMediaQuery(theme => theme.breakpoints.up('md'));
  const lgUp = useMediaQuery(theme => theme.breakpoints.up('lg'));

  const theme = useTheme();

  const handleClick = newPlacement => (event) => {
    setAnchorEl(event.currentTarget);
    // setOpen(prev => placement !== newPlacement || !prev);
    setOpen(prev => !prev);
    if (xsUp && !smUp) {
      setPlacement('bottom');
    } else {
      setPlacement(newPlacement);
    }
  };

  const handleClose = () => {
    setOpen(false);
    // setPlacement()
    // setAnchorEl(null);
  };

  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Grid
          container
          spacing={3}
        >
          <Grid
            // Note: in this grid item, we store the label 'Basic Details' and the help icon
            item
            xs={12}
            // eslint-disable-next-line no-nested-ternary
            md={
              userProfile.isSidebarOpen && showHelpDocsSection ? 12
                : !userProfile.isSidebarOpen && showHelpDocsSection ? 12
                  : userProfile.isSidebarOpen && !showHelpDocsSection ? 4
                    : 4
            }
            lg={4}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'start',
              alignItems: 'center',
              // border: showHelpDocsSection ? '1px solid green' : '1px solid blue',
            }}
          >
            <Box
              component="div"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                minHeight: '100%',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6">
                  {t('Images')}
                </Typography>
                <HelpIcon
                  onClick={handleClick('right-end')}
                  sx={{
                    display: {
                      xs: 'block',
                      md: 'none',
                    },

                    '& :hover': {
                      cursor: 'pointer',
                      boxShadow: '0 5px 15px rgba(145, 92, 182, .4)',
                    },
                  }}
                />
                <HelpIcon
                  sx={{
                    display: {
                      xs: 'none',
                      sm: 'none',
                      md: 'block',
                    },
                    '& :hover': {
                      cursor: 'pointer',
                      boxShadow: '0 5px 15px rgba(145, 92, 182, .4)',
                    },

                  }}
                  onClick={evt => toggleHelpDocsSection(evt, 'images')}
                />
                <Popper
                  open={open}
                  anchorEl={anchorEl}
                  placement={placement}
                  transition
                  sx={{
                    zIndex: 2,
                    width: '220px',
                  }}
                  /*
                  modifiers={[
                    {
                      name: 'arrow',
                      enabled: true,
                      options: {
                        element: arrowRef,
                      },
                    },
                  ]}
                  */
                >
                  {/* <Box component="span" className="arrow" ref={setArrowRef} sx={styles.arrow}></Box> */}
                  {({ TransitionProps }) => (
                    <Fade
                      {...TransitionProps}
                      timeout={350}
                    >
                      <Paper
                        sx={{
                          backgroundColor: 'primary.main',
                          opacity: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'flex-start',
                          pt: 0,
                          pb: 1.5,
                        }}
                      >
                        <Typography
                          sx={{
                            p: 1.5,
                            color: '#FFFFFF',
                          }}
                        >
                          {t(helperText)}
                        </Typography>
                        <Button
                          variant="contained"
                          onClick={handleClose}
                          sx={{
                            color: '#FFFFFF',
                            alignSelf: 'center',
                            size: 'small',
                            backgroundColor: 'primary.dark',
                            margin: '2px',
                            padding: '2px',
                          }}
                        >
                          {t('Close')}
                        </Button>
                      </Paper>
                    </Fade>
                  )}
                </Popper>
              </Box>
            </Box>
          </Grid>
          <Grid
            // Note: in this grid item, we display the form fields
            item
            xs={12}
            md={
              userProfile.isSidebarOpen && showHelpDocsSection ? 12
                : !userProfile.isSidebarOpen && showHelpDocsSection ? 12
                  : userProfile.isSidebarOpen && !showHelpDocsSection ? 8
                    : 8
            }
            lg={8}
          >
            {
              !isDisabled
              && (
              <FileDropzone
                accept={{
                  'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.tif', '.tiff', '.webp', '.heic', '.heif', '.svg', '.avif'],
                }}
                minSize={0}
                maxSize={parseInt(process.env.NEXT_PUBLIC_MAX_FILESIZE_UPLOAD, 10)}
                files={imageFiles}
                onDrop={handleDrop}
                handleRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
                onUpload={handleImageUploads}
                translationObject={t}
                setImageFiles={setImageFiles}
                setSortedImageFiles={setSortedImageFiles}
                setIsShowDeleteImageDialog={setIsShowDeleteImageDialog}
                setImagesTableIdToDelete={setImagesTableIdToDelete}
                setImageUrlToDelete={setImageUrlToDelete}
                isConfirmButtonDisabled={isConfirmButtonDisabled}
                setIsConfirmButtonDisabled={setIsConfirmButtonDisabled}
                isOneOrMoreFilesTooLarge={isOneOrMoreFilesTooLarge}
              />
              )
            }
            <aside style={theme.reactDropzonePreview.thumbsContainer}>
              <ImagesDragAndDropSortable
                imageFiles={imageFiles}
                setSortedImageFiles={setSortedImageFiles}
              />
            </aside>
            <DeleteImageDialog
              handleDeleteImage={handleDeleteImage}
              imagesTableIdToDelete={imagesTableIdToDelete}
              imageUrlToDelete={imageUrlToDelete}
              isShowDeleteImageDialog={isShowDeleteImageDialog}
              isConfirmButtonDisabled={isConfirmButtonDisabled}
              setIsConfirmButtonDisabled={setIsConfirmButtonDisabled}
              setIsShowDeleteImageDialog={setIsShowDeleteImageDialog}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
