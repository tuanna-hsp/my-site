<template>
  <div class="content-wrapper">
    <div class="content">
      <h1>
        {{ article.title }}
      </h1>

      <v-row>
        <v-col cols="10">
          <time>{{ formatDate(article.createdAt) }}</time>
          <article class="mt-4">
            <nuxt-content :document="article" />
          </article>
        </v-col>
      </v-row>

      <div class="commentbox mt-8"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
var commentBox = require("commentbox.io");

export default Vue.extend({
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.post).fetch();

    return { article };
  },

  data() {
    return {
      commentBoxDestroyCallback: () => {},
    };
  },

  mounted() {
    this.commentBoxDestroyCallback = commentBox(this.$config.commentBoxId);
  },

  beforeDestroy() {
    this.commentBoxDestroyCallback();
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
