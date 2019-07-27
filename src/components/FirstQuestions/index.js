import React, { Component } from 'react';
import styles from './FirstQuestions.module.css';
import posed from 'react-pose';
import { Link } from 'react-router-dom';

import NavBar from '../NavBar';
import PrelimResultsPage from '../PrelimResults';

import * as ROUTES from '../../constants/routes';

const Page = posed.div({
  enter: {
    opacity: 1,
    transition: {
      delay: 500,
      duration: 500
    }
  },
  exit: {
    opacity: 0
  }
});

const FirstQuestionsPage = () => (
  <div>
    <NavBar />
    <Page>
      <div className={styles.intro}>
        Let's get you started with three questions
      </div>
      <FirstQuestions />
    </Page>
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
        <div className={styles.questionone}>
          <div className={styles.number}>
            1.
          </div>
          <div className={styles.questiontext}>
            How much are you to spend each month for a gym<br />
            membership or fitness class?
          </div>
        </div>
        <div className={styles.slidercontainer}>
          <input
            type="range"
            min="10"
            max="400"
            className={styles.slider}
            id="myRange"
            value={this.state.price}
            onChange={this.onPriceChange}
            step="5" />
          <div>${this.state.price}</div>
        </div>
        <div className={styles.questiontwo}>
          <div className={styles.number}>
            2.
          </div>
          <div className={styles.questiontext}>
            How far are you willing to commute to go to your<br />
            gym or fitness class?
          </div>
        </div>
        <div className={styles.mccontainer}>
          <div className={this.state.distance == 1 ? [styles.option, styles.optionactive].join(' ') : styles.option}
            onClick={() => this.onDistanceChange(1)}>
            <div className={styles.optionletter}>A.</div>
            <div className={styles.optiontext}>&#60; 5 Miles</div>
          </div>
          <div className={this.state.distance == 2 ? [styles.option, styles.optionactive].join(' ') : styles.option}
            onClick={() => this.onDistanceChange(2)}>B. 15 Miles</div>
          <div className={this.state.distance == 3 ? [styles.option, styles.optionactive].join(' ') : styles.option}
            onClick={() => this.onDistanceChange(3)}>C. 30 Miles</div>
          <div className={this.state.distance == 4 ? [styles.option, styles.optionactive].join(' ') : styles.option}
            onClick={() => this.onDistanceChange(4)}>D. 30+ Miles</div>
          <div className={this.state.distance == 5 ? [styles.option, styles.optionactive].join(' ') : styles.option}
            onClick={() => this.onDistanceChange(5)}>E. Unimportant</div>
        </div>
        {this.state.distance != 0 || this.state.lat != 0 ?
          <Link to={{
          pathname: ROUTES.PRELIM_RESULTS,
          state: {
            price: this.state.price,
            distance: this.state.distance,
            lat: this.state.lat,
            long: this.state.long
          }}}>
          <div className={styles.results}>
            <div className={styles.buttontext}>Preliminary Results</div>
          </div>
        </Link>
        : <div className={styles.results}>
            <div className={styles.buttontext}>Preliminary Results</div>
          </div>}
      </div>
    );
  }
}

export default FirstQuestionsPage;
