// src/components/SortableComponent/SortableComponent.js
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ComponentsWrapper } from '../ComponentsWrapper/components-wrapper';
import React from 'react';

export const SortableComponent = ({ id, component, onComponentEdit }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        cursor: isDragging ? 'grabbing' : 'grab',
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            className="sortable-component"
        >
            <div className="drag-handle" {...listeners}>
                ≡ {/* Drag handle icon */}
            </div>
            <ComponentsWrapper
                {...component}
                onComponentEdit={onComponentEdit}  // Pass the handler down
            />
        </div>
    );
};