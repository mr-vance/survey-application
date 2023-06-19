import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  // Add your Firebase configuration here
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
