import React from 'react';

import { FirebaseContext } from '../Firebase';
import { UploadGymsForm } from "../UploadGyms";

const App = () => (
  <FirebaseContext.Consumer>
    {firebase => <UploadGymsForm firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default App;
