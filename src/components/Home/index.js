import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import posed from 'react-pose';

import { withAuthorization } from '../Session';
import * as ROUTES from '../../constants/routes';

const Home = posed.div({
  hoverable: true,
  init: {opacity: 0.85},
  hover: {opacity: 1.0},
  transition: {
    ease: 'easeInOut'
  },
  enter: {
    x: 0,
    y: 0,
    width: '31%',
    height: '100%',
  },
  exit: {
    x: '-1.17vw',
    y: '-8.88vh',
    width: '10.7vw',
    height: '3.91vw',
  }
});

const Dashboard = posed.div({
  hoverable: true,
  init: {opacity: 0.85},
  hover: {opacity: 1.0},
  transition: {
    ease: 'easeInOut'
  },
  enter: {
    x: 0,
    y: 0,
    width: '31%',
    height: '58.62%',
    transition: {
      ease: 'easeInOut',
      duration: 300,
    },
  },
  exit: {
    x: '-12.97vw',
    y: 'calc(-42.05vw - 8.88vh)',
    width: '23.05vw',
    height: '3.91vw',
    transition: {
      ease: 'easeInOut',
      duration: 300,
    },
  }
});

const About = posed.div({
  hoverable: true,
  init: {opacity: 0.85},
  hover: {opacity: 1.0},
  transition: {
    ease: 'easeInOut'
  },
  enter: {
    x: 0,
    y: 0,
    width: '31%',
    height: '17.24%',
    transition: {
      ease: 'easeInOut'
    },
  },
  exit: {
    x: '-7.89vw',
    y: 'calc(-32.51vw - 8.88vh)',
    width: '10.7vw',
    height: '3.91vw',
    transition: {
      ease: 'easeInOut'
    },
  }
});

const Contact = posed.div({
  hoverable: true,
  init: {opacity: 0.85},
  hover: {opacity: 1.0},
  transition: {
    ease: 'easeInOut'
  },
  enter: {
    x: 0,
    y: 0,
    width: '31%',
    height: '17.24%',
    transition: {
      ease: 'easeInOut'
    },
  },
  exit: {
    x: '-20.23vw',
    y: 'calc(-42.02vw - 8.88vh)',
    width: '13.83vw',
    height: '3.91vw',
    transition: {
      ease: 'easeInOut'
    },
  }
});

const HomePage = () => (
  <div className={styles.center}>
    <div className={styles.container}>
      <Link to={ROUTES.FIRST_QUESTIONS}>
        <Home className={[styles.card, styles.find].join(' ')}>
          <div className={styles.findtext}>
            Find a<br />Gym
          </div>
        </Home>
      </Link>
      <Dashboard className={[styles.card, styles.dashboard].join(' ')}>
        <div className={styles.dashtext}>
          Account<br />Dashboard
        </div>
      </Dashboard>
      <Link to={ROUTES.CONTACT}>
        <Contact className={[styles.card, styles.contact].join(' ')}>
          <div className={styles.bluetext}>
            Contact Us
          </div>
        </Contact>
      </Link>
      <Link to={ROUTES.ABOUT}>
        <About className={[styles.card, styles.about].join(' ')}>
          <div className={styles.bluetext}>
            About Us
          </div>
        </About>
      </Link>
      <div className={styles.welcome}>Welcome</div>
    </div>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
