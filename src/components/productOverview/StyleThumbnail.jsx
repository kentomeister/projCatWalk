import React from 'react';

const StyleThumbnail = ({thumbnailUrl, selected}) => (
  <div
    className={selected ? 'style-thumbnail selected': 'style-thumbnail'}
    style={{ backgroundImage: `url(${thumbnailUrl})` }}

  />
);
export default StyleThumbnail;
