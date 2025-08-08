import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ComponentsWrapper } from '../ComponentsWrapper/components-wrapper';
import { componentsActions } from '../../store/components';

import './components-preview.css'

const isEmpty = obj => Object.keys(obj).length === 0;

export const ComponentsPreview = () => {
  const components = useSelector(state => state.components?.items);
  const currentlyEdited = useSelector(state => state.components?.currentlyEdited);
  const dispatch = useDispatch();  
  const onComponentEdit = component => dispatch(componentsActions.setEditedComponent({component}));

  return (
    <div data-testid="components-preview" className="components-preview">
      {components?.map(component => (
        <ComponentsWrapper
          key={component.id}
          isEdited={component?.id === currentlyEdited?.id && !isEmpty(component.values)}
          onComponentEdit={() => onComponentEdit(component)}
          {...component}
        />
      ))}
    </div>
  );
}

ComponentsPreview.defaultProps = {
  currentlyEdited: {},
};
