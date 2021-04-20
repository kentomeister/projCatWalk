import React from 'react';
import StyleThumbnail from './StyleThumbnail.jsx';

const splitArrayIntoFours = (styles) => {
  if (styles.length === 0) return [];
  const result = [];
  let innerArr = [];
  while (styles.length) {
    while (innerArr.length < 4) {
      innerArr.push(styles.shift());
    }
    result.push(innerArr);
    innerArr = [];
  }
  return result;
}

const StyleSelectGallery = ({styles, selectedStyle}) =>  (
  <div>
    {styles &&
      styles.map((style, i) => {
        if (i % 4 === 0) {
          return (
            <>
              <StyleThumbnail
                key={style.style_id}
                thumbnailUrl={style.photos[0].thumbnail_url}
                selected={style.style_id === selectedStyle.style_id}
              />
              <br />
            </>
          );
        } else {
          return (
            <>
              <StyleThumbnail
                key={style.style_id}
                thumbnailUrl={style.photos[0].thumbnail_url}
                selected={style.style_id === selectedStyle.style_id}
              />
            </>
          )
        }
      })}
  </div>
  );

export default StyleSelectGallery;
