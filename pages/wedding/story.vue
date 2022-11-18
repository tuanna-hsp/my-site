<template>
  <div>
    <v-timeline>
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
        <div class="w-timeline__image">
          <v-img :src="item.imageUrl" />
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
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
          imageUrl: "/images/wedding-cover.jpeg",
        },
        {
          date: "15 THÁNG 6, 2019",
          text:
            "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
          imageUrl: "/images/wedding-cover.jpeg",
        },
        {
          date: "15 THÁNG 6, 2019",
          text:
            "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
          imageUrl: "/images/wedding-cover.jpeg",
        },
        {
          date: "15 THÁNG 6, 2019",
          text:
            "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
          imageUrl: "/images/wedding-cover.jpeg",
        },
        {
          date: "15 THÁNG 6, 2019",
          text:
            "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
          imageUrl: "/images/wedding-cover.jpeg",
        },
        {
          date: "15 THÁNG 6, 2019",
          text:
            "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
          imageUrl: "/images/wedding-cover.jpeg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep .v-timeline::before {
  background: none;
  left: 50%;
  border-left: 1px dashed rgb(35, 31, 32);
}

::v-deep .v-timeline-item__dot {
  width: 16px;
  height: 16px;
  box-shadow: none;
  background-color: #fff7f2 !important;
}

::v-deep .v-timeline-item__inner-dot {
  width: 8px;
  height: 8px;
  margin: 4px;
  background-color: black !important;
}

.w-timeline {
  &__image {
    padding-top: 32px;
    padding-bottom: 32px;
  }

  &__date {
    font-size: 22px;
    letter-spacing: 2px;
  }

  &__text {
    letter-spacing: 1px;
  }
}
</style>
