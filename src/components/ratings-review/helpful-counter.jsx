/* eslint-disable import/extensions */
import React from 'react';

function Helpful(props) {
  const click = () => (
    props.increment()
  );

  const { count } = props;

  return (
    <div className="helpful-counter">
      Helpful?
      {' '}
      <u className="helpful-yes" onClick={click}>Yes</u>
      (
      {count}
      )
    </div>
  );
}

export default Helpful;
