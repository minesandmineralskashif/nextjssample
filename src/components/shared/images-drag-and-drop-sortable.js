/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import clsx from 'clsx';
import React, {
  HTMLAttributes,
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import {
  Photo,
  PhotoAlbum,
  RenderPhotoProps
} from 'react-photo-album';

import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
  sortableKeyboardCoordinates,
  useSortable
} from '@dnd-kit/sortable';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import { useTranslation } from 'react-i18next';

import Image from 'next/image';

import { useMounted } from '../../hooks/use-mounted';

import photoSet from './photos';
// import "./App.css";

/*
// @dnd-kit requires string 'id' on sortable elements
interface SortablePhoto extends Photo {
    id: string;
}

type SortablePhotoProps = RenderPhotoProps<SortablePhoto>;

type PhotoFrameProps = SortablePhotoProps & {
    overlay?: boolean;
    active?: boolean;
    insertPosition?: "before" | "after";
    attributes?: Partial<HTMLAttributes<HTMLDivElement>>;
    listeners?: Partial<HTMLAttributes<HTMLDivElement>>;
};
*/

/* PhotoFrame is the the actual photo "element" that has been decorated with CSS to give it a border (photo frame) */
const PhotoFrame = memo(
  forwardRef((props, ref) => {
    const {
      layoutOptions,
      imageProps,
      overlay,
      active,
      insertPosition,
      attributes,
      listeners,
      photo
    } = props;

    const {
      alt,
      style,
      ...restImageProps
    } = imageProps;

    return (
      <div
        ref={ref}
        style={{
          width: overlay ? `calc(100% - ${2 * layoutOptions.padding}px)` : style.width,
          padding: style.padding,
          marginBottom: style.marginBottom,
        }}
        className={clsx('photo-frame', {
          overlay,
          active,
          insertBefore: insertPosition === 'before',
          insertAfter: insertPosition === 'after',
        })}
        {...attributes}
        {...listeners}
      >
        {/*
        <Image
          alt={alt}
          style={{
            ...style,
            width: '100%',
            height: 'auto',
            padding: 0,
            marginBottom: 0,
          }}
          width={photo?.imageWidth?.length ? photo.imageWidth : photo.width}
          height={photo?.imageHeight?.length ? photo.imageHeight : photo.height}
                    // width={photo.width}
                    // height={photo.height}
          {...restImageProps}
        />
        */}
        <img
          alt={alt}
          style={{
            ...style,
            width: '100%',
            height: 'auto',
            padding: 0,
            marginBottom: 0,
          }}
          width={photo?.imageWidth?.length ? photo.imageWidth : photo.width}
          height={photo?.imageHeight?.length ? photo.imageHeight : photo.height}
                    // width={photo.width}
                    // height={photo.height}
          {...restImageProps}
        />
      </div>
    );
  })
);
PhotoFrame.displayName = 'PhotoFrame';

PhotoFrame.propTypes = {
  layoutOptions: PropTypes.object.isRequired,
  imageProps: PropTypes.object.isRequired,
  overlay: PropTypes.bool,
  active: PropTypes.bool,
  insertPosition: PropTypes.string,
  attributes: PropTypes.object,
  listeners: PropTypes.object,
  photo: PropTypes.object.isRequired,
};

PhotoFrame.defaultProps = {
  overlay: false,
  active: false,
  insertPosition: '',
  attributes: {},
  listeners: {},
};

/* SortablePhotoFrame wraps around PhotoFrame (the "photo" element with a photo frame) and wraps additional functionality to keep track of its sort order */
function SortablePhotoFrame(props) {
  const {
    photo,
    activeIndex
  } = props;

  const {
    attributes,
    listeners,
    isDragging,
    index,
    over,
    setNodeRef
  } = useSortable({ id: photo.id });

  return (
    <PhotoFrame
      ref={setNodeRef}
      active={isDragging}
      insertPosition={
                activeIndex !== undefined && over?.id === photo.id && !isDragging
                  ? index > activeIndex
                    ? 'after'
                    : 'before'
                  : undefined
            }
      aria-label="sortable image"
      attributes={attributes}
      listeners={listeners}
      {...props}
    />
  );
}

SortablePhotoFrame.propTypes = {
  photo: PropTypes.object.isRequired,
  activeIndex: PropTypes.number,
};

SortablePhotoFrame.defaultProps = {
  activeIndex: 0,
};

function ImagesDragAndDropSortable(props) {
  const {
    imageFiles,
    instructions,
    sortedImageFiles,
    setSortedImageFiles,
  } = props;

  const { t } = useTranslation();
  const isMounted = useMounted();
  const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
  const [photos, setPhotos] = useState([]);

  const renderedPhotos = useRef({});
  const [activeId, setActiveId] = useState(null);
  const activeIndex = activeId ? photos.findIndex(photo => photo.id === activeId) : undefined;

  useEffect(() => {
    let sortOrder = 0;
    const photoObjs = imageFiles.map((photo, idx) => {
      const photoWidth = photo.width || 80;
      const photoHeight = photo.height || 100;
      sortOrder++;
      return {
        ...photo,
        id: photo.key || uuidv4(),
        width: photo.width || 80, // TODO mdichirico -- this value needs to be defined in .env file
        height: photo.height || 100, // TODO mdichirico -- this value needs to be defined in .env file
        src: photo.preview,
        images: breakpoints.map((breakpoint) => {
          const height = Math.round((photoHeight / photoWidth) * breakpoint);
          return {
            src: photo.preview,
            width: breakpoint,
            height,
          };
        }),
        sortOrder,
        fileSize: photo.fileSize || '',
        mimeType: photo.mimeType || '',
      };
    });
    setPhotos(photoObjs);
  }, [imageFiles]);

  useEffect(() => {
    let sortOrder = 0;
    const photoObjs = photos.map((photo, idx) => {
      const photoWidth = photo.width || 80;
      const photoHeight = photo.height || 100;
      sortOrder++;
      return {
        ...photo,
        id: photo.key || uuidv4(),
        width: photo.width || 80,
        height: photo.height || 100,
        src: photo.preview,
        images: breakpoints.map((breakpoint) => {
          const height = Math.round((photoHeight / photoWidth) * breakpoint);
          return {
            src: photo.preview,
            width: breakpoint,
            height,
          };
        }),
        sortOrder,
        fileSize: photo.fileSize || photo.size,
        mimeType: photo.mimeType,
      };
    });
    setSortedImageFiles(photoObjs);
  }, [photos]);

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 50, tolerance: 10 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragStart = useCallback(({ active }) => setActiveId(active.id), []);

  const handleDragEnd = useCallback((event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setPhotos((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }, []);

  const renderPhoto = useCallback(
    (props) => {
      // capture rendered photos for future use in DragOverlay
      renderedPhotos.current[props.photo.id] = props;
      return <SortablePhotoFrame activeIndex={activeIndex} {...props} />;
    },
    [activeIndex]
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={photos}
      >
        <div style={{ margin: 30 }}>
          {/* PhotoAlbum is an array of photos */}
          <PhotoAlbum
            photos={photos}
            layout="rows"
            spacing={30}
            padding={20}
            renderPhoto={renderPhoto}
          />
          {
                        instructions
                          ? photos.length ? (
                            <p className="drag-and-drop-instructions">{instructions}</p>
                          ) : ''
                          : photos.length ? (
                            <p className="drag-and-drop-instructions">{t('Click and drag photos to sort')}</p>
                          ) : ''

                    }

        </div>
      </SortableContext>
      <DragOverlay>{activeId && <PhotoFrame overlay {...renderedPhotos.current[activeId]} />}</DragOverlay>
    </DndContext>
  );
}

export default ImagesDragAndDropSortable;
