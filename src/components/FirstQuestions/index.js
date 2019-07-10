import React from 'react';

import { withAuthorization } from '../Session';

const FirstQuestionsPage = () => (
  <div>
    <h1>First Questions</h1>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(FirstQuestionsPage);
