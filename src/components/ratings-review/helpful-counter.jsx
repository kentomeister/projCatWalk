/* eslint-disable import/extensions */
import React from 'react';
import data from './sample-data.js';

function Helpful(props) {
  const click = function (e) {
    props.increment();
    e.target.disabled = true;
    console.log(e.target.disabled);
  };

  const { count } = props;

  return (
    <div className="helpful-counter">
      Helpful?
      {' '}
      <u disabled={false} onClick={click}>Yes</u>
      (
      {count}
      )
    </div>
  );
}

export default Helpful;
