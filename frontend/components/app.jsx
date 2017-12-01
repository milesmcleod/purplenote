// app.jsx
import React from 'react';
import AuthModalContainer from './auth/auth_modal_container';
import Splash from './splash/splash';
import HomeContainer from './home_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LogoutButtonContainer from './user/logout_button_container';
import UserImageContainer from './user/user_image_container';

const App = () => (
  <div className='app'>
    <Switch>
      <AuthRoute exact path='/' component={Splash} />
      <AuthRoute exact path='/signup' component={AuthModalContainer} />
      <AuthRoute exact path='/login' component={AuthModalContainer} />
      <ProtectedRoute component={HomeContainer} />
    </Switch>
    <ProtectedRoute component={UserImageContainer} />
    <ProtectedRoute component={LogoutButtonContainer} />
  </div>
);

export default App;
