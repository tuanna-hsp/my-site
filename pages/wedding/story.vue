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
            <div class="w-timeline__text" v-html="item.text" />
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
            <h2
              class="w-timeline__date"
              :class="{
                'w-timeline__date--mobile': $vuetify.breakpoint.mobile,
              }"
            >
              {{ item.date }}
            </h2>
            <div
              class="w-timeline__text"
              :class="{
                'w-timeline__text--mobile': $vuetify.breakpoint.mobile,
              }"
              v-html="item.text"
            />
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
          date: "06/04/2018 - Lần đầu gặp gỡ",
          text: `
Chúng mình gặp mặt lần đầu tại một sự kiện của hội người Việt tại Nhật.<br/>
Ấn tượng đầu với đối phương:<br/>
Cô Dâu: “<i>Trời. Bạn này giống Lương Xuân Trường quá vậy.</i>” (Nhưng ko đẹp trai bằng 🙄)<br/>
Chú Rể: <i>Không nhớ gì 🙈</i> (chắc còn bận chụp ảnh với fan)<br/>
Sau sự kiện đó chúng mình có gặp nhau 1, 2 lần nữa nhưng không trò chuyện nhiều và cũng không có ấn tượng gì sâu sắc khác 🤣`,
          imageUrl: "/images/story/first_time.jpg",
        },
        {
          date: "15/03/2019 - Hữu duyên thiên lý",
          text: `
Chúng mình gặp lại và đi chơi chung một cách tình cờ. Sau lần đó chúng mình có trò chuyện nhiều hơn, gặp nhiều hơn vì phát hiện ra nhà Chú Rể nằm trên đường về nhà Cô Dâu (cách nhau 7’ đi tàu).<br/>
Nhưng thực ra lý do chính dẫn đến mối lương duyên này lại là con đường khác… đường ăn uống: Cô Dâu thường đi làm về trễ nên hay ghé nhà Chú Rể ăn cơm ké 🤤.<br/>
P/S: Ông bà nói cấm có sai <i>Nhất cự ly, nhì tốc độ</i> 😄`,
          imageUrl: "/images/story/food.jpg",
        },
        {
          date: "15/06/2019 - Chính thức hẹn hò",
          text: `
Vào một ngày đẹp trời sau khi tá túc cơm nước chơi bời ở nhà Chú Rể, Chú Rể cưỡi chiếc xe đạp không có yên sau chở Cô Dâu vắt vẻo trên ghi đông 😵‍💫, đạp phòi cơm suốt 3km để đưa Cô Dâu về nhà. Thành quả là Chú Rể cuối cùng cũng dám mở lời “ Tuấn thích Xu”<br/>
Cô Dâu: <i>(Ahihi 🤣)</i><br/>
Chú Rể: <i>(Chở vầy may mà không bị công an bắt, không là hết tỏ tình 😂)</i><br/>
Và sau đó là những chuỗi ngày hẹn hò. Mọi người xem <a href="/wedding/photos">album ảnh</a> về những nơi chúng mình đã đi qua nha!
`,
          imageUrl: "/images/story/date.jpg",
        },
        {
          date: "01/04/2020 - Về chung một nhà",
          text: `
            Chúng mình đã quyết định làm mọi thứ cùng nhau mỗi ngày 🥰.<br/>
Chú Rể: <i>Chuyển sang nhà Cô Dâu ở nên từ đó không dám manh động nữa, không là bị cho ra đường như chơi 😆</i>
            `,
          imageUrl: "/images/story/new_home.jpg",
        },
        {
          date: "14/2/2021 - Diamond Valentine",
          text: `Cô Dâu đồng ý rước Chú Rể về làm chồng❤️<br/>
Chú Rể: <i>Xu cưới anh nha?</i><br/>
Cô Dâu: (🙄 <i>Ủa là mình phải đi rước rể?</i>🤪)`,
          imageUrl: "/images/story/ring.jpg",
        },
        {
          date: "30/4/2021 - Bút sa…",
          text: `Chúng mình ký hiệp ước giải phóng hoàn toàn chế độ độc thân ❤️`,
          imageUrl: "/images/story/married.jpg",
        },
        {
          date: "29/07/2021 - Tình yêu nhân đôi",
          text: `Chúng mình quyết định để lại bằng chứng cho mối duyên vợ chồng 🐯❤️`,
          imageUrl: "/images/story/new_life.jpg",
        },
        {
          date: "06/04/2022 - Bé Hổ con",
          text: `Minh chứng cho sự gắn kết của chúng mình ra đời vào một ngày mùa xuân ngập tràn nắng và hoa anh đào 👨‍👩‍👧❤️`,
          imageUrl: "/images/story/tora.jpg",
        },
        {
          date: "17/12/2022 & 24/12/2022 - Hôn Lễ",
          text: `Người tính không bằng trời tính. Lễ cưới đến muộn sau đại dịch với nhiều hạnh phúc to lớn hơn ❤️<br/>
Mọi người hãy đến chung vui và chúc phúc cho chúng mình nha.<br/>
Đừng quên để lại lời chúc <a href="/wedding/wishes">tại đây nha</a> 🥰<br/>
Cám ơn mọi người đã đọc! Cảm ơn Gia Đình, Họ Hàng, Bạn Bè và tất cả những ai vẫn luôn theo dõi và quan tâm chúng mình❤️`,
          imageUrl: "/images/story/wedding.jpg",
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
    text-align: left;
    padding-left: 16px;
    padding-right: 16px;

    &--mobile {
      padding-left: 0;
      padding-right: 0;
      font-size: 18px;
    }
  }

  &__text {
    text-align: left;
    padding-left: 16px;
    padding-right: 16px;

    &--mobile {
      padding-left: 0;
      padding-right: 0;
    }
  }
}
</style>
