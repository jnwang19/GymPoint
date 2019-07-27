import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import posed from 'react-pose';

import * as ROUTES from '../../constants/routes';

const Nav = posed.div({
  enter: {
    y: '-15vh',
    opacity: 1,
    transition: {
      duration: 500
    }
  },
  exit: {
    opacity: 0
  }
});

const NavBar = () => (
  <Nav className={styles.navbar}>
    <Link to={ROUTES.LANDING}>
      <div className={styles.gympoint}>gympoint.</div>
    </Link>
    <Link to={ROUTES.LANDING}>
      <div className={styles.home}>Home</div>
    </Link>
    <Link to={ROUTES.FIRST_QUESTIONS}>
      <div className={styles.find}>Find a Gym</div>
    </Link>
    <Link to={ROUTES.CONTACT}>
      <div className={styles.contact}>Contact Us</div>
    </Link>
    <div className={styles.about}>My Account</div>
  </Nav>
);

export default NavBar;
