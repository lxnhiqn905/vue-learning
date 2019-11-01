import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/main';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: null
  },
  getters: {
    getItems: (state => {
      return state.items
    })
  },
  actions: {
    setItems: context => {
      context.commit('setItems')
    }
  },
  mutations: {
    setItems: state => {
      let items = []

      db.collection('items').orderBy('create_at').onSnapshot((snapshot) => {
        items = []
        snapshot.forEach((doc) => {
          items.push({id: doc.id, title: doc.data().title})
        })
        state.items = items
      })
    }
  },
  modules: {
  }
})
