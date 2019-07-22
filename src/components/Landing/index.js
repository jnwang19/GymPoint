import React, { Component } from 'react';
import styles from './Landing.module.css';
import NavBar from '../NavBar';
import TeamPage from '../Team';
import ContactPage from '../Contact';

const LandingPage = () => (
  <div>
    <NavBar />
    <div className={styles.imageone}></div>
    <div className={styles.imagetwo}></div>
    <div className={styles.letsfindbutton}></div>
    <div className={styles.findagymbutton}></div>
    <div className={styles.tellus}></div>
    <div className={styles.pickyour}></div>
    <div className={styles.scheduleyour}></div>
    <div className={styles.team}><TeamPage /></div>
    <div className={styles.contact}><ContactPage /></div>
    <ScrollButton />
  </div>
);

class ScrollButton extends Component {
  constructor(props) {
    super(props);
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <div className={styles.backtotop} onClick={this.scrollToTop}>Back to Top</div>
    )
  }
}

export default LandingPage;
