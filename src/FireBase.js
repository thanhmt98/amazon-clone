import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC44JN6dKN8xllsk9nCyLLgCQPyVzMCYss",
    authDomain: "clone-600be.firebaseapp.com",
    databaseURL: "https://clone-600be.firebaseio.com",
    projectId: "clone-600be",
    storageBucket: "clone-600be.appspot.com",
    messagingSenderId: "276260910354",
    appId: "1:276260910354:web:23743c940a2079a2adefcb",
    measurementId: "G-ELS1GFQ4PN"
});

const auth = firebase.auth();

export { auth };