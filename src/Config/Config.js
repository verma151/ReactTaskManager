import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDUzpWNcpaQ9T1M54WQy7PgZC7SBejFvi4",
    authDomain: "taskmanager-199ad.firebaseapp.com",
    projectId: "taskmanager-199ad",
    storageBucket: "taskmanager-199ad.appspot.com",
    messagingSenderId: "210599878710",
    appId: "1:210599878710:web:d5b96b63c1cedb924af897",
    measurementId: "G-QTGT2R8044"
  };

  firebase.initializeApp(firebaseConfig)
  const authentication = firebase.auth();
  const database = firebase.firestore();
  /*Here these two variables are exported*/
  export { authentication, database} 