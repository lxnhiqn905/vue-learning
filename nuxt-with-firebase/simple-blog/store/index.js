import Vue from 'vue'
import Vuex from 'vuex'

import {postsCollection} from '~/plugins/firebaseConfig.js'

Vue.use(Vuex)

// Fetch posts
postsCollection.orderBy('createOn').onSnapshot(snapshot => {
    let postArrays = []

    snapshot.forEach(doc => {
    let post = doc.data()
    post.id = doc.id
    postArrays.push(post)
    })

    console.log(postArrays)
    store.commit('setPosts', postArrays)
})


export const store = new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    setPosts(state, val) {
      state.posts = val
    }
  },
  actions: {
  },
  modules: {
  }
})
