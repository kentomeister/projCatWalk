import React from 'react';
import PropTypes from 'prop-types';

export default function QuestionsSearch({ onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <input className="search-bar" type="text" placeholder="Have a question? Search for answers…" onChange={handleChange} />
  );
}
QuestionsSearch.propTypes = {
  onChange: PropTypes.func,
};
QuestionsSearch.defaultProps = {
  onChange: () => {},
};
