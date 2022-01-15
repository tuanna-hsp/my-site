<template>
  <v-container class="about-wrapper">
    <div class="mx-auto my-auto">
      <v-row justify="center">
        <img
          height="200px"
          width="200px"
          class="profile-picture"
          src="https://github.com/tuanna-hsp.png"
          alt="tuanna-hsp"
        />
      </v-row>

      <v-row justify="center" class="mt-8">
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
          link: "https://medium.com/@tuanna.dev",
          icon: "mdi-pencil-box",
          desc: "Blog",
        },
        {
          link: "https://gitconnected.com/tuanna-hsp/resume",
          icon: "mdi-file-account",
          desc: "Resume",
        },
        {
          link: "https://www.linkedin.com/in/tuanna-dev",
          icon: "mdi-linkedin",
          desc: "LinkedIn",
        },
        {
          link: "mailto:email@tuanna.dev",
          icon: "mdi-email-outline",
          desc: "Email",
        },
        {
          link: "https://twitter.com/tuanna_dev",
          icon: "mdi-twitter",
          desc: "Twitter",
        },
        {
          link: "https://github.com/tuanna-hsp",
          icon: "mdi-github",
          desc: "GitHub",
        },
      ],
    };
  },
});
</script>

<style scoped>
.about-wrapper {
  height: 100vh;
  display: flex;
}

.profile-picture {
  border-radius: 50%;
}
</style>
