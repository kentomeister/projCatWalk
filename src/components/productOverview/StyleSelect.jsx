import React from 'react';
import StyleSelectGallery from './StyleSelectGallery.jsx';

const StyleSelect = ({ styles, selectedStyle }) => {
  return(
    <div className="style-select">
      <h1>
        Selected Style Title:
        {selectedStyle && selectedStyle.name}
      </h1>
      <StyleSelectGallery
        styles={styles}
        selectedStyle={selectedStyle}
      />
    </div>
  )
};

export default StyleSelect;