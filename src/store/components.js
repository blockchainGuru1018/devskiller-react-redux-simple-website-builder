import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  currentlyEdited: null,
  items: [],
};

export const componentsSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    addComponent: (state, action) => {
      const { id, layout } = action.payload;
      const newComponent = { id, layout, values: {} };
      state.items.push(newComponent);
      state.currentlyEdited = newComponent;
    },
    updateComponent: (state, action) => {
      const { id, data } = action.payload;
      const index = state.items.findIndex(item => item.id === id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...data };
      }
      state.currentlyEdited = null;
    },
    removeComponent: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      state.currentlyEdited = null;
    },
    setEditedComponent: (state, action) => {
      state.currentlyEdited = action.payload.component;
    },
    reorderComponents: (state, action) => {
      const { activeId, overId } = action.payload;
      const oldIndex = state.items.findIndex(item => item.id === activeId);
      const newIndex = state.items.findIndex(item => item.id === overId);

      if (oldIndex !== -1 && newIndex !== -1) {
        const newItems = [...state.items];
        const [removed] = newItems.splice(oldIndex, 1);
        newItems.splice(newIndex, 0, removed);
        state.items = newItems;
      }
    },
  },
})

export const componentsActions = componentsSlice.actions;
export const componentsReducer = componentsSlice.reducer;