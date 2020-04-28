import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCDKMW3yWeu3oG7g5Oq4jhDQZ7Qpj6dvHg",
    authDomain: "eponds-7adcf.firebaseapp.com",
    databaseURL: "https://eponds-7adcf.firebaseio.com",
    projectId: "eponds-7adcf",
    storageBucket: "",
    messagingSenderId: "787184521925",
  };


  firebase.initializeApp(firebaseConfig);

export default firebase
