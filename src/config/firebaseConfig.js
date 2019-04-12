import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-auth";

var config = {
  apiKey: "AIzaSyDq9r_xgEePmC4P-MOYBmXn2COimd4b2VA",
  authDomain: "pflegonaut-backend.firebaseapp.com",
  databaseURL: "https://pflegonaut-backend.firebaseio.com",
  projectId: "pflegonaut-backend",
  storageBucket: "pflegonaut-backend.appspot.com",
  messagingSenderId: "869810683130"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
