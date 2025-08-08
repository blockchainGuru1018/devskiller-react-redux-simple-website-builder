import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { AvailableComponents } from '../Components'
import './components-wrapper.css'

export const ComponentsWrapper = ({
  isEdited,
  layout,
  onComponentEdit,
  ...props
}) => {
  if (!layout) {
    return null;
  }

  const Component = AvailableComponents.find(comp => comp.layout === layout).component

  const wrapperClass = classNames(
    'components-wrapper',
    { 'components-wrapper--active': isEdited },
  );

  return Component
    ? (
      <div
        className={wrapperClass}
      >
        <Component layout={layout} {...props} />
        <span className="edit" onClick={onComponentEdit}>click to edit</span>
      </div>
    )
    : null;
};

ComponentsWrapper.propTypes = {
  isEdited: PropTypes.bool.isRequired,
  layout: PropTypes.string,
  onComponentEdit: PropTypes.func.isRequired,
};

ComponentsWrapper.defaultProps = {
  layout: null,
};
