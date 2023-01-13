import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './routes';

import GlobalStyles from './styles/global';

export function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyles />
    </BrowserRouter>
  );
}
