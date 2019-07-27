import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';
import posed from 'react-pose';

import NavBar from '../NavBar';
import TeamPage from '../Team';
import ContactPage from '../Contact';
import * as ROUTES from '../../constants/routes';

const Top = posed.div({
  enter: {
    y: '-15vh',
    opacity: 1,
    transition: {
      delay: 500,
      duration: 500
    }
  },
  exit: {
    opacity: 0
  }
});

const Page = posed.div({
  enter: {
    opacity: 1,
    transition: {
      delay: 500,
      duration: 500
    }
  },
  exit: {
    opacity: 0
  }
});

const LandingPage = () => (
  <div>
    <NavBar />
    <Top>
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
          <div className={styles.buttontextone}>Let's find you a gym</div>
          <i className="right"></i>
        </div>
      </Link>
    </Top>
    <Page>
      <div className={styles.imageone}></div>
      <div className={styles.imagetwo}></div>
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
        <div className={styles.buttontexttwo}>Find a Gym</div>
        <i className="right"></i>
      </div>
      <div className={styles.team}><TeamPage /></div>
      <div className={styles.contact}><ContactPage /></div>
      <ScrollButton />
    </Page>
  </div>
);

class ScrollButton extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <div className={styles.backtotop} onClick={this.scrollToTop}>
        <i2 className="up"></i2>
        <div className={styles.textscroll}>Back to Top</div>
      </div>
    )
  }
}

export default LandingPage;
