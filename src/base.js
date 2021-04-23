import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCmkGFQJ7sTDdvWMCmJKOEtfSDEIEiqaks",
  authDomain: "seans-catch-of-the-day.firebaseapp.com",
  databaseURL: "https://seans-catch-of-the-day-default-rtdb.firebaseio.com",
  projectId: "seans-catch-of-the-day",
  storageBucket: "seans-catch-of-the-day.appspot.com",
  messagingSenderId: "232405197035",
  appId: "1:232405197035:web:eaaa44bd07f1ba28675eae"
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;