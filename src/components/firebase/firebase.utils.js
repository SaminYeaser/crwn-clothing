import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config =  {
  apiKey: "AIzaSyD3kPUmc4SRrO4dqaFyF1VBNIm07yr8jJw",
  authDomain: "crown-clothing-ba6a1.firebaseapp.com",
  projectId: "crown-clothing-ba6a1",
  storageBucket: "crown-clothing-ba6a1.appspot.com",
  messagingSenderId: "59009369455",
  appId: "1:59009369455:web:9ecc3eabccdb77c3d9d49a",
  measurementId: "G-T94EBG30L8"
};

  export const createUserProfileDocument = async(userAuth, additonalData)=>{
    if(!userAuth) {
      return 'Error' ;}

    const userRef = firestore.doc(`user/${userAuth.uid}`)
    const snapshot = await userRef.get()

    console.log(snapshot)

    if(!snapshot.exists){
      const {displayName, email} = userAuth
      const createDate = new Date()
    
    try{
      await userRef.set({
        displayName,
        email,
        createDate,
        ...additonalData
      })
    }catch(error){
      console.log('error creating user', error.message)
    }
  }
  return userRef
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
