import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCPjPGGVam74tps1OgUIG7JdYJtIErzuBc",
    authDomain: "chatapp25-d2f01.firebaseapp.com",
    projectId: "chatapp25-d2f01",
    storageBucket: "chatapp25-d2f01.appspot.com",
    messagingSenderId: "428689995819",
    appId: "1:428689995819:web:f6d26ace1aa12d74ef526e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth=firebase.auth();
export const db=firebase.firestore();

