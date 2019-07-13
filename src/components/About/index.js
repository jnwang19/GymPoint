import React from 'react';
import styles from './About.module.css';
import posed from 'react-pose';

import NavBar from '../NavBar';
import { withAuthorization } from '../Session';

const Nav = posed.div({
  enter: {opacity: 1.0},
  exit: {opacity: 1.0},
});

const AboutPage = () => (
  <div>
    <Nav className={styles.navbar}>
      <NavBar />
    </Nav>
    <div className={styles.about}>About Us</div>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AboutPage);
