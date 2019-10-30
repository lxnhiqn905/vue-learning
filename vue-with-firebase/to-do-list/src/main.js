import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyAKTwkIgpCbUTN8EvC3sXuW-QVaWQV5RcQ",
    authDomain: "to-do-list-4db74.firebaseapp.com",
    databaseURL: "https://to-do-list-4db74.firebaseio.com",
    projectId: "to-do-list-4db74",
    storageBucket: "to-do-list-4db74.appspot.com",
    messagingSenderId: "606851976723",
}

firebase.initializeApp(config)

export const db = firebase.firestore()

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
