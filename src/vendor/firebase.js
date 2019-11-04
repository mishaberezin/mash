import firebase from 'firebase/app';
import 'firebase/storage';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBtPG6y_cR0LQOdN_Xz-lo5EnhcXsZOWGQ',
  authDomain: 'layout-mash.firebaseapp.com',
  databaseURL: 'https://layout-mash.firebaseio.com',
  projectId: 'layout-mash',
  storageBucket: 'layout-mash.appspot.com',
  messagingSenderId: '180393824272',
  appId: '1:180393824272:web:fd09d41d28f62f96fb3a95',
  measurementId: 'G-86R1R59QZQ'
});

export const storage = app.storage();
