import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './SignUp.module.css';

import NavBar from '../NavBar';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
  <div>
    <NavBar />
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUser(email, passwordOne)
      .then(authUser => {
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          });
      })
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
      <input
        name="username"
        className={[styles.inputsignup, styles.inputfirstname].join(' ')}
        value={username}
        onChange={this.onChange}
        type="text"
        placeholder="Just your First Name..."
      />
      <input
        name="email"
        className={[styles.inputsignup, styles.inputemail].join(' ')}
        value={email}
        onChange={this.onChange}
        type="text"
        placeholder="Email..."
      />
      <input
        name="passwordOne"
        className={[styles.inputsignup, styles.inputpassword].join(' ')}
        value={passwordOne}
        onChange={this.onChange}
        type="password"
        placeholder="Password..."
      />
      <input
        name="passwordTwo"
        className={[styles.inputsignup, styles.inputconfirm].join(' ')}
        value={passwordTwo}
        onChange={this.onChange}
        type="password"
        placeholder="Confirm Password..."
      />
      <button className={styles.register} disabled={isInvalid} type="submit">Register</button>

      {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up Here</Link>
  </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink };
