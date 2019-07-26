import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';

import NavBar from '../NavBar';
import TeamPage from '../Team';
import ContactPage from '../Contact';
import * as ROUTES from '../../constants/routes';

const LandingPage = () => (
  <div>
    <NavBar />
    <div className={styles.imageone}></div>
    <div className={styles.imagetwo}></div>
    <div className={styles.textone}>
      We make finding<br />
      your perfect gym<br />
      simple.
    </div>
    <div className={styles.texttwo}>
      So you can focus on living the healthier<br />
      life you deserve.
    </div>
    <Link to={ROUTES.FIRST_QUESTIONS}>
      <div className={styles.letsfindbutton}>
        Let's find you a gym
        <i className={styles.right}></i>
      </div>
    </Link>
    <div className={styles.tellus}>
      <div className={[styles.boxnumber, styles.boxone].join(' ')}>
        1
      </div>
      <div className={styles.textthree}>
        Tell us what you want
      </div>
      <div className={styles.textfour}>
        Tell us about your ideal gym and<br />
        what your goals and experience<br />
        level are. We want to help you, so<br />
        getting to know you is the first step.
      </div>
    </div>
    <div className={styles.pickyour}>
      <div className={[styles.boxnumber, styles.boxtwo].join(' ')}>
        2
      </div>
      <div className={styles.textthree}>
        Pick your favorites
      </div>
      <div className={styles.textfour}>
        Pick from a list of top gyms that<br />
        fit your description of the perfect<br />
        gym. Remove the ones you don't like<br />
        and get discounts for the ones you<br />
        love.
      </div>
    </div>
    <div className={styles.scheduleyour}>
      <div className={[styles.boxnumber, styles.boxthree].join(' ')}>
        3
      </div>
      <div className={styles.textthree}>
        Schedule your Workout
      </div>
      <div className={styles.textfour}>
        After you sign up for a gympoint<br />
        account, get your membership, pick<br />
        a personalized workout from our list,<br />
        and create a schedule to kickstart<br />
        your new lifestyle.
      </div>
    </div>
    <div className={styles.findagymbutton}>
      Find a Gym
      <i className={styles.right}></i>
    </div>
    <div className={styles.team}><TeamPage /></div>
    <div className={styles.contact}><ContactPage /></div>
    <ScrollButton />
  </div>
);

class ScrollButton extends Component {
  constructor(props) {
    super(props);
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <div className={styles.backtotop} onClick={this.scrollToTop}>Back to Top</div>
    )
  }
}

export default LandingPage;
