import React from 'react';
import PropTypes from 'prop-types';

export const H3 = ({ values }) => <h3>{values.text}</h3>;

H3.propTypes = {
  values: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
};
