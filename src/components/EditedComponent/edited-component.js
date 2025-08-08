import React from 'react';
import PropTypes from 'prop-types';

import { AvailableComponentForms } from '../ComponentForms'

export const EditedComponent = ({
    layout,
    onRemoveClick,
    values,
    ...props
  }) => {
    if (!layout) {
      return null;
    }
  
    const Component = AvailableComponentForms[layout];
  
    return Component
      ? (
        <div className="component-form-wrapper">
          <Component
            initialValues={values}
            layout={layout}
            handleSubmit={props.onSubmit}
            {...props}
          >
            <button
              className="component-button component-button--remove"
              onClick={onRemoveClick}
              type="button"
            >
              Remove
            </button>
          </Component>
        </div>
      )
      : null;
  };
  
  EditedComponent.propTypes = {
    layout: PropTypes.string,
    onRemoveClick: PropTypes.func.isRequired,
    values: PropTypes.shape({}),
  };
  
  EditedComponent.defaultProps = {
    layout: null,
    values: {},
  };
  