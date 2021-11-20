import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDMZczKGIsP21TLKsaW3jCwPJHv1ZSbKn8",
    authDomain: "blog-images-f5125.firebaseapp.com",
    projectId: "blog-images-f5125",
    storageBucket: "blog-images-f5125.appspot.com",
    messagingSenderId: "4304423235",
    appId: "1:4304423235:web:75e685431669db4739c7f6"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp }; 