import React from 'react';
import { AppProviders } from './AppProviders';

import { Layout } from './components/Layout/layout';

export const App = () => (
  <AppProviders>
    <Layout />
  </AppProviders>
);
