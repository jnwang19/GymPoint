import React from 'react';
import styles from './About.module.css';

import { withAuthorization } from '../Session';

const AboutPage = () => (
  <div>
    <div className={styles.about}>About Us</div>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AboutPage);
