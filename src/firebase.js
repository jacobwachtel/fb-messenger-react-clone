// import firebase from 'firebase';
// import { initializeApp } from 'firebase/app';

// const firebaseApp = firebase.initializeApp({
//    apiKey: 'AIzaSyDoqNSAVuTKYIy-Gq9nzyjLlwuTgFsitGQ',
//    authDomain: 'fb-messenger-clone-3c4be.firebaseapp.com',
//    projectId: 'fb-messenger-clone-3c4be',
//    storageBucket: 'fb-messenger-clone-3c4be.appspot.com',
//    messagingSenderId: '1046244305183',
//    appId: '1:1046244305183:web:7b52ac983b02a5fd25e82a',
//    measurementId: 'G-3VYXLHLY7K',
// });

// const db = firebaseApp.firestore();

// export default db;

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: 'AIzaSyDoqNSAVuTKYIy-Gq9nzyjLlwuTgFsitGQ',
   authDomain: 'fb-messenger-clone-3c4be.firebaseapp.com',
   projectId: 'fb-messenger-clone-3c4be',
   storageBucket: 'fb-messenger-clone-3c4be.appspot.com',
   messagingSenderId: '1046244305183',
   appId: '1:1046244305183:web:7b52ac983b02a5fd25e82a',
   measurementId: 'G-3VYXLHLY7K',
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);
export default getFirestore();
