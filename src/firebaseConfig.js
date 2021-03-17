import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/analytics';


const firebaseConfig = {
    apiKey: "AIzaSyAgOAsSLe56KTuca7q4cIM33m-botIn-D0",
    authDomain: "react-dashboard-76fa3.firebaseapp.com",
    projectId: "react-dashboard-76fa3",
    storageBucket: "react-dashboard-76fa3.appspot.com",
    messagingSenderId: "99815815300",
    appId: "1:99815815300:web:1c59c0a3e4151d84d22ad1",
    measurementId: "G-YE5GX87Z1J"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;