import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

import * as ROUTES from '../../constants/routes';

const NavBar = () => (
  <div className={styles.navbar}>
    <Link to={ROUTES.HOME}>
      <div className={styles.home}>Home</div>
    </Link>
    <div className={styles.dashboard}>Account Dashboard</div>
    <Link to={ROUTES.CONTACT}>
      <div className={styles.contact}>Contact Us</div>
    </Link>
    <Link to={ROUTES.ABOUT}>
      <div className={styles.about}>About Us</div>
    </Link>
  </div>
);

export default NavBar;
