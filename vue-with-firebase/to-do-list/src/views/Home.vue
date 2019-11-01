<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <ul>
        <li v-for="item in this.$store.getters.getItems" :key="item.id">
          {{ item.title}}  <button @click="deleteTodo(item.id)">Delete</button>
        </li>
        
      </ul>
    </div>
    
    <div>
      <input v-model="myTodo" /><button @click="addTodo">Add</button>
      <dir v-if="errors !== ''" id="errors">{{ errors }}</dir>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { db } from '@/main'

export default {
  name: 'home',
  beforeCreate () {
    this.$store.dispatch('setItems')
  },
  data () {
    return {
      myTodo: '',
      errors: ''
    }
  }, 
  methods: {
    addTodo() {
      this.errors = ''

      if (this.myTodo !== '') {
        db.collection("items").add({
          title: this.myTodo,
          create_at: Date.now()
        }).then((respones) => {
          if (respones) {
            this.myTodo = ''
          }
        }).catch((error) => {
          this.errors = error
        })
      } else {
        this.errors = 'Todo item is empty'
      }
    },
    deleteTodo(id) {
      if (id) {
        db.collection('items').doc(id).delete().then(
          function() {
            console.log("Document deleted succesfully")
          }
        ).catch(
          function(error) {
            this.errors = error
          }
        )
      } else {
       this.errors = 'Todo id is not valid'
      }
    }
  }
}
</script>

<style>
* {
  box-sizing:border-box;
}

body, html, #app {
  background:#8ac8e5;
}

.home {
  width:300px;
  margin:auto;
}

#vue-logo {
  width:100px;
}

input, button {
  border:0;
  width:100%;
  margin:0 0 10px;
  padding:7px;
}

input {
  font-size:12px;
}

button {
  background:#43b823;
  border:0;
  text-transform:uppercase;
  color:#fff;
  font-weight:700;
  cursor:pointer;
}

.title {
  font-size:14px;
  font-weight:700;
  padding:0 0 10px 0;
  margin:0 0 10px 0;
  border-bottom:1px solid #666;
}

#errors {
  background:#a52222;
  color:#fff;
  padding:5px;
}
</style>