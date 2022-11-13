<template>
  <div v-if="$vuetify.breakpoint.mobile" class="w-mobile-menu">
    <div class="w-mobile-menu__button-wrapper">
      <button class="w-mobile-menu__button">
        <span class="w-mobile-menu__button-inner" />
      </button>
    </div>
  </div>

  <div v-else class="w-menu">
    <nuxt-link
      v-for="item in items"
      class="w-menu__item"
      :class="{ 'w-menu__item--active': item.to === $route.path }"
      :key="item.to"
      :to="item.to"
    >
      {{ item.name }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Đám cưới",
          to: "/wedding",
        },
        {
          name: "Chúc phúc",
          to: "/wedding/wishes",
        },
        {
          name: "Chuyện chúng mình",
          to: "/wedding/story",
        },
        {
          name: "Album ảnh",
          to: "/wedding/photos",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.w-mobile-menu {
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;

  &__button-wrapper {
    line-height: 1.5;
    border: 0 solid #e2e8f0;
    display: block;
    height: 40px;
    left: 8px;
    margin: 0;
    overflow: hidden;
    position: fixed;
    top: 8px;
    width: 40px;
    z-index: 19;
  }

  &__button {
    margin: 0;
    overflow: visible;
    text-transform: none;
    appearance: button;
    padding: 0;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 10px;
    height: 40px;
    width: 40px;
    border-radius: 3px;
  }

  &__button-inner {
    text-transform: none;
    cursor: pointer;
    font-size: 10px;
    border: 0 solid #e2e8f0;

    &::before,
    &::after {
      content: "";
      height: 3px;
      left: 20%;
      margin: 0 auto;
      border-radius: 3px;
      margin-top: -0.15em;
      position: absolute;
      top: 50%;
      -webkit-transition: all 0.4s;
      transition: all 0.4s;
      width: 24px;
      background: #62646f;
      box-shadow: 0 -10px 0 0 #62646f, 0 10px 0 0 #62646f;
    }
  }
}

.w-menu {
  padding: 8px 16px;

  &__item {
    color: black;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
    text-decoration: none;
    -webkit-text-decoration: none;
    line-height: 1;
    padding: 8px;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
    border-bottom: none;

    &--active {
      border-bottom: 2px solid #62646f;
    }

    &:hover {
      border-bottom: 2px solid rgba(98, 100, 111, 70%);
    }

    & + & {
      margin-left: 20px;
    }
  }
}
</style>
