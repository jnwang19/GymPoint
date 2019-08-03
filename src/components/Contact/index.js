import React, { Component } from 'react';
import styles from './Contact.module.css';

const ContactPage = () => (
  <div className={styles.contact}>
    <ContactForm />
  </div>
);

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      regarding: '',
      message: '',
    };
  }

  onSubmit = () => {
    console.log("todo");
  };

  render() {
    return (
      <div className={styles.contact}>
        <div className={styles.heading}>Contact Us</div>
        <div className={styles.text}>
          If you have any questions or just<br />
          want to send us a nice message.<br /><br />
          Fill this out and we will get back to<br />
          you as soon as possible.
        </div>
        <div className={styles.form}>
          <form id="usrform">
            <input
              className={[styles.name, styles.input].join(' ')}
              type="text"
              placeholder="Name..."
            />
            <input
              className={[styles.email, styles.input].join(' ')}
              type="text"
              placeholder="Email..."
            />
            <input
              className={[styles.regarding, styles.input].join(' ')}
              type="text"
              placeholder="Regarding..."
            />
          </form>
          <textarea
            className={styles.message}
            form="usrform"
            placeholder="Message here... (at least 10 characters)"
          >
          </textarea>
        </div>
        <button className={styles.send} disabled={true} onClick={this.onSubmit}>
          <div className={styles.buttontext}>Send Message</div>
          <checkhor className="right"></checkhor>
        </button>
      </div>
    );
  }
};

export default ContactPage;
