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

  handleFiles = files => {
    if (window.FileReader) {
      this.getAsText(files[0]);
    } else {
      alert('FileReader is not supported in this browser.');
    }
  };

  getAsText = file => {
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = this.loadHandler;
    reader.onerror = this.errorHandler;
  };

  loadHandler = event => {
    var csv = event.target.result;
    this.processData(csv);
  };

  processData = csv => {
    var text = csv.split(/\r\n|\n/);

    for (var i = 0; i < text.length; i++) {
      var data = text[i].split(/,\s*(?=(?:[^"]|"[^"]*")*$)/g);
      var name = data[0].replace(/\"/g, "");
      var address = data[1].replace(/\"/g, "");
      this.props.firebase.doCreateGym(name, address);
    }
  };

  errorHandler = event => {
    if (event.target.error.name === "NotReadableError") {
      alert("Cannot read file!");
    }
  };

  render() {
    const {
      name,
      address,
    } = this.state;

    return (
      <div>
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

        <input
          type="file"
          id="csvInput"
          onChange={(e) => this.handleFiles(e.target.files)}
          accept=".csv"
        />
      </div>
        );
      }
   }

export default UploadGyms;

export { UploadGymsForm };
