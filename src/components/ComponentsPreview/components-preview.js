import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { componentsActions } from '../../store/components';
import { SortableComponent } from '../SortableComponent/SortableComponent';
import './components-preview.css';

export const ComponentsPreview = () => {
  const components = useSelector(state => state.components?.items);
  const currentlyEdited = useSelector(state => state.components?.currentlyEdited);
  const dispatch = useDispatch();

  const onComponentEdit = (component) => {
    dispatch(componentsActions.setEditedComponent({ component }));
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      dispatch(componentsActions.reorderComponents({
        activeId: active.id,
        overId: over.id,
      }));
    }
  };

  const isDraggingDisabled = Boolean(currentlyEdited);

  return (
      <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          modifiers={isDraggingDisabled ? [restrictToVerticalAxis] : []}
      >
        <SortableContext
            items={components?.map(c => c.id) || []}
            strategy={verticalListSortingStrategy}
        >
          <div data-testid="components-preview" className="components-preview">
            {components?.map(component => (
                <SortableComponent
                    key={component.id}
                    id={component.id}
                    component={component}
                    onComponentEdit={() => onComponentEdit(component)}  // Pass handler
                />
            ))}
          </div>
        </SortableContext>
      </DndContext>
  );
};