<template>
  <v-container>
    <div class="mx-auto my-16">
      <v-row justify="center">
        <h1>Anh Tuan</h1>
      </v-row>

      <v-row justify="center" class="mt-8"> Day dreamer </v-row>

      <v-row justify="center" class="mt-8">
        <v-btn
          v-for="contact in contactList"
          :key="contact.icon"
          :href="contact.link"
          icon
          target="_blank"
          class="mx-1"
          large
        >
          <v-icon>{{ contact.icon }}</v-icon>
        </v-btn>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      contactList: [
        {
          link: "https://github.com/tuanna-hsp",
          icon: "mdi-github",
        },
        {
          link: "https://www.linkedin.com/in/tuanna-dev",
          icon: "mdi-linkedin",
        },
        {
          link: "mailto:tuanna.hsp@gmail.com",
          icon: "mdi-email-outline",
        },
        {
          link: "https://twitter.com/tuanna_dev",
          icon: "mdi-twitter",
        },
      ],
    };
  },
});
</script>
