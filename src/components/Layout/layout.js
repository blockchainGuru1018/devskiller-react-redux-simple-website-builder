import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Navbar } from '../Navbar/navbar';
import { ComponentsPicker } from '../ComponentsPicker/components-picker';
import { ComponentsPreview } from '../ComponentsPreview/components-preview';
import { EditedComponent } from '../EditedComponent/edited-component';

import { componentsActions } from '../../store/components';

export const Layout = () => {
  const currentlyEdited = useSelector(state => state.components?.currentlyEdited);
  const dispatch = useDispatch();  
  const onRemoveClick = id => dispatch(componentsActions.removeComponent({id}));
  const onSubmit = (id, values) => dispatch(componentsActions.updateComponent({id, data: { values }}));

  return   <>
    <Navbar />
    <div className="d-flex">
      <ComponentsPreview />
      <ComponentsPicker />
    </div>
    {currentlyEdited && (
      <EditedComponent
        layout={currentlyEdited.layout}
        onRemoveClick={() => onRemoveClick(currentlyEdited.id)}
        onSubmit={values => onSubmit(currentlyEdited.id, values)}
        values={currentlyEdited.values}
      />
    )}
  </>
}

Layout.defaultProps = {
  currentlyEdited: null,
};
