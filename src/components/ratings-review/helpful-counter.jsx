/* eslint-disable import/extensions */
import React from 'react';
import data from './sample-data.js';

function Helpful() {
  return (
    <div className="helpful-counter">
      Helpful? Yes(
      {data.results[0].helpfulness}
      )
    </div>
  );
}

export default Helpful;
