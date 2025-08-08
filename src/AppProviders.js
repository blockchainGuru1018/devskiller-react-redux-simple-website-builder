import React from 'react';
import { Provider } from 'react-redux';

import { getStore } from './store';

export const AppProviders = ({ children, store = getStore() }) => (
  <Provider store={store}>
    { children }
  </Provider>
);
