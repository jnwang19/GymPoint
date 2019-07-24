import React, { Component } from 'react';
import styles from './FirstQuestions.module.css';
import posed from 'react-pose';
import { Link } from 'react-router-dom';

import NavBar from '../NavBar';
import PrelimResultsPage from '../PrelimResults';

import * as ROUTES from '../../constants/routes';

const FirstQuestionsPage = () => (
  <div>
    <NavBar />
    <div className={styles.intro}>
      Let's get you started with three questions
    </div>
    <FirstQuestions />
  </div>
);

class FirstQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 50,
      distance: 0,
      lat: 0,
      long: 0
    };
  };

  componentDidMount = () => {
    let self = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((function(position) {
        self.setState({lat: position.coords.latitude});
        self.setState({long: position.coords.longitude});
      }));
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  onPriceChange = event => {
    this.setState({price: event.target.value});
  };

  onDistanceChange = choice => {
    this.setState({distance: choice});
  };

  onQuestionSubmit = () => {

  };

  render() {
    return (
      <div>
        <div className={styles.slidercontainer}>
          <input
            type="range"
            min="10"
            max="100"
            className={styles.slider}
            id="myRange"
            value={this.state.price}
            onChange={this.onPriceChange}
            step="5" />
          <div>${this.state.price}</div>
        </div>
        <div className={styles.mccontainer}>
          <div className={this.state.distance == 1 ? [styles.option, styles.optionactive].join(' ') : styles.option}
            onClick={() => this.onDistanceChange(1)}>A. &#60; 5 Miles</div>
          <div className={this.state.distance == 2 ? [styles.option, styles.optionactive].join(' ') : styles.option}
            onClick={() => this.onDistanceChange(2)}>B. 15 Miles</div>
          <div className={this.state.distance == 3 ? [styles.option, styles.optionactive].join(' ') : styles.option}
            onClick={() => this.onDistanceChange(3)}>C. 30 Miles</div>
          <div className={this.state.distance == 4 ? [styles.option, styles.optionactive].join(' ') : styles.option}
            onClick={() => this.onDistanceChange(4)}>D. 30+ Miles</div>
          <div className={this.state.distance == 5 ? [styles.option, styles.optionactive].join(' ') : styles.option}
            onClick={() => this.onDistanceChange(5)}>E. Unimportant</div>
        </div>
        {this.state.distance != 0 ?
          <Link to={{
          pathname: ROUTES.PRELIM_RESULTS,
          state: {
            price: this.state.price,
            distance: this.state.distance,
            lat: this.state.lat,
            long: this.state.long
          }}}>
          <div className={styles.results}>
            Preliminary Results
          </div>
        </Link>
        : <div className={styles.results}>
            Preliminary Results
          </div>}
      </div>
    );
  }
}

export default FirstQuestionsPage;
