import firebase from '@firebase/app';
import 'firebase/auth';

  // Firebase Key
const firebaseConfig = {
    apiKey: "AIzaSyD6RLknXuvyvCfpnC5YZkUwrwLfVjbSQ_k",
    authDomain: "gerbil-78696.firebaseapp.com",
    databaseURL: "https://gerbil-78696.firebaseio.com",
    projectId: "gerbil-78696",
    storageBucket: "gerbil-78696.appspot.com",
    messagingSenderId: "189617310635",
    appId: "1:189617310635:web:a6e5bc45370d7dff28a0ee",
    measurementId: "G-C9CXPD0SZJ"
};

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
export const firebaseAppAuth = firebaseApp.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = () => {
  firebaseAppAuth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}
    
export default firebaseConfig;

