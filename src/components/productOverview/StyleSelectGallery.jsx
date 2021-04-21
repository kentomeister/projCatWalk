import React from 'react';
import StyleThumbnail from './StyleThumbnail.jsx';

const StyleSelectGallery = ({ styles, selectedStyle }) => (
  <div className="container-horz style-gallery ">
    {styles &&
      styles.map((style, i) => (
        <StyleThumbnail
          key={style.style_id}
          thumbnailUrl={style.photos[0].thumbnail_url}
          selected={style.style_id === selectedStyle.style_id}
        />
      )
      )}
  </div>
);

export default StyleSelectGallery;
