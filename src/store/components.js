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
    },
    updateComponent: (state, action) => {
    },
    removeComponent: (state, action) => {
    },
    setEditedComponent: (state, action) => {
    },
  },
})

export const componentsActions = componentsSlice.actions
export const componentsReducer = componentsSlice.reducer
