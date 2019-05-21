import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
//import "firebase/firestore";
const firebaseConfig = {
  apiKey: 'AIzaSyDNPHg_IFAUxLz3Dok2WfuDtWD1Fou338E',
  authDomain: 'creative-dbf5e.firebaseapp.com',
  databaseURL: 'https://creative-dbf5e.firebaseio.com',
  projectId: 'creative-dbf5e',
  storageBucket: 'creative-dbf5e.appspot.com',
  messagingSenderId: '520687728211',
  appId: '1:520687728211:web:d241d14f47373cb2'
};

const CREATIVE_FIREBASE_APP = firebase.initializeApp(firebaseConfig);

//let email = 'nerdyemmanuel@gmail.com'

const CREATIVE_APP_FIREBASE_AUTH = (email) => {
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be whitelisted in the Firebase Console.
    url: 'http://localhost:3030/finishSignUp?cartId=1234',
    // This must be true.
    handleCodeInApp: true,
    //dynamicLinkDomain: 'http://localhost:3030/'
  };

  CREATIVE_FIREBASE_APP.auth().sendSignInLinkToEmail(email, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('creativeApiSignUp', email);
  })
  .catch((error) => {
    // Some error occurred, you can inspect the code: error.code
    console.log(error)
  });
}

export default CREATIVE_APP_FIREBASE_AUTH;