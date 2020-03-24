<template>
  <div class="ra-main">
    <!-- <vue-sidebar-menu></vue-sidebar-menu> -->
    <!-- <sidebar-menu :menu="menu"></sidebar-menu> -->
  </div>
</template>

<script>

export default {
  name: 'RaMain',
  data() {
    return {
      menu: [
        {
          header: true,
          title: 'Main Navigation',
          hiddenOnCollapse: true,
        },
        {
          title: 'Dashboard',
          icon: 'fa fa-user',
        },
        {
          title: 'Charts',
          icon: 'fa fa-chart-area',
          child: [
            {
              title: 'Sub Link',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/scss/var.scss";

.ra-main {
  flex:1;
  background: $mainBg;
}
</style>
