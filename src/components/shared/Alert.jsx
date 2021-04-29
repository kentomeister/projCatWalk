import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ message, type }) => (
  <div className={`alert ${type}`}>
    <h2>{message}</h2>
  </div>
);

Alert.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
};

Alert.defaultProps = {
  message: '',
  type: '',
};

export default Alert;
