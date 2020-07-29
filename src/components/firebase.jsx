import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAhG0e3q4H4ZYpzd66qbvr25n49g3VaZpU",
    authDomain: "clone-cea00.firebaseapp.com",
    databaseURL: "https://clone-cea00.firebaseio.com",
    projectId: "clone-cea00",
    storageBucket: "clone-cea00.appspot.com",
    messagingSenderId: "831376045260",
    appId: "1:831376045260:web:8cf4d0cac3b7b9bbfc7e69",
    measurementId: "G-CH8WHL42ZN"
  })


const auth = firebase.auth()



  export {auth}