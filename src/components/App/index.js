import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { FirebaseContext } from '../Firebase';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import UploadGyms from '../UploadGyms';
import SearchPage from '../Search';

import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.UPLOAD_GYMS} component={UploadGyms} />
      <Route path={ROUTES.SEARCH_NEARBY} component={SearchPage} />
    </div>
  </Router>
  // <FirebaseContext.Consumer>
  //   {firebase => <UploadGymsForm firebase={firebase} />}
  // </FirebaseContext.Consumer>
  //< Search />
);

export default App;
