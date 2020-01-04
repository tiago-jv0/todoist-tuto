import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCd2BhygwAiwPfJMA-eBLQgzhJN0Qwcv4Y",
    authDomain: "todoist-tuto-e9e1f.firebaseapp.com",
    databaseURL: "https://todoist-tuto-e9e1f.firebaseio.com",
    projectId: "todoist-tuto-e9e1f",
    storageBucket: "todoist-tuto-e9e1f.appspot.com",
    messagingSenderId: "60709323248",
    appId: "1:60709323248:web:14eb5d9bb3a383b5f55d35"
  });

export {firebaseConfig as firebase};