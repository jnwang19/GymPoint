import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

import * as ROUTES from '../../constants/routes';

const NavBar = () => (
  <div className={styles.navbar}>
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
  </div>
);

export default NavBar;
