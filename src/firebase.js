// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from 'firebase';
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDsPucwS1SJKts5kd6XDfd6NRVQnpxCMow",
    authDomain: "insta-clone-4b474.firebaseapp.com",
    projectId: "insta-clone-4b474",
    storageBucket: "insta-clone-4b474.appspot.com",
    messagingSenderId: "938861789882",
    appId: "1:938861789882:web:336c1ad895a19dcde4f883",
    measurementId: "G-PEFVZMDK4V"

  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };