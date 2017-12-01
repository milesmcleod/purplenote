// app.jsx
import React from 'react';
import AuthModalContainer from './auth/auth_modal_container';
import Splash from './splash/splash';
import HomeContainer from './home_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className='app'>
    <Switch>
      <AuthRoute exact path='/' component={Splash} />
      <AuthRoute exact path='/signup' component={AuthModalContainer} />
      <AuthRoute exact path='/login' component={AuthModalContainer} />
      <ProtectedRoute component={HomeContainer} />
    </Switch>
  </div>
);

export default App;
