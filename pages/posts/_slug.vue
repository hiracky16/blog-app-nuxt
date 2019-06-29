<template>
  <article class="article">
    <div class="single">
      <h1 class="post-title">{{ post.fields.title }}</h1>
      <p class="post-created-at">{{ formatDate(post.sys.createdAt) }}</p>
      <div class="post-content" v-html="$md.render(post.fields.contents)"></div>
    </div>
  </article>
</template>

<script>
import client from '~/plugins/contentful'

export default {
  asyncData({ params, error, payload }) {
    if (payload) return { post: payload }
    return client
      .getEntries({
        content_type: 'post',
        'fields.slug': params.slug
      })
      .then(entries => {
        return { post: entries.items[0] }
      })
      .catch(e => {})
  },
  head() {
    return {
      title: this.post.fields.title
    }
  },
  methods: {
    formatDate(iso) {
      const date = new Date(iso)
      const yyyy = date.getFullYear()
      const mm = date.getMonth() + 1
      const dd = date.getDate()
      return `${yyyy}.${mm}.${dd}`
    }
  },
  layout: 'blogLayout'
}
</script>

<style lang="scss">
article.article {
  padding: 10px;
  background: rgb(12, 22, 28);
  height: 100vh;
  .single {
    max-width: 900px;
    margin: 0 auto;
    padding: 10px;
    color: #fff;
    border: 2px solid #444;
    border-radius: 10px;
    h1,
    h2,
    h3 {
      margin: 16px 0;
    }
    h1.post-title {
      font-size: 32px;
      text-decoration: underline;
    }
    .post-content {
      h1 {
        font-size: 32px;
      }
      h2 {
        font-size: 24px;
        background: #ccc;
        color: #fff;
      }
      p {
        margin: 16px 0;
        font-size: 16px;
      }
      img {
        max-width: 100%;
        border: 1px solid #000;
      }
    }
  }
}
</style>
