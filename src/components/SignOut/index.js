import React, { Component } from 'react';

import { FirebaseContext } from '../Firebase';

const SignOut = () => (
  <FirebaseContext.Consumer>
    {firebase => <SignOutButton firebase={firebase} />}
  </FirebaseContext.Consumer>
);

class SignOutButton extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <button type="button" onClick={this.props.firebase.doSignOut}>
        Sign Out
      </button>
    );
  }
}

export default SignOut;
