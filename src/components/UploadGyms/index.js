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
     street: "",
     city: "",
     state: "",
     zip: "",
     coordinates: {lat: 0, long: 0},
     initation_fee: 0,
     monthly_fee: 0,
     phone: "",
     website: "",
     hours: [],
     type: "",
     rating: 0,
     classes: [],
     amenities: []
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
      var street = data[1].replace(/\"/g, "");
      var city = data[2].replace(/\"/g, "");
      var state = data[3].replace(/\"/g, "");
      var zip = data[4].replace(/\"/g, "");
      var coordsList = data[5].split("|");
      var coordinates = {lat: coordsList[0].replace(/\"/g, "").parseFloat(), long: coordsList[1].replace(/\"/g, "").parseFloat()};
      var initiation_fee = data[6].replace(/\"/g, "").parseFloat();
      var monthly_fee = data[7].replace(/\"/g, "").parseFloat();
      var phone = data[8].replace(/\"/g, "");
      var website = data[9].replace(/\"/g, "");
      var hoursList = data[10].split("|");
      var hours = [];
      for (let j = 0; j < hoursList.length; j++) {
        hours.push(hoursList[j]).replace(/\"/g, "");
      }
      var type = data[11].replace(/\"/g, "");
      var rating = data[12].replace(/\"/g, "").parseFloat();
      var classesList = data[13].split("|");
      var classes = [];
      for (let j = 0; j < classesList.length; j++) {
        classes.push(classesList[j]).replace(/\"/g, "");
      }
      var amenitiesList = data[14].split("|");
      var amenities = [];
      for (let j = 0; j < amenitiesList.length; j++) {
        amenities.push(amenitiesList[j]).replace(/\"/g, "");
      }
      this.props.firebase.doCreateGym(name, street, city, state, zip, coordinates, initiation_fee, monthly_fee, phone, website, hours, type, rating, classes, amenities);
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
