import React from 'react';
import styles from './Contact.module.css';
import posed from 'react-pose';

import NavBar from '../NavBar';
import { withAuthorization } from '../Session';

const Nav = posed.div({
  enter: {opacity: 1.0},
  exit: {opacity: 1.0},
});

const ContactPage = () => (
  <div>
    <Nav className={styles.navbar}>
      <NavBar />
    </Nav>
    <div className={styles.contact}>Contact Us</div>
    <div className={styles.form}>
      <form id="usrform">
        <input
          className={styles.input}
          type="text"
        />
        <input
          className={styles.input}
          type="text"
        />
        <input
          className={styles.input}
          type="text"
        />
      </form>
      <textarea form="usrform"></textarea>
    </div>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(ContactPage);
