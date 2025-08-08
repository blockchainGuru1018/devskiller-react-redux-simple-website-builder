import { configureStore } from '@reduxjs/toolkit'
import { componentsReducer } from './components';

export const getStore = () => configureStore({
  reducer: {}
})
