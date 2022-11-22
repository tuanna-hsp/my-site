<template>
  <v-container fluid>
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
        :height="$vuetify.breakpoint.mobile ? null : '720px'"
        v-if="shownAlbum"
      >
        <v-carousel-item v-for="(photo, i) in shownAlbum.photos" :key="i">
          <v-sheet height="100%">
            <video width="100%" v-if="photo.includes('.mov')" controls>
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
      albums: [
        {
          name: "Xuân",
          coverPhoto: "/images/albums/spring/cover.jpg",
          photos: [
            "/images/albums/spring/IMG_0020.JPG",
            "/images/albums/spring/IMG_0021.JPG",
            "/images/albums/spring/IMG_0022.JPG",
            "/images/albums/spring/IMG_0023.JPG",
            "/images/albums/spring/IMG_0024.JPG",
            "/images/albums/spring/IMG_0025.JPG",
            "/images/albums/spring/IMG_0026.JPG",
            "/images/albums/spring/IMG_0027.JPG",
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
            "/images/albums/summer/IMG_0026.mov",
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
            "/images/albums/autumn/IMG_0011.mov",
            "/images/albums/autumn/IMG_0012.mov",
            "/images/albums/autumn/IMG_0013.mov",
          ],
        },
        {
          name: "Đông",
          coverPhoto: "/images/albums/winter/cover.jpg",
          photos: [
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
            "/images/albums/winter/IMG_0032.mov",
          ],
        },
      ],
    };
  },

  computed: {
    albumRows() {
      const albumPerRow = 2;
      const rows = [];

      for (let i = 1; i <= this.albums.length; i++) {
        if (i % albumPerRow === 0 || i === this.albums.length) {
          rows.push(this.albums.slice(i - albumPerRow, i));
        }
      }

      return rows;
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
