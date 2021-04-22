/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';

const Select = ({ label, name, options, disabled, handleSelect }) => (
  <div className="select">
    <select
      name={name}
      id={`${name}-select`}
      disabled={disabled}
      onChange={(e) => handleSelect(e.target.value)}
    >
      <option value="">
        --
        {label}
        --
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  disabled: false,
};

export default Select;
