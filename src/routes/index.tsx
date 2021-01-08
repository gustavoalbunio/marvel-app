import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Characters from '../pages/Characters';
import Character from '../pages/Character';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Characters} />
    <Route path="/character" exact component={Character} />
  </Switch>
);

export default Routes;
