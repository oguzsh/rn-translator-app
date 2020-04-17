import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCH6N-QlaQ49GunpICLVsMRZNEoUVsQx1U',
  authDomain: 'react-fire-login-app.firebaseapp.com',
  databaseURL: 'https://react-fire-login-app.firebaseio.com',
  projectId: 'react-fire-login-app',
  storageBucket: 'react-fire-login-app.appspot.com',
  messagingSenderId: '628135372715',
  appId: '1:628135372715:web:3b0b61f0178a63dfaf14ee',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
