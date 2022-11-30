<template>
  <div class="w-footer">
    <div class="w-footer__item" v-for="item in items" :key="item.to">
      <nuxt-link
        class="w-footer__link"
        :to="item.to"
        :class="{
          'w-footer__link--active':
            $route.path === item.to || $route.path === `${item.to}/`,
        }"
      >
        {{ item.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { MENU_ITEMS } from "~/components/wedding/main-menu.vue";

export default {
  data() {
    return {
      isMobileNavOpen: false,
      items: MENU_ITEMS,
    };
  },

  methods: {
    goToPage(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped>
.w-footer {
  width: 100%;

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-top: 1px solid rgba(0, 0, 0, 0.87);
    height: 48px;
  }

  &__link {
    border-bottom: none !important;

    &--active {
      border-bottom: 2px solid #62646f !important;
    }
  }
}
</style>
