<template>
  <section class="latest-posts">
    <div class="posts">
      <nuxt-link
        v-for="(post, index) in posts"
        :key="index"
        :to="'posts/' + post.fields.slug"
        class="post"
      >
        <div class="thumb">
          <img :src="post.fields.image.fields.file.url" />
        </div>
        <div class="post-text">
          <p>{{ formatDate(post.sys.createdAt) }}</p>
          <h2>{{ post.fields.title }}</h2>
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import client from '~/plugins/contentful'
export default {
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: 'post',
        order: '-sys.createdAt'
      })
      .then(entries => {
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
  .posts {
    max-width: 900px;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: rgb(12, 22, 28);
    a.post {
      box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
      border-radius: 10px;
      width: calc(100% / 2 - 20px);
      @media (min-width: (768px)) {
        width: calc(100% / 3 - 20px);
      }
      margin: 10px;
      background: #fff;
      text-decoration: none;
      color: #111;
      .thumb {
        width: 100%;
        padding-bottom: 75%;
        position: relative;
        overflow: hidden;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-width: 100%;
        }
      }
      .post-text {
        padding: 5px 10px 10px;
        h2 {
          width: fit-content;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
