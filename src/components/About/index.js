import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';
import posed from 'react-pose';

import NavBar from '../NavBar';
import { withAuthorization } from '../Session';
import * as ROUTES from '../../constants/routes';

const Nav = posed.div({
  enter: {opacity: 1.0},
  exit: {opacity: 1.0},
});

const AboutPage = () => (
  <div>
    <Nav className='navbar'>
      <NavBar />
    </Nav>
    <div className={styles.about}>About Us</div>
    <Link to={ROUTES.TEAM}>
      <div className={[styles.team, styles.card].join(' ')}>
      </div>
    </Link>
    <div className={[styles.process, styles.card].join(' ')}>
    </div>
    <div className={[styles.why, styles.card].join(' ')}>
    </div>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AboutPage);
