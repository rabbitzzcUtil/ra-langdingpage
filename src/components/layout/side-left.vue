<template>
  <raSidebarMenu
    left
    :width="200"
    title="组件库"
    class="side-left"
  >

    <div
      slot="content"
      class="content"
    >
      <ra-collapse title="布局组件"></ra-collapse>
      <ra-collapse title="基础组件"></ra-collapse>
      <ra-collapse title="奇妙组件"></ra-collapse>
      <ra-collapse title="奇妙组件"></ra-collapse>
      <ra-collapse title="奇妙组件"></ra-collapse>
      <ra-collapse title="奇妙组件"></ra-collapse>
      <ra-collapse title="奇妙组件"></ra-collapse>
    </div>
  </raSidebarMenu>
</template>

<script>
import raSidebarMenu from '@/components/sidebar-menu/index.vue';
import raCollapse from '@/components/collapse/index.vue';

export default {
  components: {
    raSidebarMenu,
    raCollapse,
  },
};
</script>

<style lang="scss">
@import "@/style/scss/var.scss";
.side-left {
  .content {
    height: 500px;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    // &::-webkit-scrollbar-track {
    //   -webkit-box-shadow: inset 0 0 6px #555;
    //   box-shadow: inset 0 0 6px #555;
    //   border-radius: 10px;
    //   background-color: #f5f5f5;
    // }

    // &::-webkit-scrollbar {
    //   width: 5px;
    //   background-color: #f5f5f5;
    // }

    // &::-webkit-scrollbar-thumb {
    //   border-radius: 10px;
    //   -webkit-box-shadow: inset 0 0 6px #555;
    //   box-shadow: inset 0 0 6px #555;
    //   background-color: #555;
    // }
    .title {
      color: $titleColor;
      padding: 5px 0;
      ion-icon {
        font-size: 12px !important;
      }
    }
  }
}
</style>
