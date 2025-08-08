import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { AvailableComponents } from '../Components'
import './components-wrapper.css'

export const ComponentsWrapper = ({
  isEdited,
  layout,
  onComponentEdit,
  values = {},
  ...props
}) => {
  if (!layout) {
    return null;
  }

  const Component = AvailableComponents.find(comp => comp.layout === layout)?.component;

  const wrapperClass = classNames(
    'components-wrapper',
    { 'components-wrapper--active': isEdited },
  );

  const handleEditClick = (e) => {
    e.stopPropagation();
    if (typeof onComponentEdit === 'function') {
      onComponentEdit();
    }
  };

  return Component ? (
      <div className={wrapperClass} onClick={handleEditClick}>
        <Component layout={layout} values={values}{...props} />
        <span className="edit">click to edit</span>
      </div>
  ) : null;
};

ComponentsWrapper.propTypes = {
  isEdited: PropTypes.bool.isRequired,
  layout: PropTypes.string,
  onComponentEdit: PropTypes.func.isRequired,
  values: PropTypes.object,
};

ComponentsWrapper.defaultProps = {
  layout: null,
  values: {},
};
