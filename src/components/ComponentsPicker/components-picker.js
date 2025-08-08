import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { uuid } from '../../utils/uuid';
import { componentsActions } from '../../store/components';
import { AvailableComponents } from '../Components';

import './components-picker.css'

export const ComponentsPicker = () => {
  const dispatch = useDispatch();
  const currentlyEdited = useSelector(state => state.components?.currentlyEdited);
  const lockedPicker = Boolean(currentlyEdited);
  
  const onComponentClick = layout => dispatch(componentsActions.addComponent({id: uuid(), layout}));

  return (
    <div className="components-picker">
      {AvailableComponents.map(component => (
        <div
          className={`components-picker__component ${
            lockedPicker ? 'components-picker__component--disabled' : ''
          }`}
          key={component.layout}
          onClick={!lockedPicker ? () => onComponentClick(component.layout) : undefined}
        >
          <span className="components-picker__component-label">
            {component.label}
          </span>
        </div>
      ))}
    </div>
  );
}

ComponentsPicker.propTypes = {
  lockedPicker: PropTypes.bool.isRequired,
};