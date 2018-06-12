import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import App from './components/App';
import Evaluation from './components/Evaluation';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/evaluations/:id" component={Evaluation} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
