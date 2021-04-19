/* eslint-disable import/extensions */
import React from 'react';
import data from './sample-data.js';

function Helpful(props) {
  var click = function() {
    props.increment();
  }

  return (
    <div className="helpful-counter">
      Helpful? <u onClick={click}>Yes</u>(
      {/* {data.results[0].helpfulness} */}
      {props.count}
      )
    </div>
  );
}

export default Helpful;
