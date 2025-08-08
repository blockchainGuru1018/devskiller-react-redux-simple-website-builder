import React from 'react';
import PropTypes from 'prop-types';

export const H4 = ({ values }) => <h4>{values.text}</h4>;

H4.propTypes = {
  values: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
};
