// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRr_CWcXTIC0BAfL-E39uXCGwimIfVX1c",
  authDomain: "apprestaurant-b2f1a.firebaseapp.com",
  projectId: "apprestaurant-b2f1a",
  storageBucket: "apprestaurant-b2f1a.appspot.com",
  messagingSenderId: "235831473725",
  appId: "1:235831473725:web:86b10dc648ed913e865c54"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const dataBase = app.firestore()
