<template>
  <div class="mt-8">
    <v-row justify="center">
      <h1>Tuan</h1>
    </v-row>

    <v-row justify="center" class="mt-8"> Coder. Dreamer. </v-row>

    <v-row justify="center" class="mt-8">
      <v-btn
        v-for="contact in contactList"
        :key="contact.icon"
        :href="contact.link"
        icon
        target="_blank"
      >
        <v-icon>{{ contact.icon }}</v-icon>
      </v-btn>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      contactList: [
        {
          link: "mailto:tuanna.hsp@gmail.com",
          icon: "mdi-email-outline",
        },
        {
          link: "https://github.com/tuanna-hsp",
          icon: "mdi-github",
        },
        {
          link: "https://twitter.com/anhtuan__",
          icon: "mdi-twitter",
        },
        {
          link: "https://www.facebook.com/tuanna.hsp/",
          icon: "mdi-facebook",
        },
        {
          link: "https://www.goodreads.com/user/show/62827416",
          icon: "mdi-goodreads",
        },
        {
          link: "https://www.linkedin.com/in/nguyen-anh-tuan-hsp/",
          icon: "mdi-linkedin",
        },
      ],
    };
  },
});
</script>
