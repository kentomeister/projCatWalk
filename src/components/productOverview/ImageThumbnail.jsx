import React from 'react';

const ImageThumbnail = ({ imageUrl }) => (
  <div
    className="image-thumbnail"
    style={{backgroundImage: `url(${imageUrl})`}}
  />
);
export default ImageThumbnail;
