import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './PrelimResults.module.css';
import posed from 'react-pose';

import NavBar from '../NavBar';
import * as ROUTES from '../../constants/routes';

const PrelimResultsPage = props => (
  <div>
    <NavBar />
    <h1>{props.location.state.price}hello{props.location.state.distance}</h1>
    <PrelimResults />
  </div>
);

class PrelimResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {
    return (
      <div>
        {this.props.price}
      </div>
    );
  }
}

export default PrelimResultsPage;
