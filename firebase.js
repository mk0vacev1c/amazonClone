// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA8d8CsZQJ8lJiNdJ-kRdjLsiTdTQ3Yh4k",
  authDomain: "clone-337c7.firebaseapp.com",
  projectId: "clone-337c7",
  storageBucket: "clone-337c7.appspot.com",
  messagingSenderId: "530143993402",
  appId: "1:530143993402:web:30f9f8d0f506ab3a261f03",
  measurementId: "G-C8SNENM5HC",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// This db variable will provide availability everywere
var db = firebase.firestore();
