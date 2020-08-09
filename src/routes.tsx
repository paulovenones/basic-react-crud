import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ListClients from './pages/ListClients';
import ClientForm from './pages/ClientForm';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ListClients}/>
      <Route path="/add-client" component={ClientForm}/>
    </BrowserRouter>
  );
}

export default Routes;
