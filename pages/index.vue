<template>
  <div class="content-wrapper">
    <div class="content">
      <div v-for="article of articles" :key="article.slug" class="mb-4">
        <h2>
          <NuxtLink :to="'/' + article.slug">{{ article.title }}</NuxtLink>
        </h2>
        <time>{{ formatDate(article.createdAt) }}</time>
        <div class="mt-4">{{ article.description }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .only(["title", "description", "slug", "createdAt"])
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      articles,
    };
  },

  methods: {
    formatDate(date: string) {
      return new Date(date).toLocaleDateString("en", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
});
</script>
