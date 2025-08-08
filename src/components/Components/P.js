import React from 'react';
import PropTypes from 'prop-types';

export const P = ({ values }) => <p>{values.text}</p>;

P.propTypes = {
  values: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
};
