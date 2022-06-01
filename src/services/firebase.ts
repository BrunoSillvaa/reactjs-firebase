import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDGwfrqwdiS_gDC5OAA0yB7NXktUCLS6Mg",
  authDomain: "letmeask-a0dc9.firebaseapp.com",
  databaseURL: "https://letmeask-a0dc9-default-rtdb.firebaseio.com",
  projectId: "letmeask-a0dc9",
  storageBucket: "letmeask-a0dc9.appspot.com",
  messagingSenderId: "435656245023",
  appId: "1:435656245023:web:821aefec3ad0a2cf1eba2a"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }
