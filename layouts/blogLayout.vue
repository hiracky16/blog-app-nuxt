<template>
  <div>
    <Header />
    <div class="main">
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
  display: block;
  padding: 80px 0 0 0;
}
</style>
