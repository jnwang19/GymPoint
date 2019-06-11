import React from 'react';

import { FirebaseContext } from '../Firebase';
import { UploadGymsForm } from "../UploadGyms";
import { Search } from "../Search";

const App = () => (
  // <FirebaseContext.Consumer>
  //   {firebase => <UploadGymsForm firebase={firebase} />}
  // </FirebaseContext.Consumer>
  < Search />
);

export default App;
