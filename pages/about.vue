<template>
  <v-container>
    <div class="mx-auto my-16">
      <v-row justify="center">
        <h1>Anh Tuan</h1>
      </v-row>

      <v-row justify="center" class="mt-8"> Day dreamer </v-row>

      <v-row justify="center" class="mt-8">
        <v-tooltip v-for="contact in contactList" :key="contact.icon" bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              :href="contact.link"
              icon
              target="_blank"
              class="mx-1"
              large
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>{{ contact.icon }}</v-icon>
            </v-btn>
          </template>
          <span>{{ contact.desc }}</span>
        </v-tooltip>
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
          link: "https://gitconnected.com/tuanna-hsp/resume",
          icon: "mdi-file-account",
          desc: "View my resume",
        },
        {
          link: "https://github.com/tuanna-hsp",
          icon: "mdi-github",
          desc: "View my GitHub",
        },
        {
          link: "https://www.linkedin.com/in/tuanna-dev",
          icon: "mdi-linkedin",
          desc: "View my LinkedIn",
        },
        {
          link: "mailto:tuanna.hsp@gmail.com",
          icon: "mdi-email-outline",
          desc: "Email me",
        },
        {
          link: "https://twitter.com/tuanna_dev",
          icon: "mdi-twitter",
          desc: "Follow me on Twitter",
        },
      ],
    };
  },
});
</script>
