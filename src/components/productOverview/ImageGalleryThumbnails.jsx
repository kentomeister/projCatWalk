import React from 'react';
import ImageThumbnail from './ImageThumbnail.jsx';

const ImageGalleryThumbnails = ({ images, currentImage }) => (
  <div className="image-gallery-thumbnail-container">
    {images.map(image => (
      <ImageThumbnail
        imageUrl={image.url}
        selected={currentImage === image.url}
      />))}
  </div>
);

export default ImageGalleryThumbnails;
