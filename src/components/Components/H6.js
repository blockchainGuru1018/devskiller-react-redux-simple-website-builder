import React from 'react';
import PropTypes from 'prop-types';

export const H6 = ({ values }) => <h6>{values.text}</h6>;

H6.propTypes = {
  values: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
};
