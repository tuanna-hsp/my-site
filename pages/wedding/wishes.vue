<template>
  <div class="w-wish">
    <v-text-field v-model="form.name" color="grey darken-3" label="Người gửi" />
    <v-textarea
      v-model="form.message"
      label="Lời chúc"
      color="grey darken-3"
      auto-grow
    />
    <v-btn
      class="float-right"
      outlined
      :disabled="!formValid"
      @click="confirmSend"
    >
      <v-icon small class="mr-2">mdi-heart</v-icon>Gửi
    </v-btn>

    <div class="w-comment-list">
      <div v-for="(wish, index) in wishes" :key="index">
        <h3>{{ wish.name }}</h3>
        <p style="white-space: pre-line">{{ wish.message }}</p>
      </div>
    </div>

    <v-dialog v-model="sendConfirmation" persistent max-width="290">
      <v-card>
        <v-card-title>Xác Nhận</v-card-title>
        <v-card-text>Gửi lời chúc cho Tuấn & Quyên?</v-card-text>
        <v-card-actions>
          <v-btn text @click="sendConfirmation = false"> Sửa thêm chút </v-btn>
          <v-spacer></v-spacer>
          <v-btn text @click="send"> Gửi luôn </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
const API_URL =
  "https://script.google.com/macros/s/AKfycbzxJ8Fnfps0lmGh2aLX29cJPA4cNGO_cOv4L0iKYIRpFv3OK5QOmW4f0U_BFQ_uox3fvg/exec";

export default {
  layout: "wedding",

  data() {
    return {
      form: {
        name: "",
        message: "",
      },
      wishes: [],
      sendConfirmation: false,
      isSending: false,
    };
  },

  computed: {
    formValid() {
      return this.form.name !== "" && this.form.message !== "";
    },
  },

  mounted() {
    this.fetchWishes();
  },

  methods: {
    confirmSend() {
      this.sendConfirmation = true;
    },

    async fetchWishes() {
      const response = await fetch(API_URL, {
        redirect: "follow",
        method: "GET",
      });
      this.wishes = await response.json();
    },

    async send() {
      if (!this.formValid || this.isSending) {
        return;
      }

      this.isSending = true;

      const name = this.form.name;
      const message = this.form.message;
      const wish = { name, message };

      await fetch(API_URL, {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify(wish),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });

      this.wishes.unshift(wish);

      this.sendConfirmation = false;
      this.isSending = false;
      this.form.name = "";
      this.form.message = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.w-wish {
  max-width: 600px;
  padding-left: 16px;
  padding-right: 16px;
}

.w-comment-list {
  margin-top: 60px;
  min-height: 10px;
  width: 100%;
}
</style>
