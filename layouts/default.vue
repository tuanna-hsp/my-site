<template>
  <v-app>
    <v-row>
      <v-col cols="3">
        <the-sidebar />
      </v-col>

      <v-divider vertical light />

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

export default Vue.extend({});
</script>
