import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Actions } from './Actions';

export const TextAreaForm = ({
  children,
  handleSubmit,
}) => {
  const [text, setText] = useState('');
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleSubmit({ text });
    }}>
    <div className="component-field">
      <label className="component-field__label" htmlFor="text">
        text
      </label>
      <textarea
        autoComplete="off"
        className="component-field__input"
        id="text"
        name="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </div>
    <Actions>
      {children}
    </Actions>
    </form>
  );
}

TextAreaForm.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
