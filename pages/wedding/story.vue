<template>
  <v-container>
    <v-timeline
      :dense="$vuetify.breakpoint.mobile"
      :align-top="$vuetify.breakpoint.mobile"
      class="w-timeline"
      :class="{ 'w-timeline--mobile': $vuetify.breakpoint.mobile }"
    >
      <v-timeline-item v-for="(item, index) in storyItems" :key="index" small>
        <template v-slot:opposite>
          <div class="py-4">
            <h2 class="w-timeline__date">
              {{ item.date }}
            </h2>
            <div class="w-timeline__text">
              {{ item.text }}
            </div>
          </div>
        </template>
        <div
          class="w-timeline__body"
          :class="{
            'w-timeline__body--mobile': $vuetify.breakpoint.mobile,
          }"
        >
          <v-img class="w-timeline__image" :src="item.imageUrl" />

          <template v-if="$vuetify.breakpoint.mobile">
            <h2 class="w-timeline__date">
              {{ item.date }}
            </h2>
            <div
              class="w-timeline__text"
              :class="{
                'w-timeline__text--mobile': $vuetify.breakpoint.mobile,
              }"
            >
              {{ item.text }}
            </div>
          </template>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  layout: "wedding",

  data() {
    return {
      storyItems: [
        {
          date: "15 THÁNG 6, 2019",
          text:
            "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
          imageUrl: "/images/sample.jpeg",
        },
        {
          date: "15 THÁNG 6, 2019",
          text:
            "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
          imageUrl: "/images/sample.jpeg",
        },
        {
          date: "15 THÁNG 6, 2019",
          text:
            "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
          imageUrl: "/images/sample.jpeg",
        },
        {
          date: "15 THÁNG 6, 2019",
          text:
            "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
          imageUrl: "/images/sample.jpeg",
        },
        {
          date: "15 THÁNG 6, 2019",
          text:
            "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
          imageUrl: "/images/sample.jpeg",
        },
        {
          date: "15 THÁNG 6, 2019",
          text:
            "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
          imageUrl: "/images/sample.jpeg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep .v-timeline-item__dot {
  width: 16px !important;
  height: 16px !important;
  box-shadow: none !important;
  background-color: #fff7f2 !important;
}

::v-deep .v-timeline-item__inner-dot {
  width: 8px !important;
  height: 8px !important;
  margin: 4px !important;
  background-color: black !important;
}

.w-timeline {
  &::before {
    background: none !important;
    left: 50%;
    border-left: 1px dashed rgb(35, 31, 32) !important;
  }

  &--mobile {
    &::before {
      background: none;
      left: 16px !important;
      border-left: 1px dashed rgb(35, 31, 32);
    }

    ::v-deep .v-timeline-item__body {
      max-width: calc(100% - 32px);
      padding-right: 16px;
    }

    ::v-deep .v-timeline-item__divider {
      min-width: 32px;
    }
  }

  &__body {
    padding-top: 32px;
    padding-bottom: 32px;

    &--mobile {
      padding-top: 0;
      padding-bottom: 16px;
    }
  }

  &__image {
    border-radius: 4px;
  }

  &__date {
    font-size: 22px;
    letter-spacing: 2px;
    margin-top: 8px;
  }

  &__text {
    letter-spacing: 1px;

    &--mobile {
      letter-spacing: 0;
    }
  }
}
</style>
