// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyATImDJO2jozqNLGcwLTGwMERE6ULk1M5Q',
  authDomain: 'career-counsel-firebase.firebaseapp.com',
  projectId: 'career-counsel-firebase',
  storageBucket: 'career-counsel-firebase.firebasestorage.app',
  messagingSenderId: '709964696060',
  appId: '1:709964696060:web:a168a08c531dc19d704a79',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
