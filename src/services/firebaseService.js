import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/functions";
const dotenv = import.meta.env;

const config = {
  apiKey: dotenv.VITE_VUE_APP_API_KEY,
  authDomain: dotenv.VITE_VUE_APP_KEY_AUTH_DOMAIN,
  // databaseURL: dotenv.VITE_VUE_APP_KEY_DATABASE_URL,
  projectId: dotenv.VITE_VUE_APP_PROJECT_ID,
  storageBucket: dotenv.VITE_VUE_APP_STORAGE_BUCKET,
  messagingSenderId: dotenv.VITE_VUE_APP_MESSAGING_SENDER_ID,
  appId: dotenv.VITE_VUE_APP_ID,
};

firebase.initializeApp(config);

const auth = firebase.auth();

const db = firebase.firestore();

const functions = firebase.functions();

const timestamp = firebase.firestore.Timestamp;

export { db, functions, auth, timestamp };
