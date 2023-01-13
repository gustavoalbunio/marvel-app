import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Characters } from '../pages/Characters';
import { Character } from '../pages/Character';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="/character" element={<Character />} />
    </Routes>
  );
}

export default Router;
