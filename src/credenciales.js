// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8BASMUFPC3QybKJLFnk96uy5Xphx2oSs",
  authDomain: "tutorial--loging.firebaseapp.com",
  projectId: "tutorial--loging",
  storageBucket: "tutorial--loging.appspot.com",
  messagingSenderId: "813927118538",
  appId: "1:813927118538:web:537f5e279ce587e710e633"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;