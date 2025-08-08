import React from 'react';
import PropTypes from 'prop-types';

export const H5 = ({ values }) => <h5>{values.text}</h5>;

H5.propTypes = {
  values: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
};
