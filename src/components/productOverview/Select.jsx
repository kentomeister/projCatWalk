/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';

const Select = ({
  label,
  name,
  options,
  disabled,
  handleSelect,
}) => (
  <div className="select">
    <select
      name={name}
      id={`${name}-select`}
      disabled={disabled}
      onChange={(e) => handleSelect(e.target.value)}
    >
      {label
        && (
          <option value="">
            {label}
          </option>
        )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  handleSelect: PropTypes.func.isRequired,
};

Select.defaultProps = {
  disabled: false,
  label: '',
};

export default Select;
