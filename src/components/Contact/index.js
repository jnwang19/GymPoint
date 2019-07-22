import React from 'react';
import styles from './Contact.module.css';

const ContactPage = () => (
  <div className={styles.contact}>
    <div>Contact Us</div>
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

export default ContactPage;
