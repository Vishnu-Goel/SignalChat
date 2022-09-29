import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { initializeApp } from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyCQ8_G_9wh0aYMOdlzD9wILDv1wBlnasFc",
  authDomain: "reactproject-fc824.firebaseapp.com",
  projectId: "reactproject-fc824",
  storageBucket: "reactproject-fc824.appspot.com",
  messagingSenderId: "960868339581",
  appId: "1:960868339581:web:13cfbcd74383b1c03f4614"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
