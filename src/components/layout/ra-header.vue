<template>
  <div class="ra-header">
    头部
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
    height: 60px;
    background:$headerBg;
    @include boxShadow2;
}
</style>
