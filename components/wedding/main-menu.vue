<template>
  <div v-if="$vuetify.breakpoint.mobile" class="w-mobile-menu">
    <div class="w-mobile-menu__button-wrapper" @click="toggleMobileNav">
      <button class="w-mobile-menu__button">
        <span
          class="w-mobile-menu__button-inner"
          :class="{ 'w-mobile-menu__button-inner--open': isMobileNavOpen }"
        />
      </button>
    </div>

    <nav
      role="navigation"
      class="w-mobile-menu__nav"
      :class="{ 'w-mobile-menu__nav--open': isMobileNavOpen }"
    >
      <div class="w-mobile-menu__nav-content">
        <ul class="w-mobile-menu__nav-list">
          <li
            class="w-mobile-menu__nav-item"
            :class="{
              'w-mobile-menu__nav-item--active':
                $route.path === item.to || $route.path === `${item.to}/`,
            }"
            v-for="item in items"
            :key="item.to"
          >
            <nuxt-link :to="item.to" @click.native="goToPage(item.to)">{{
              item.name
            }}</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>

  <div v-else class="w-menu">
    <nuxt-link
      v-for="item in items"
      class="w-menu__item"
      :class="{
        'w-menu__item--active':
          item.to === $route.path || $route.path === `${item.to}/`,
      }"
      :key="item.to"
      :to="item.to"
    >
      {{ item.name }}
    </nuxt-link>
  </div>
</template>

<script>
export const MENU_ITEMS = [
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
];

export default {
  data() {
    return {
      isMobileNavOpen: false,
      items: MENU_ITEMS,
    };
  },

  methods: {
    toggleMobileNav() {
      this.isMobileNavOpen = !this.isMobileNavOpen;
    },

    goToPage(path) {
      this.$router.push(path);
      this.isMobileNavOpen = false;
    },
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

    &--open {
      &::before {
        transform: rotateZ(-45deg);
      }

      &::after {
        transform: rotateZ(45deg);
      }

      &::before,
      &::after {
        box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px,
          rgb(0 0 0 / 0%) 0px 0px 0px 0px;
        margin: -0.15em auto 0px;
        position: absolute;
        transition: all 0.4s ease 0s;
      }
    }
  }

  &__nav {
    left: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    width: 100%;
    z-index: 18;
    height: 0;
    background-color: #fff7f2;

    &--open {
      left: 0px;
      overflow: hidden;
      position: fixed;
      top: 0px;
      transition: all 0.5s ease 0s;
      width: 100%;
      z-index: 18;
      height: 100%;
    }
  }

  &__nav-content {
    padding-top: 56px;
    height: 100vh;
    overflow-y: auto;
  }

  &__nav-list {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__nav-item {
    text-align: center;
    width: 100%;
    padding: 8px;
    font-size: 18px;

    > a {
      border-bottom: none;
      padding: 4px;
    }

    &--active {
      > a {
        border-bottom: 2px solid #62646f;
      }
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
      border-bottom: 2px solid #62646f !important;
    }

    &:hover {
      border-bottom: 2px solid rgba(98, 100, 111, 70%) !important;
    }

    & + & {
      margin-left: 20px;
    }
  }
}
</style>
