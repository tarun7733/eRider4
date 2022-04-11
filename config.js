import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyB_1KLErcHce5z3BgnaKAo7geCsCnG_9yI",
  authDomain: "erider-86760.firebaseapp.com",
  projectId: "erider-86760",
  storageBucket: "erider-86760.appspot.com",
  messagingSenderId: "663656518442",
  appId: "1:663656518442:web:015e2b0cd1a3e17ec80453"
};

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
