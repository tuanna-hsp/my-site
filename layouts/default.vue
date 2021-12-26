<template>
  <v-app>
    <v-app-bar color="white" flat absolute dense>
      <div class="header-content mx-auto">
        <nuxt-link class="header-item" to="/">Home</nuxt-link>
        <nuxt-link class="header-item" to="/about">About</nuxt-link>
      </div>
    </v-app-bar>

    <div style="height: 48px" />

    <v-row id="main">
      <v-main>
        <nuxt />
      </v-main>
    </v-row>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
});
</script>

<style scoped>
.menu-item {
  border-bottom: 0px !important;
}

.header-content {
  width: 900px;
  padding-left: 16px;
  padding-right: 16px;
}

.header-item {
  font-weight: 500;
  font-size: 1.2rem;
  margin-right: 8px;
}
</style>
