import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDSBuOtd0Y0uuI1OwgszfP0rOgJAfcpQh4",
  authDomain: "twmproject-bce13.firebaseapp.com",
  projectId: "twmproject-bce13",
  storageBucket: "twmproject-bce13.appspot.com",
  messagingSenderId: "152057362325",
  appId: "1:152057362325:web:57a7adf44712c21838689c",
  measurementId: "G-SMHPHM1W57"
};

firebase.initializeApp(firebaseConfig)
// export const auth=firebase.auth;
// export const test=firebase.sendSignInLink;
export default firebase


// export const googleAuthProvider= new firebase.auth.GoogleAuthProvider();


// // Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig)
// export default firebaseApp
// // export const auth = firebase.auth();
// // export const googleAuthProvider = new firebase.auth().googleAuthProvider();