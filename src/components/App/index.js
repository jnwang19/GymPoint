import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';

import { withAuthentication } from '../Session';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import UploadGyms from '../UploadGyms';
import SearchPage from '../Search';
import FirstQuestionsPage from '../FirstQuestions';
import AboutPage from '../About';
import ContactPage from '../Contact';

import * as ROUTES from '../../constants/routes';

const RouteContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 100,
    beforeChildren: true,
  },
  exit: {
    opacity: 0,
    afterChildren: true,
  }
});

const App = () => (
  <Router>
    <Route
      render={({ location }) => (
        <div className="screen">
          <Navigation />

          <PoseGroup flipMove={false}>
            <RouteContainer key={location.key}>
              <Switch location={location}>
                <Route exact path={ROUTES.LANDING} component={LandingPage} />
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                <Route path={ROUTES.HOME} component={HomePage} />
                <Route path={ROUTES.UPLOAD_GYMS} component={UploadGyms} />
                <Route path={ROUTES.SEARCH_NEARBY} component={SearchPage} />
                <Route path={ROUTES.FIRST_QUESTIONS} component={FirstQuestionsPage} />
                <Route path={ROUTES.ABOUT} component={AboutPage} />
                <Route path={ROUTES.CONTACT} component={ContactPage} />
              </Switch>
            </RouteContainer>
          </PoseGroup>
        </div>
      )}
    />
  </Router>
);

export default withAuthentication(App);
