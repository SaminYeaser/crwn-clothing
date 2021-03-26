import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config =  {
    apiKey: "AIzaSyBnrnSA-gotC1I6pDgXggoyK6ETb1jNh-s",
    authDomain: "crown-clothing-85de4.firebaseapp.com",
    projectId: "crown-clothing-85de4",
    storageBucket: "crown-clothing-85de4.appspot.com",
    messagingSenderId: "110547857663",
    appId: "1:110547857663:web:f8534cb7fcc4dc09779cca",
    measurementId: "G-NZ4444JR9H"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

  export default firebase;
