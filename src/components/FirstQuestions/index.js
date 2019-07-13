import React, { Component } from 'react';
import styles from './FirstQuestions.module.css';

import NavBar from '../NavBar';
import { withAuthorization } from '../Session';

const FirstQuestionsPage = () => (
  <div>
    <div className={styles.navbar}>
      <NavBar />
    </div>
    <div className={styles.intro}>
      Great! Let's get you started with <div>two questions.</div>
    </div>
    <FirstQuestions />
  </div>
);

class FirstQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNext: false
    };
  };

  nextQuestion = () => {
    this.setState({isNext: true});
  };

  prevQuestion = () => {
    this.setState({isNext: false});
  };

  render() {
    return (
      <div>
        <div className={this.state.isNext ? [styles.question, styles.first, styles.firstclosed].join(' ')
        : [styles.question, styles.first].join(' ')}>
          <div className={[styles.button, styles.nextbutton].join(' ')} onClick={this.nextQuestion}></div>
        </div>
        <div className={this.state.isNext ? [styles.question, styles.second].join(' ')
        : [styles.question, styles.second, styles.secondclosed].join(' ')}>
        </div>
        <div className={this.state.isNext ? [styles.button, styles.prevbutton].join(' ')
      : [styles.button, styles.prevbutton, styles.prevbuttonclosed].join(' ')} onClick={this.prevQuestion}></div>
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(FirstQuestionsPage);
