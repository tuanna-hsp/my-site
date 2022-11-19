<template>
  <v-container>
    <v-row class="w-album__row" v-for="(row, index) in albumRows" :key="index">
      <v-col cols="12" sm="6" v-for="album in row" :key="album.name">
        <v-img
          class="w-album__cover"
          :class="{ 'w-album__cover--mobile': $vuetify.breakpoint.mobile }"
          :src="album.coverPhoto"
          @click.stop="showAlbum(album)"
        />
        <h2 class="w-album__title">{{ album.name }}</h2>
        <p class="w-album__subtitle">{{ album.photos.length }} ảnh</p>
      </v-col>
    </v-row>

    <v-dialog class="w-album__dialog" v-model="isAlbumShown" max-width="1280px">
      <v-carousel
        cycle
        hide-delimiter-background
        :height="$vuetify.breakpoint.mobile ? null : '720px'"
        v-if="shownAlbum"
      >
        <v-carousel-item v-for="(photo, i) in shownAlbum.photos" :key="i">
          <v-sheet height="100%">
            <v-img :src="photo" />
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
          name: "Summer",
          coverPhoto: "http://localhost:3000/images/sample.jpeg",
          photos: [
            "http://localhost:3000/images/sample.jpeg",
            "http://localhost:3000/images/sample.jpeg",
            "http://localhost:3000/images/sample.jpeg",
            "http://localhost:3000/images/sample.jpeg",
          ],
        },
        {
          name: "Spring",
          coverPhoto: "http://localhost:3000/images/sample.jpeg",
          photos: [
            "http://localhost:3000/images/sample.jpeg",
            "http://localhost:3000/images/sample.jpeg",
            "http://localhost:3000/images/sample.jpeg",
            "http://localhost:3000/images/sample.jpeg",
          ],
        },
        {
          name: "Winter",
          coverPhoto: "http://localhost:3000/images/sample.jpeg",
          photos: [
            "http://localhost:3000/images/sample.jpeg",
            "http://localhost:3000/images/sample.jpeg",
            "http://localhost:3000/images/sample.jpeg",
            "http://localhost:3000/images/sample.jpeg",
          ],
        },
        {
          name: "Autumn",
          coverPhoto: "http://localhost:3000/images/sample.jpeg",
          photos: [
            "http://localhost:3000/images/sample.jpeg",
            "http://localhost:3000/images/sample.jpeg",
            "http://localhost:3000/images/sample.jpeg",
            "http://localhost:3000/images/sample.jpeg",
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

  &__cover {
    border-radius: 4px;
    cursor: pointer;

    &--mobile {
      margin-left: 16px;
      margin-right: 16px;
    }
  }
}
</style>
