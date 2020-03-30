<template>
  <raSidebarMenu
    right
    :width="260"
    title="组件库"
  >

    <div slot="content">
      <ra-collapse title="通用配置"></ra-collapse>
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

<style>
</style>
