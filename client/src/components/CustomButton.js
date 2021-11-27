import React from 'react';
import PropTypes from 'prop-types';

import '../styles/customButton.scss';

const CustomButton = ({ children }) => (
  <button type="submit" className="custom-button">
    {children}
  </button>
);

export default CustomButton;

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
};
