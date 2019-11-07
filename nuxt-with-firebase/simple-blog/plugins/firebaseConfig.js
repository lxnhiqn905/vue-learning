import firebase from 'firebase/app'
import 'firebase/firestore'

// Firebase configuration
if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyD1jtKsaKVvD1TcFv8CyQ5cd2tOzXIF1Ig",
        authDomain: "simple-blog-81ffc.firebaseapp.com",
        databaseURL: "https://simple-blog-81ffc.firebaseio.com",
        projectId: "simple-blog-81ffc",
        storageBucket: "simple-blog-81ffc.appspot.com",
        messagingSenderId: "209704060181",
        appId: "1:209704060181:web:bb197f59acc515c292951c",
        measurementId: "G-N0E4MLG04B"
    }
    firebase.initializeApp(config)
    // firebase.firestore().settings({timestampsInSnapshots: true})
}

// Firestore
const firestore = firebase.firestore()

// Collections
const postsCollection = firestore.collection('posts')

export {postsCollection}