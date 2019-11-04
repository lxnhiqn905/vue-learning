import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBFy7dYLiHhhQHy6nAzEH4eLiUPRRUZDp8",
    authDomain: "simple-social-a1df2.firebaseapp.com",
    databaseURL: "https://simple-social-a1df2.firebaseio.com",
    projectId: "simple-social-a1df2",
    storageBucket: "simple-social-a1df2.appspot.com",
    messagingSenderId: "895586614259",
    appId: "1:895586614259:web:e6ef5890a8b6fadb5e3086",
    measurementId: "G-T9VJ73G9Z5"
}

// Init firebase
firebase.initializeApp(firebaseConfig)

// Firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// Firebase setting
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// Firebase collections
const usersCollection = db.collection('user')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}