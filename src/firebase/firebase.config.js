// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD62AirgO1txHkriwp6cARLVglWjB5J0kk",
  authDomain: "rs-incognichat.firebaseapp.com",
  projectId: "rs-incognichat",
  storageBucket: "rs-incognichat.appspot.com",
  messagingSenderId: "271701067491",
  appId: "1:271701067491:web:d87b82634647094863e7d6",
  measurementId: "G-91M6SYYZDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;