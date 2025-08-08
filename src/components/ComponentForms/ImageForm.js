import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Actions } from './Actions';

export const ImageForm = ({
  children,
  handleSubmit,
  initialValues = {},
}) => {
  const [src, setSrc] = useState(initialValues.src || '');
  const [alt, setAlt] = useState(initialValues.alt || '');
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleSubmit({ src, alt });
    }}>
    <div className="component-field">
      <label className="component-field__label" htmlFor="src">
        src
      </label>
      <input
        autoComplete="off"
        className="component-field__input"
        id="src"
        name="src"
        type="text"
        value={src}
        onChange={e => setSrc(e.target.value)}
      />
      <label className="component-field__label" htmlFor="alt">
        alt
      </label>
      <input
        autoComplete="off"
        className="component-field__input"
        id="alt"
        name="alt"
        type="text"
        value={alt}
        onChange={e => setAlt(e.target.value)}
      />
    </div>
    <Actions>
      {children}
    </Actions>
    </form>
  );
}

ImageForm.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
