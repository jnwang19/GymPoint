import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './PrelimResults.module.css';
import posed from 'react-pose';

import NavBar from '../NavBar';
import * as ROUTES from '../../constants/routes';
import { FirebaseContext } from '../Firebase';

const PrelimResultsPage = props => (
  <div>
    <NavBar />
    <h1>{props.location.state.lat}|{props.location.state.long}</h1>
    <FirebaseContext.Consumer>
      {firebase =>
        <PrelimResults
          firebase={firebase}
          price={props.location.state.price}
          distance={props.location.state.distance}
          lat={props.location.state.lat}
          long={props.location.state.long}
        />
      }
    </FirebaseContext.Consumer>
  </div>
);

class PrelimResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gyms: [{name: "Equinox", price: 30, id: 1}, {name: "PF", price: 15, id: 2}]
    };
  };

  async componentDidMount() {
    let self = this;

    var initialList = [];
    // var initialList = this.props.firebase.doQueryGyms(this.props.price);
    for (let i = 0; i < initialList.length; i += 10) {
      var queryCoords = this.props.long.toString() + "," + this.props.lat.toString() + ";";
      var destinations = ""
      for (let j = 0; j < Math.min(10, initialList.length); j++) {
        // queryCoords += initialList[i + j].coordinates["long"] + "," + initialList[i + j].coordinates["lat"]
        destinations += (j + 1).toString();
        if (j != 10) {
          queryCoords += ";";
          destinations += ";"
        }
      }
      var query = "https://gympoint-osrm.herokuapp.com/table/v1/car/" +
      queryCoords + "?sources=0&destinations=" +
      destinations + "&annotations=distance";

      var res = await fetch(query);
      var resJson = await this.getJson(res);
      await this.distanceFilter(resJson, i, initialList);
      if (this.state.gyms.length >= 6) {
        break;
      }
    }
  };

  getJson = (res) => {
    return res.json();
  };

  distanceFilter = (result, i, initialList) => {
    var distances = result["distances"];
    for (let j = 0; j < distances.length; j++) {
      if (distances[j] <= this.props.distance) {
        this.setState({gyms: this.state.gyms.concat(initialList[i + j])});
      }
    }
  };

  render() {
    return (
      <div>
        {this.props.long}
        <div className={styles.results}>
          {this.state.gyms.map((gym) => {
            return (
              <GymCard
                key={gym.id}
                name={gym.name}
                price={gym.price}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

class GymCard extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className={styles.gymcard}>
        {this.props.name} <br />
        {this.props.price}
      </div>
    );
  }
}

export default PrelimResultsPage;
