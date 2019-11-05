import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
const fb = require('./firebaseConfig.js')

import './assets/scss/app.scss'

Vue.config.productionTip = false

// Handle page reloads
let app

fb.auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: function (h) { return h(App) }
    }).$mount('#app')  
  }
})
