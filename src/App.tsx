import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './routes';

import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <Router />
    <GlobalStyles />
  </BrowserRouter>
);

export default App;
