import React from 'react';
import styles from './Contact.module.css';

import { withAuthorization } from '../Session';

const ContactPage = () => (
  <div>
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
