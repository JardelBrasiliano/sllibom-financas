import firebase from 'firebase';
import '@firebase/firestore';

import ReduxSagaFirebase from 'redux-saga-firebase';

const myFirebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAiy_OIOCs77aBB9bf57NjsHc3APot2F6k',
  authDomain: 'sllibom-financas.firebaseapp.com',
  projectId: 'sllibom-financas',
  storageBucket: 'sllibom-financas.appspot.com',
  messagingSenderId: '125578706534',
  appId: '1:125578706534:web:d9fcff1ca1b36d7d40b7a7',
});

const rsf = new ReduxSagaFirebase(myFirebaseApp);

export default rsf;
