import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LoginPage} />
      <Route path="/:id" exact component={MainPage} />

      <Route component={() => <h1>Página não encontrada</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
