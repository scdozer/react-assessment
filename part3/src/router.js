import React from 'react';
import { Switch, Route } from  'react-router-dom';

import Home from './components/home/home';
import Detail from './components/detail/detail';


export default(
  <Switch>
    <Route component = { Home } path = "/" exact />
    <Route component = { Detail } path = "/detail/:id"/>
    <Route component= { Home } />
  </Switch>
)
