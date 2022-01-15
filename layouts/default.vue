<template>
  <v-app>
    <!-- <v-app-bar color="white" flat absolute dense>
      <div v-if="isMobile" class="header-content mx-auto">
        <nuxt-link class="header-item" to="/">Home</nuxt-link>
        <nuxt-link class="header-item" to="/about">About</nuxt-link>
      </div>
    </v-app-bar>

    <div style="height: 48px" /> -->

    <v-row id="main">
      <v-main>
        <nuxt />
      </v-main>
    </v-row>

    <!-- <div v-if="!isMobile" class="side-menu-content">
      <nuxt-link class="side-menu-item" to="/">Home</nuxt-link>
      <nuxt-link class="side-menu-item" to="/about">About</nuxt-link>
    </div> -->
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
  border-bottom: 2px solid red;
}

.side-menu-content {
  position: fixed;
  top: 54px;
  left: 16px;
  display: flex;
  flex-direction: column;
  padding: 8px;
}

.side-menu-item {
  margin-bottom: 24px;
  font-weight: 500;
  font-size: 1.2rem;
  border-bottom: 2px solid red;
}
</style>
