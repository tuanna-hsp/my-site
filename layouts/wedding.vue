<template>
  <div class="w-layout">
    <div class="w-content">
      <headline />
      <main-menu />
      <nuxt class="w-page" />
    </div>
  </div>
</template>

<script>
import Headline from "~/components/wedding/headline.vue";
import MainMenu from "~/components/wedding/main-menu.vue";

export default {
  components: { MainMenu, Headline },
};
</script>

<style lang="scss" scoped>
.w-layout {
  background-color: #fff7f2;
  font-family: "VanChuong";
  height: 100vh;
}

.w-content {
  margin: auto;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.w-page {
  padding: 16px;
  width: 100%;
}
</style>
