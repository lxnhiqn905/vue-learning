<template>
  <div id="root">
    <div id="header">
      <nuxt-link to="/">
        <Button id="header-button" type="primary">Home</Button>
      </nuxt-link>
      <p id="header-title">Nuxt Practice</p>
      <Avatar id="header-avatar" icon="ios-person" size="large"/>
    </div>
    <div id="main">
      Main
    </div>
    <div id="footer">
      Footer
    </div>

  </div>
</template>

<script>

export default {
  
  asyncData(context) {
  },
  components: {

  }
}
</script>

<style>
#header{
  height: 80px;
  width: 100%;
  background: red;
  text-align: center;
  position: fixed;
  top: 0px;
  z-index: 9999;
}
#header-button{
  position: absolute;
  left: 10px;
  top: 20px;
  height: 40px;
  width: 80px
}
#header-title{
  font-family: 'Times New Roman', Times, serif;
  color: white;
  line-height: 80px;
  font-size: 26px
}
#header-avatar{
  position: absolute;
  right: 10px;
  top: 20px;
}
</style>

