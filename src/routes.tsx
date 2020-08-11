import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ListClients from './pages/ListClients';
import ClientForm from './pages/ClientForm';
import UpdateClient from './pages/UpdateClient';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ListClients}/>
      <Route path="/add-client" component={ClientForm}/>
      <Route path="/update-client/:id" component={UpdateClient}/>
    </BrowserRouter>
  );
}

export default Routes;
