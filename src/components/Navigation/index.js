import React from 'react';
import { Link } from 'react-router-dom';

import SignOut from '../SignOut'
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.UPLOAD_GYMS}>Upload</Link>
      </li>
      <li>
        <Link to={ROUTES.SEARCH_NEARBY}>Search</Link>
      </li>
      <li>
        <SignOut />
      </li>
    </ul>
  </div>
);

export default Navigation;
