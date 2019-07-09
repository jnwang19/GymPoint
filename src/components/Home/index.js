import React from 'react';
import styles from './Home.module.css';

import { withAuthorization } from '../Session';



const HomePage = () => (
  <div className={styles.center}>
    <div className={styles.container}>
      <div className={styles.find}></div>
      <div className={styles.dashboard}></div>
      <div className={styles.contact}></div>
      <div className={styles.about}></div>
      <div className={styles.process}></div>
    </div>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
