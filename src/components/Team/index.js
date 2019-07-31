import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Team.module.css';
import posed from 'react-pose';

import NavBar from '../NavBar';
import * as ROUTES from '../../constants/routes';

const TeamPage = () => (
  <div className={styles.team}>
    Meet the Team
    <Link to={ROUTES.SIGN_UP}>
      <div className={styles.signup}>
        <div className={styles.buttontext}>Sign me up</div>
        <checkhor className="right"></checkhor>
      </div>
    </Link>
  </div>

);

export default TeamPage;
