import React from 'react';
import PropTypes from 'prop-types';

export default function QuestionsSearch({ onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input type="text" placeholder="Find A Question" onChange={handleChange} />
  );
}
QuestionsSearch.propTypes = {
  onChange: PropTypes.func,
};
QuestionsSearch.defaultProps = {
  onChange: () => {},
};
