<template>
  <div id="app">
    <div class="center">
      <ra-header></ra-header>
      <ra-main></ra-main>
      <ra-footer></ra-footer>
    </div>
    <raSidebarMenu></raSidebarMenu>
  </div>
</template>

<script>
import raHeader from '@/components/layout/ra-header.vue';
import raMain from '@/components/layout/ra-main.vue';
import raFooter from '@/components/layout/ra-footer.vue';
import raSidebarMenu from '@/components/sidebar-menu/index.vue';

export default {
  name: 'App',
  components: {
    raHeader, raMain, raFooter, raSidebarMenu,
  },
};
</script>

<style lang="scss">
@import "@/style/scss/init.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html,
body {
  height: 100%;
}
#app {
  min-height: 100%;
  display: flex;
  .center {
    text-align: right;
    min-height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
