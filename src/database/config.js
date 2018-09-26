 import * as firebase from 'firebase'

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDxqX5rhVERVtavv6rbwStAqJ-kmTlZ1Jc",
    authDomain: "atm-sim.firebaseapp.com",
    databaseURL: "https://atm-sim.firebaseio.com",
    projectId: "atm-sim",
    storageBucket: "atm-sim.appspot.com",
    messagingSenderId: "602856457331"
  };

  firebase.initializeApp(config)

  const database = firebase.database()

  export { database }

  