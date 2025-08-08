import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Actions } from './Actions';

export const IframeForm = ({
  children,
  handleSubmit,
}) => {
  const [src, setSrc] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleSubmit({ src, width, height });
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
    </div>
    <div className="component-field">
      <label className="component-field__label" htmlFor="width">
        width
      </label>
      <input
        autoComplete="off"
        className="component-field__input"
        id="width"
        name="width"
        type="number"
        value={width}
        onChange={e => setWidth(parseInt(e.target.value))}
      />
    </div>
    <div className="component-field">
      <label className="component-field__label" htmlFor='height'>
        height
      </label>
      <input
        autoComplete="off"
        className="component-field__input"
        id="height"
        name="height"
        type="number"
        value={height}
        onChange={e => setHeight(parseInt(e.target.value))}
      />
    </div>
    <Actions>
      {children}
    </Actions>
    </form>
  );
}

IframeForm.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
