<template>
  <div class="ra-header">
    <div class="operates-area content-area">
      <ion-icon name="moon"></ion-icon>
      <ion-icon name="moon-outline"></ion-icon>
    </div>
    <div class="share-area content-area">
      <ion-icon name="download-outline"></ion-icon>
      <ion-icon name="code-slash-outline"></ion-icon>
      <ion-icon name="logo-github"></ion-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RaMain',
};
</script>

<style lang="scss" scoped>
@import "@/style/scss/var.scss";
@import "@/style/scss/box-shadow.scss";
.ra-header {
  width: 100%;
  height: 44px;
  line-height: 44px;
  padding: 0 7px;
  background: $headerBg;
  border-bottom: 1px solid rgb(67, 67, 71);
  @include boxShadow2;

  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  .content-area {
  }
}
</style>
