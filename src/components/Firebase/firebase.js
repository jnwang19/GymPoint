import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.firestore();

    this.auth = app.auth();
  }

  doCreateUser = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

  doSignIn = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  doCreateGym = (name, street, city, state, zip, coordinates, initiation_fee, monthly_fee, phone, website, hours, type, rating, classes, amenities) =>
    this.db.collection("gyms").add({
      name: name,
      street: street,
      city: city,
      state: state,
      zip: zip,
      coordinates: coordinates,
      initation_fee: initiation_fee,
      monthly_fee: monthly_fee,
      phone: phone,
      website: website,
      hours: hours,
      type: type,
      rating: rating,
      classes: classes,
      amenities: amenities
    });

  doQueryGyms = (price) =>
    this.db.collection("gyms").where(
      "monthly_fee", "<=", price
    ).orderBy("monthly_fee")
    .orderBy("rating", "desc").limit(100)
    .get()
    .then(function(querySnapshot) {
      return querySnapshot;
    });

  user = uid => this.db.collection("users").doc(uid);

  users = () => this.db.collection('users');
}

export default Firebase;
