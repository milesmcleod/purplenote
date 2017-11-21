// app.jsx
import React from 'react';
import SignUpModalContainer from './signup/signup_modal_container';
import LogInModalContainer from './login/login_modal_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className='app'>
    <AuthRoute exact path='/signup' component={SignUpModalContainer} />
    <AuthRoute exact path='/login' component={LogInModalContainer} />
  </div>
);

export default App;
