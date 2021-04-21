import React from 'react';

const ImageThumbnail = ({ imageUrl, selected }) => (
  <div
    className={selected ? 'image-thumbnail selected' : 'image-thumbnail'}
    style={{ backgroundImage: `url(${imageUrl})` }}

  />
);
export default ImageThumbnail;
