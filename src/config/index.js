import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCsw26EkVJw05lpdlIwnY-xdYbSNrn8vPo',
  authDomain: 'istespider.firebaseapp.com',
  databaseURL: 'https://istespider.firebaseio.com',
  projectId: 'istespider',
  storageBucket: 'istespider.appspot.com',
  messagingSenderId: '500877590473',
  appId: '1:500877590473:web:24d5f47f9b0a1c57c3f218',
  measurementId: 'G-L381MSGXHL',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
