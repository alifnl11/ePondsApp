import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCDKMW3yWeu3oG7g5Oq4jhDQZ7Qpj6dvHg",
    authDomain: "eponds-7adcf.firebaseapp.com",
    databaseURL: "https://eponds-7adcf.firebaseio.com",
    projectId: "eponds-7adcf",
    storageBucket: "eponds-7adcf.appspot.com",
    messagingSenderId: "787184521925",
    appId: "1:787184521925:web:3604982cbfd98606bb56ac",
    measurementId: "G-DWJTLBS6X0"
  };


  firebase.initializeApp(firebaseConfig);

export default firebase