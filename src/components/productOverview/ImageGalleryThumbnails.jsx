import React from 'react';
import ImageThumbnail from './ImageThumbnail.jsx';

const ImageGalleryThumbnails = ({ images }) => (
  <div className="image-gallery-thumbnail-container">
    {images.map(image => <ImageThumbnail imageUrl={image.url} />)}
  </div>
);

export default ImageGalleryThumbnails;
