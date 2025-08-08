import React from 'react';
import PropTypes from 'prop-types';

export const Img = ({ values }) => (
  <img 
    src={values.src} 
    alt={values.alt} 
  />
);

Img.propTypes = {
  values: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};