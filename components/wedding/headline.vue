<template>
  <div class="w-headline">
    <div class="w-headline__name-wrapper">
      <span class="w-headline__name">ANH TUẤN</span>
      <v-img width="100px" src="/images/flower.png" />
      <span class="w-headline__name">DIỆU QUYÊN</span>
    </div>
    <p class="w-headline__date"><i>Nhà trai 24.12.22 - Nhà gái 17.12.22</i></p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.w-headline {
  padding-top: 40px;
  padding-bottom: 40px;

  &__name-wrapper {
    display: flex;
    align-items: center;
  }

  &__name {
    font-size: 60px;
    font-weight: 500;
    font-family: "FilmotypeHoney";
  }

  &__date {
    font-size: 20px;
    text-align: center;
  }
}
</style>
