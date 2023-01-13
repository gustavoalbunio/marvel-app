import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Characters from '../pages/Characters';
import Character from '../pages/Character';

const Router: React.FC = () => (
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="/character" element={<Character />} />
    </Routes>
);

export default Router;
