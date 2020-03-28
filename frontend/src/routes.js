import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';

function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Logon} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;