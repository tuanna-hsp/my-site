<template>
  <v-app class="w-layout">
    <div
      class="w-content"
      :class="{ 'w-content--mobile': $vuetify.breakpoint.mobile }"
    >
      <headline />
      <main-menu />
      <nuxt
        class="w-page"
        :class="{ 'w-page--mobile': $vuetify.breakpoint.mobile }"
      />
    </div>
  </v-app>
</template>

<script>
import Headline from "~/components/wedding/headline.vue";
import MainMenu from "~/components/wedding/main-menu.vue";

export default {
  components: { MainMenu, Headline },

  head() {
    return {
      title: "Tuấn & Quyên",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/wedding_favicon.ico" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.w-layout {
  background-color: #fff7f2;
  font-family: "VanChuong";
  min-height: 100vh;
}

.w-content {
  margin: auto;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff7f2;
  padding-bottom: 32px;

  &--mobile {
    max-width: 100%;
  }
}

.w-page {
  padding: 32px 16px;
  width: 100%;

  &--mobile {
    padding: 58px 0 0 0;
  }
}
</style>
