<template>
  <section class="latest-posts">
    <div class="posts">
      <nuxt-link
        v-for="(post, index) in posts"
        :key="index"
        :to="'posts/' + post.fields.slug"
        class="post"
      >
        <div
          class="thumb"
          :style="{
            backgroundImage: 'url(' + post.fields.image.fields.file.url + ')'
          }"
        >
          <!-- <img :src="post.fields.image.fields.file.url" /> -->
          <div class="post-text">
            <p>{{ formatDate(post.sys.createdAt) }}</p>
            <h2>{{ post.fields.title }}</h2>
          </div>
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
/* eslint-disable no-console */
import client from '~/plugins/contentful'
export default {
  computed: {
    image_src(post) {
      return post.fields.image.fields.file.url
    }
  },
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: 'post',
        order: '-sys.createdAt'
      })
      .then(entries => {
        console.log(entries.items)
        return { posts: entries.items }
      })
      .catch(e => {})
  },
  head: {
    title: '記事一覧'
  },
  methods: {
    formatDate(iso) {
      const date = new Date(iso)
      const yyyy = date.getFullYear()
      const mm = date.getMonth()
      const dd = date.getDate()
      return `${yyyy}.${mm}.${dd}`
    }
  },
  layout: 'blogLayout'
}
</script>

<style lang="scss">
section.latest-posts {
  display: block;
  background-color: rgb(12, 22, 28);
  height: 90vh;
  .posts {
    max-width: 900px;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: rgb(12, 22, 28);
    a.post {
      width: calc(100% / 2 - 20px);
      @media (min-width: (768px)) {
        width: calc(100% / 3 - 20px);
      }
      height: calc(100% / 3 - 20px);
      margin: 10px;
      background: rgb(12, 22, 28);
      text-decoration: none;
      color: #111;
      border-radius: 10px;
      box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
      .thumb {
        border-radius: 10px;
        box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        height: calc(100% / 3 - 20px);
        width: 100%;
        padding-bottom: 75%;
        position: relative;
        overflow: hidden;
      }
      .post-text {
        padding: 5px 10px 10px;
        position: absolute;
        z-index: 10000;
        color: rgba(255, 255, 255, 0.7);
        bottom: 2.55%;
        h2 {
          width: fit-content;
          font-size: 20px;
          color: rgba(255, 255, 255, 0.7);
        }
      }
    }
  }
}
</style>
