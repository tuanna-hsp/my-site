<template>
  <v-app>
    <v-app-bar color="white" flat v-if="isMobile" absolute dense>
      <v-menu transition="slide-y-transition" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-app-bar-nav-icon v-bind="attrs" v-on="on"></v-app-bar-nav-icon>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            class="menu-item"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <div style="height: 36px" v-if="isMobile" />

    <v-row id="main">
      <v-col cols="3" v-if="!isMobile">
        <the-sidebar />
      </v-col>

      <v-divider vertical light v-if="!isMobile" />

      <v-col>
        <v-main>
          <nuxt />
        </v-main>
      </v-col>
    </v-row>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      items: [
        { title: "Home", to: "/" },
        { title: "About", to: "/about" },
      ],
    };
  },

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
</style>
