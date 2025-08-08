import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Actions } from './Actions';

export const LinkForm = ({
  children,
  handleSubmit,
}) => {
  const [label, setLabel] = useState('');
  const [href, setHref] = useState('');
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleSubmit({ label, href });
    }}>
    <div className="component-field">
      <label className="component-field__label" htmlFor='label'>
        label
      </label>
      <input
        autoComplete="off"
        className="component-field__input"
        id="label"
        name="label"
        type="text"
        value={label}
        onChange={e => setLabel(e.target.value)}
      />
      <label className="component-field__label" htmlFor='href'>
        href
      </label>
      <input
        autoComplete="off"
        className="component-field__input"
        id="href"
        name="href"
        type="text"
        value={href}
        onChange={e => setHref(e.target.value)}
      />
    </div>
    <Actions>
      {children}
    </Actions>
    </form>
  );
}

LinkForm.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
