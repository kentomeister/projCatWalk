import React from 'react';
import ImageThumbnail from './ImageThumbnail.jsx';

const ImageGalleryThumbnails = ({ images, currentImage, handleImageThumbnailclick }) => (
  <div className="image-gallery-thumbnail-container">
    {images.map((image, i) => (
      <ImageThumbnail
        imageUrl={image.url}
        selected={currentImage === image.url}
        key={image.url}
        handleImageThumbnailclick={handleImageThumbnailclick}
      />
    ))}
  </div>
);

export default ImageGalleryThumbnails;
