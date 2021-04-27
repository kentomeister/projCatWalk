import React from 'react';
import StyleSelectGallery from './StyleSelectGallery.jsx';

const StyleSelect = ({ styles, selectedStyle, handleStyleSelectClick }) => (
  <div className="style-select">
    <h5>
      Selected Style:
      {' '}
     <span className="bold"> {selectedStyle && selectedStyle.name} </span>
    </h5>
    <StyleSelectGallery
      styles={styles}
      selectedStyle={selectedStyle}
      handleStyleSelectClick={handleStyleSelectClick}
    />
  </div>
);

export default StyleSelect;
