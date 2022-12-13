<template>
  <v-container fluid>
    <v-row class="w-album__row" no-gutters>
      <v-col cols="12">
        <div
          class="w-album__cover-wrapper"
          :class="{
            'w-album__cover-wrapper--mobile': $vuetify.breakpoint.mobile,
          }"
        >
          <img
            class="w-album__cover"
            :src="preWeddingALbum.coverPhoto"
            @click.stop="showAlbum(preWeddingALbum)"
          />
        </div>
        <h2 class="w-album__title">{{ preWeddingALbum.name }}</h2>
        <p class="w-album__subtitle">{{ preWeddingALbum.photos.length }} ảnh</p>
      </v-col>
    </v-row>

    <v-row
      class="w-album__row"
      v-for="(row, index) in albumRows"
      :key="index"
      no-gutters
    >
      <v-col cols="12" sm="6" v-for="(album, index) in row" :key="album.name">
        <div
          class="w-album__cover-wrapper"
          :class="{
            'w-album__cover-wrapper--mobile': $vuetify.breakpoint.mobile,
            'w-album__cover-wrapper--left': index % 2 === 0,
            'w-album__cover-wrapper--right': index % 2 === 1,
          }"
        >
          <img
            class="w-album__cover"
            :src="album.coverPhoto"
            @click.stop="showAlbum(album)"
          />
        </div>
        <h2 class="w-album__title">{{ album.name }}</h2>
        <p class="w-album__subtitle">{{ album.photos.length }} ảnh</p>
      </v-col>
    </v-row>

    <v-dialog class="w-album__dialog" v-model="isAlbumShown" max-width="1280px">
      <v-carousel
        hide-delimiter-background
        hide-delimiters
        v-model="slideItem"
        :height="$vuetify.breakpoint.mobile ? null : '720px'"
        v-if="shownAlbum"
      >
        <v-carousel-item
          v-for="(photo, i) in shownAlbum.photos"
          :key="`${shownAlbum.name}${i}`"
        >
          <v-sheet height="100%">
            <video
              v-if="photo.includes('.mov') || photo.includes('.mp4')"
              width="100%"
              controls
            >
              <source :src="photo" type="video/mp4" />
            </video>
            <v-img v-else contain :src="photo" height="100%" />
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  layout: "wedding",

  data() {
    return {
      shownAlbum: null,
      isAlbumShown: false,
      slideItem: 0,
      albums: [
        {
          name: "Xuân",
          coverPhoto: "/images/albums/spring/cover.jpg",
          photos: [
            "/images/albums/spring/IMG_0001.JPG",
            "/images/albums/spring/IMG_0002.JPG",
            "/images/albums/spring/IMG_0003.JPG",
            "/images/albums/spring/IMG_0004.JPG",
            "/images/albums/spring/IMG_0005.JPG",
            "/images/albums/spring/IMG_0006.JPG",
            "/images/albums/spring/IMG_0007.JPG",
            "/images/albums/spring/IMG_0008.JPG",
            "/images/albums/spring/IMG_0009.JPG",
            "/images/albums/spring/IMG_0010.JPG",
            "/images/albums/spring/IMG_0011.JPG",
            "/images/albums/spring/IMG_0012.JPG",
            "/images/albums/spring/IMG_0013.JPG",
            "/images/albums/spring/IMG_0014.JPG",
            "/images/albums/spring/IMG_0015.JPG",
            "/images/albums/spring/IMG_0016.JPG",
            "/images/albums/spring/IMG_0017.JPG",
            "/images/albums/spring/IMG_0018.JPG",
            "/images/albums/spring/IMG_0019.JPG",
            "/images/albums/spring/IMG_0020.JPG",
            "/images/albums/spring/IMG_0021.JPG",
            "/images/albums/spring/IMG_0022.JPG",
            "/images/albums/spring/IMG_0023.JPG",
            "/images/albums/spring/IMG_0024.JPG",
            "/images/albums/spring/IMG_0025.JPG",
            "/images/albums/spring/IMG_0026.JPG",
            "/images/albums/spring/IMG_0027.JPG",
            "/images/albums/spring/IMG_0028.mov",
            "/images/albums/spring/IMG_0029.JPG",
            "/images/albums/spring/IMG_0030.JPG",
            "/images/albums/spring/IMG_0031.JPG",
            "/images/albums/spring/IMG_0032.JPG",
          ],
        },
        {
          name: "Hạ",
          coverPhoto: "/images/albums/summer/cover.jpg",
          photos: [
            "/images/albums/summer/IMG_0026.mov",
            "/images/album/summer/IMG_0714.jpeg",
            "/images/album/summer/IMG_1906.jpg",
            "/images/album/summer/IMG_6004.jpeg",
            "/images/album/summer/IMG_6018.jpeg",
            "/images/album/summer/IMG_6078.jpeg",
            "/images/album/summer/IMG_6296.jpeg",
            "/images/albums/summer/IMG_0001.JPG",
            "/images/albums/summer/IMG_0002.JPG",
            "/images/albums/summer/IMG_0003.JPG",
            "/images/albums/summer/IMG_0004.JPG",
            "/images/albums/summer/IMG_0005.JPG",
            "/images/albums/summer/IMG_0006.JPG",
            "/images/albums/summer/IMG_0007.JPG",
            "/images/albums/summer/IMG_0008.JPG",
            "/images/albums/summer/IMG_0009.JPG",
            "/images/albums/summer/IMG_0010.JPG",
            "/images/albums/summer/IMG_0011.JPG",
            "/images/albums/summer/IMG_0012.JPG",
            "/images/albums/summer/IMG_0013.mp4",
            "/images/albums/summer/IMG_0014.JPG",
            "/images/albums/summer/IMG_0015.JPG",
            "/images/albums/summer/IMG_0016.JPG",
            "/images/albums/summer/IMG_0017.JPG",
            "/images/albums/summer/IMG_0018.JPG",
            "/images/albums/summer/IMG_0019.JPG",
            "/images/albums/summer/IMG_0020.JPG",
            "/images/albums/summer/IMG_0021.JPG",
            "/images/albums/summer/IMG_0022.JPG",
            "/images/albums/summer/IMG_0023.JPG",
            "/images/albums/summer/IMG_0024.JPG",
            "/images/albums/summer/IMG_0025.JPG",
            "/images/albums/summer/IMG_0027.JPG",
            "/images/albums/summer/IMG_3849.mov",
          ],
        },
        {
          name: "Thu",
          coverPhoto: "/images/albums/autumn/cover.jpg",
          photos: [
            "/images/albums/autumn/IMG_0001.JPG",
            "/images/albums/autumn/IMG_0002.JPG",
            "/images/albums/autumn/IMG_0003.JPG",
            "/images/albums/autumn/IMG_0004.JPG",
            "/images/albums/autumn/IMG_0005.JPG",
            "/images/albums/autumn/IMG_0006.JPG",
            "/images/albums/autumn/IMG_0007.JPG",
            "/images/albums/autumn/IMG_0008.JPG",
            "/images/albums/autumn/IMG_0009.JPG",
            "/images/albums/autumn/IMG_0010.mov",
            "/images/albums/autumn/IMG_0017.jpeg",
            "/images/albums/autumn/IMG_0020.jpeg",
            "/images/albums/autumn/IMG_0033.jpeg",
            "/images/albums/autumn/IMG_8123.jpeg",
            "/images/albums/autumn/IMG_8.mov",
            "/images/albums/autumn/IMG_3852.jpeg",
            "/images/albums/autumn/IMG_4548.jpeg",
            "/images/albums/autumn/IMG_6991.jpeg",
            "/images/albums/autumn/IMG_7022.jpeg",
            "/images/albums/autumn/IMG_7163.jpeg",
            "/images/albums/autumn/IMG_7225.jpeg",
          ],
        },
        {
          name: "Đông",
          coverPhoto: "/images/albums/winter/cover.jpg",
          photos: [
            "/images/albums/winter/IMG_0032.mov",
            "/images/albums/winter/IMG_0001.JPG",
            "/images/albums/winter/IMG_0002.JPG",
            "/images/albums/winter/IMG_0003.JPG",
            "/images/albums/winter/IMG_0004.JPG",
            "/images/albums/winter/IMG_0005.JPG",
            "/images/albums/winter/IMG_0006.JPG",
            "/images/albums/winter/IMG_0007.JPG",
            "/images/albums/winter/IMG_0008.JPG",
            "/images/albums/winter/IMG_0009.JPG",
            "/images/albums/winter/IMG_0010.JPG",
            "/images/albums/winter/IMG_0011.JPG",
            "/images/albums/winter/IMG_0012.JPG",
            "/images/albums/winter/IMG_0013.JPG",
            "/images/albums/winter/IMG_0014.JPG",
            "/images/albums/winter/IMG_0015.JPG",
            "/images/albums/winter/IMG_0016.JPG",
            "/images/albums/winter/IMG_0017.JPG",
            "/images/albums/winter/IMG_0018.JPG",
            "/images/albums/winter/IMG_0019.JPG",
            "/images/albums/winter/IMG_0020.JPG",
            "/images/albums/winter/IMG_0021.JPG",
            "/images/albums/winter/IMG_0022.JPG",
            "/images/albums/winter/IMG_0023.JPG",
            "/images/albums/winter/IMG_0024.JPG",
            "/images/albums/winter/IMG_0025.JPG",
            "/images/albums/winter/IMG_0026.JPG",
            "/images/albums/winter/IMG_0027.JPG",
            "/images/albums/winter/IMG_0028.JPG",
            "/images/albums/winter/IMG_0029.JPG",
            "/images/albums/winter/IMG_0030.JPG",
            "/images/albums/winter/IMG_0031.JPG",
            "/images/albums/winter/IMG_3508.mov",
          ],
        },
      ],
      preWeddingALbum: {
        name: "Pre-wedding",
        coverPhoto: "/images/albums/wedding/cover.jpg",
        photos: [
          "/images/albums/wedding/1.jpg",
          "/images/albums/wedding/10.jpg",
          "/images/albums/wedding/11.jpg",
          "/images/albums/wedding/12.jpg",
          "/images/albums/wedding/13.jpg",
          "/images/albums/wedding/14.jpg",
          "/images/albums/wedding/15.jpg",
          "/images/albums/wedding/16.jpg",
          "/images/albums/wedding/17.jpg",
          "/images/albums/wedding/18.jpg",
          "/images/albums/wedding/19.jpg",
          "/images/albums/wedding/2.jpg",
          "/images/albums/wedding/20.jpg",
          "/images/albums/wedding/21.jpg",
          "/images/albums/wedding/22.jpg",
          "/images/albums/wedding/23.jpg",
          "/images/albums/wedding/24.jpg",
          "/images/albums/wedding/25.jpg",
          "/images/albums/wedding/26.jpg",
          "/images/albums/wedding/27.jpg",
          "/images/albums/wedding/28.jpg",
          "/images/albums/wedding/29.jpg",
          "/images/albums/wedding/3.jpg",
          "/images/albums/wedding/30.jpg",
          "/images/albums/wedding/31.jpg",
          "/images/albums/wedding/32.jpg",
          "/images/albums/wedding/33.jpg",
          "/images/albums/wedding/34.jpg",
          "/images/albums/wedding/35.jpg",
          "/images/albums/wedding/36.jpg",
          "/images/albums/wedding/37.jpg",
          "/images/albums/wedding/38.jpg",
          "/images/albums/wedding/39.jpg",
          "/images/albums/wedding/4.jpg",
          "/images/albums/wedding/40.jpg",
          "/images/albums/wedding/41.jpg",
          "/images/albums/wedding/42.jpg",
          "/images/albums/wedding/43.jpg",
          "/images/albums/wedding/44.jpg",
          "/images/albums/wedding/45.jpg",
          "/images/albums/wedding/46.jpg",
          "/images/albums/wedding/47.jpg",
          "/images/albums/wedding/48.jpg",
          "/images/albums/wedding/49.jpg",
          "/images/albums/wedding/5.jpg",
          "/images/albums/wedding/50.jpg",
          "/images/albums/wedding/51.jpg",
          "/images/albums/wedding/6.jpg",
          "/images/albums/wedding/7.jpg",
          "/images/albums/wedding/8.jpg",
          "/images/albums/wedding/9.jpg",
        ],
      },
    };
  },

  computed: {
    albumRows() {
      return [
        this.albums.slice(0, 2),
        this.albums.slice(2, 4),
        this.albums.slice(4, 6),
      ];
    },
  },

  watch: {
    isAlbumShown(value) {
      if (!value) {
        this.slideItem = 0;
      }
    },
  },

  methods: {
    showAlbum(album) {
      this.shownAlbum = album;
      this.isAlbumShown = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.w-album {
  &__row {
    margin-bottom: 16px;
  }

  &__title {
    margin-top: 10px;
    text-align: center;
  }

  &__subtitle {
    text-align: center;
  }

  &__cover-wrapper {
    cursor: pointer;

    &--left {
      padding-right: 16px;
    }

    &--right {
      padding-left: 16px;
    }

    &--mobile {
      padding-left: 16px;
      padding-right: 16px;
    }
  }

  &__cover {
    width: 100%;
    border-radius: 4px;
  }
}
</style>
