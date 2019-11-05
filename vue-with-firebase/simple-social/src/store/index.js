import Vue from 'vue'
import Vuex from 'vuex'

const fb = require('../firebaseConfig.js')

Vue.use(Vuex)

// Handle page reload
fb.auth.onAuthStateChanged(user => {
  if(user) {
    // Fetch user data
    store.commit('setCurrentUser', user)
    store.dispatch('fetchUserProfile')

    // Fetch posts
    fb.postsCollection.orderBy('createOn').onSnapshot(snapshot => {

      let createByCurrentUser

      if (snapshot.docChanges().length) {
        createByCurrentUser = store.state.currentUser.uid == snapshot.docChanges()[0].doc.data().userId ? true : false
      }

      if (!createByCurrentUser
        && snapshot.docs.length !== snapshot.docChanges().length
        && snapshot.docChanges()[0].type == 'added') {
          let newPost = snapshot.docChanges()[0].doc.data()
          newPost.id = snapshot.docChanges()[0].doc.id


          console.log(newPost)
          store.commit('setHiddenPosts', newPost)

        } else {
          
          let postArrays = []

          snapshot.forEach(doc => {
            let post = doc.data()
            post.id = doc.id
            postArrays.push(post)
          })
  
          store.commit('setPosts', postArrays)
        }
      })


  }
})

export const store = new Vuex.Store({
  state: {
    currentUser: null,
    userProfile: {},
    posts: [],
    hiddenPosts: []

  },
  mutations: {
    setCurrentUser(state, val) {
      state.currentUser = val
    },
    setUserProfile(state, val) {
      state.userProfile = val
    },
    setPosts(state, val) {
      state.posts = val
    },
    setHiddenPosts(state, val) {
      if (val) {
        // Make sure not duplicate
        if (!state.hiddenPosts.some(x => x.id === val.id)) {
          state.hiddenPosts.unshift(val)
        }
      } else {
        state.hiddenPosts = []
      }
    }
  },
  actions: {
    fetchUserProfile({commit, state}) {
      fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
        commit('setUserProfile', res.data())
      }).catch(err => {
        console.log(err)
      })
    },
    clearData({commit}) {
      commit('setCurrentUser', null),
      commit('setUserProfile', {})
      commit('setPosts', [])
    }
  },
  modules: {
  }
})
