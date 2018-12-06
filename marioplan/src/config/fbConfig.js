  import firebase from 'firebase/app'
  import 'firebase/auth'
  import 'firebase/firestore'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBdX_R9Q_p5RqYIPBh0TMcVqdPnKnKTEa0",
    authDomain: "marioplan-react-redux-f4cb3.firebaseapp.com",
    databaseURL: "https://marioplan-react-redux-f4cb3.firebaseio.com",
    projectId: "marioplan-react-redux-f4cb3",
    storageBucket: "marioplan-react-redux-f4cb3.appspot.com",
    messagingSenderId: "456163331654"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({
      timestampsInSnapshots: true
  })

  export default firebase