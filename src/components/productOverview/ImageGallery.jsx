/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import ImageGalleryThumbnails from './ImageGalleryThumbnails.jsx';

const ImageGallery = ({ images }) => {
  if (images === undefined) return '';
  const [currentImage, setCurrentImage] = useState(images[0].url);
  useEffect(() => { setCurrentImage(images[0].url); }, [images]);

  const handleImageThumbnailclick = (imageUrl) => setCurrentImage(imageUrl);
  return (

    <div
      className="image-gallery"
      style={{ backgroundImage: `url(${currentImage})` }}
    >
      <ImageGalleryThumbnails
        images={images}
        currentImage={currentImage}
        handleImageThumbnailclick={handleImageThumbnailclick}
      />
    </div>
  );
};

export default ImageGallery;
