/* eslint-disable import/extensions */
import React, { useState } from 'react';
import ImageGalleryThumbnails from './ImageGalleryThumbnails.jsx';

const ImageGallery = (props) => {
  const { images } = props;
  if (images === undefined) return '';
  const [currentImage, setCurrentImage] = useState(images[0].url);
  return (

    <div
      className="image-gallery"
      style={{ backgroundImage: `url(${currentImage})` }}
    >
      <ImageGalleryThumbnails
        images={images}
        currentImage={currentImage}
      />
    </div>
  );
};

export default ImageGallery;
