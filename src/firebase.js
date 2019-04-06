import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyDq9r_xgEePmC4P-MOYBmXn2COimd4b2VA",
  authDomain: "pflegonaut-backend.firebaseapp.com",
  databaseURL: "https://pflegonaut-backend.firebaseio.com",
  projectId: "pflegonaut-backend",
  storageBucket: "pflegonaut-backend.appspot.com",
  messagingSenderId: "869810683130"
};

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp(config);

export { firebase, googleAuthProvider }; 
