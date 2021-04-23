/* eslint-disable import/extensions */
import React from 'react';
import StyleThumbnail from './StyleThumbnail.jsx';

const StyleSelectGallery = ({ styles, selectedStyle, handleStyleSelectClick }) => (
  <div className="container-horz style-gallery ">
    {styles
      && styles.map((style) => (
        <StyleThumbnail
          key={style.style_id}
          thumbnailUrl={style.photos[0].thumbnail_url}
          syleId={style.style_id}
          handleStyleSelectClick={handleStyleSelectClick}
          selected={style.style_id === selectedStyle.style_id}
        />
      ))}
  </div>
);

export default StyleSelectGallery;
