<template>
  <div class="container">
    <article>
      <h2>{{post.title}}</h2>
      <p>{{post.content}}</p>
    </article>
    <aside>
      <ul>
        <li v-for="relatedPost in relatedPosts">
          <nuxt-link :to="`/post/${relatedPost.id}`">
            {{relatedPost.title}}
          </nuxt-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.post.title, 
    }
  },

  data() {
    return {
      id: this.$route.params.id,
      posts: this.$store.state.post.all
    }
  },
  computed: {
    post() {
      return this.$store.state.post.all.find(post => post.id === this.id)
    },
    relatedPosts() {
      return this.$store.state.post.all.filter(post => post.id !== this.id)
    }

  }
 


}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
