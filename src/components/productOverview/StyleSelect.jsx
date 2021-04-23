import React from 'react';
import StyleSelectGallery from './StyleSelectGallery.jsx';

const StyleSelect = ({ styles, selectedStyle, handleStyleSelectClick }) => {
  return(
    <div className="style-select">
      <h1>
        Selected Style Title:
        {selectedStyle && selectedStyle.name}
      </h1>
      <StyleSelectGallery
        styles={styles}
        selectedStyle={selectedStyle}
        handleStyleSelectClick={handleStyleSelectClick}
      />
    </div>
  )
};

export default StyleSelect;