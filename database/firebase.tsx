/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAC4gG9DlKKhng7hgitpAeLkRNfN8YAZxU',
  authDomain: 'fir-5d077.firebaseapp.com',
  projectId: 'fir-5d077',
  storageBucket: 'fir-5d077.appspot.com',
  messagingSenderId: '262748839123',
  appId: '1:262748839123:web:72a73ee7be71e611a70826',
  measurementId: 'G-ZVVQNXD5RB',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
export default firebase;
