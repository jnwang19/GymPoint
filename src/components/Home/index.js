import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

import { withAuthorization } from '../Session';
import * as ROUTES from '../../constants/routes';


const HomePage = () => (
  <div className={styles.center}>
    <div className={styles.container}>
      <Link to={ROUTES.FIRST_QUESTIONS}>
        <div className={[styles.card, styles.find].join(' ')}>
          <div className={styles.findtext}>
            Find a<br />Gym
          </div>
        </div>
      </Link>
      <div className={[styles.card, styles.dashboard].join(' ')}>
        <div className={styles.dashtext}>
          Account<br />Dashboard</div>
        </div>
      <Link to={ROUTES.CONTACT}>
        <div className={[styles.card, styles.contact].join(' ')}>
          <div className={styles.bluetext}>
            Contact Us</div>
          </div>
      </Link>
      <Link to={ROUTES.ABOUT}>
        <div className={[styles.card, styles.about].join(' ')}>
          <div className={styles.bluetext}>
            About Us
          </div>
        </div>
      </Link>
      <div className={[styles.card, styles.process].join(' ')}>
        <div className={styles.bluetext}>
          Our Process
        </div>
      </div>
      <div className={styles.welcome}>Welcome</div>
    </div>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
