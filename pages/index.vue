<template>
  <div>
    <p>Nuxt News</p>
    <ul v-for="headline in headlines" :key="headline.id">
      <li>{{ headline }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const topHeadlines = await app.$axios.$get(
      'https://newsapi.org/v2/top-headlines?country=us'
    )
    return { headlines: topHeadlines.articles }
  }
}
</script>
