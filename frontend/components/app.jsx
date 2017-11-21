// app.jsx
import React from 'react';
import AuthModalContainer from './auth/auth_modal_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className='app'>
    <AuthRoute exact path='/signup' component={AuthModalContainer} />
    <AuthRoute exact path='/login' component={AuthModalContainer} />
  </div>
);

export default App;
