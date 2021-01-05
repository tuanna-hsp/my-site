<template>
  <div class="px-8">
    <v-row justify="center">
      <v-avatar size="128" class="mt-8">
        <v-img src="https://avatars1.githubusercontent.com/u/14136939" />
      </v-avatar>
    </v-row>

    <v-row justify="center" class="mt-8">
      <v-icon class="mr-1">mdi-domain</v-icon><span>Money Forward, Inc</span>
      <v-icon class="ml-1">mdi-map-marker</v-icon><span>Tokyo, Japan</span>
    </v-row>

    <v-row justify="center" class="mt-8">
      Tôi thuở bé chăn bò, thích tắm ao. Trời bén cho cái tính tò mò, nên giờ
      làm kỹ sư máy tính.
    </v-row>

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

    <v-row justify="center" class="mt-8">
      <h3><nuxt-link to="/">Home</nuxt-link></h3>
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
