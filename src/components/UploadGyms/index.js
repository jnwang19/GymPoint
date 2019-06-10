import React, { Component } from 'react';

import { FirebaseContext } from '../Firebase';

const UploadGyms = () => (
  <div>
    <h1>Upload Gyms</h1>
    <FirebaseContext.Consumer>
      {firebase => <UploadGymsForm firebase={firebase} />}
    </FirebaseContext.Consumer>
  </div>
);

class UploadGymsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
     name: "",
     address: ""
    };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addGym = event => {
    const { name, address } = this.state;

    this.props.firebase
      .doCreateGym(name, address)
      .then(() => {
        this.setState({
          name: "",
          address: ""
        });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const {
      name,
      address,
    } = this.state;

    return (
        <form onSubmit={this.addGym}>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={this.onChange}
          />
          <input
            type="text"
            name="address"
            value={address}
            placeholder="Address"
            onChange={this.onChange}
          />
          <button type="submit">Submit</button>
        </form>
        );
      }
   }

export default UploadGyms;

export { UploadGymsForm };
