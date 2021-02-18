import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PaginaInicial from '../pages/PaginaInicial';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PaginaInicial}/>
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;