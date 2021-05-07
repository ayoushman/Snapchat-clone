// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClMfKwKMWcawhM6twJWHfSFoXTJTiXMwk",
  authDomain: "snapchat-clone-23e53.firebaseapp.com",
  projectId: "snapchat-clone-23e53",
  storageBucket: "snapchat-clone-23e53.appspot.com",
  messagingSenderId: "436345056208",
  appId: "1:436345056208:web:45bd75a73ff4c59e27a7d5",
  measurementId: "G-2ME224TP71",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
// for google authentication in our app
const Provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, Provider };
