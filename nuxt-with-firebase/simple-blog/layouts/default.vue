<template>
  <div>
    <body class="w3-light-grey">
      <!-- Header -->
      <Header />
      <!-- Content -->
      <nuxt/>
      <!-- Footer -->
      <Footer/>
    </body>
  </div>
</template>

<script>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  body,
  h1,
  h2,
  h3,
  h4,
  h5 {
      font-family: "Raleway", sans-serif
  }
</style>