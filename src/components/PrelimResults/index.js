import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './PrelimResults.module.css';
import posed from 'react-pose';

import NavBar from '../NavBar';
import * as ROUTES from '../../constants/routes';
import { FirebaseContext } from '../Firebase';

const LoadScreen = posed.div({
  open: {
    opacity: 100,
    staggerChildren: 3000
  },
  closed: {
    opacity: 0
  }
});

const LoadText = posed.div({
  open: { opacity: 1 },
  closed: { opacity: 0 }
});

class PrelimResultsPage extends Component {
  constructor(props) {
    super(props);
    if (props.location.state == undefined) {
      this.props.history.push(ROUTES.LANDING);
    }
  }

  render() {
    return (
      <div>
      { this.props.location.state == undefined ? null :
        <div>
          <NavBar />
          <h1>{this.props.location.state.lat}|{this.props.location.state.long}</h1>
          <div className={styles.header}>
            Preliminary Results
          </div>
          <FirebaseContext.Consumer>
            {firebase =>
              <PrelimResults
                firebase={firebase}
                price={this.props.location.state.price}
                distance={this.props.location.state.distance}
                lat={this.props.location.state.lat}
                long={this.props.location.state.long}
              />
            }
          </FirebaseContext.Consumer>
          <div className={styles.message}>
            <div className={styles.messageheader}>
              A quick message
            </div>
            <div className={styles.messagebody}>
              Here are the preliminary results we<br />
              found for you based on price and<br />
              distance.<br /><br />
              Keep in mind that if you sign up, we can<br />
              take into consideration conditions such<br />
              as classes you'd like to take, personal<br />
              training, and offer special discounts for<br />
              certain gyms!
            </div>
            <div className={styles.messagesignup}>
              <div className={styles.messagetext}>
                Sign Up
              </div>
              <checkhor className="right"></checkhor>
            </div>
            <div className={styles.messagecancel}>
              <div className={styles.messagetext}>
                No, thanks
              </div>
              <checkhorblack className="right"></checkhorblack>
            </div>
          </div>
        </div>
      }
      </div>
    );
  }
}

class PrelimResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gyms: [{name: "Equinox", price: 30, id: 1}, {name: "PF", price: 15, id: 2}],
      isLoading: false,
    };
  };

  async componentDidMount() {
    this.setState({isLoading: true});
    let self = this;

    var initialList = [];
    // var initialList = this.props.firebase.doQueryGyms(this.props.monthly_fee, this.props.session_fee);
    for (let i = 0; i < initialList.length; i++) {
      if (!(this.props.type.some(r => initialList[i].includes(r)) && this.props.studio_type.some(r => initialList[i].includes(r)))) {
        initialList.splice(i, 1);
      }
    }
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
        this.setState({isLoading: false});
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
        initialList[i + j].distance = distances[j];
        this.setState({gyms: this.state.gyms.concat(initialList[i + j])});
      }
    }
  };

  render() {
    return (
      <div>
        {false ?
          <LoadScreen className={styles.loading} pose={this.state.isLoading ? 'open' : 'closed'}>
            <LoadText className={styles.loadtextone}>Processing your responses</LoadText>
            <LoadText className={styles.loadtexttwo}>Collecting search results</LoadText>
            <LoadText className={styles.loadtextthree}>Making things look pretty</LoadText>
            <LoadText className={styles.loadtextfour}>Just a little more...</LoadText>
          </LoadScreen>
          : <div className={styles.results}>
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
        }
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
        <div className={styles.gymname}>
          {this.props.name}
        </div>
        <div className={styles.gymprice}>
          ${this.props.price} / Month
        </div>
        <div className={styles.gymrating}>
          4.0
        </div>
      </div>
    );
  }
}

export default PrelimResultsPage;
