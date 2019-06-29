<template>
  <div class="main">
    <Header />
    <div class="content">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
.main {
  height: 100vh;
  position: block;
}
.content {
  margin: 80px 0 0 0;
}
</style>
