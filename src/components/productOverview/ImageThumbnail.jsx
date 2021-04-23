import React from 'react';

const ImageThumbnail = ({ imageUrl, selected, handleImageThumbnailclick }) => (
  <div
    className={selected ? 'image-thumbnail selected' : 'image-thumbnail'}
    style={{ backgroundImage: `url(${imageUrl})` }}
    data-image-url={imageUrl}
    onClick={(e) => handleImageThumbnailclick(e.target.getAttribute('data-image-url'))}
  />
);
export default ImageThumbnail;
