<template>
  <div id="app" :data-theme="theme">
    <ra-header></ra-header>
    <div class="center">
      <raSidebarMenu
        left
        :width="200"
      ></raSidebarMenu>
      <ra-main></ra-main>
      <raSidebarMenu :width="260"></raSidebarMenu>
    </div>
    <!-- <ra-footer></ra-footer> -->
  </div>
</template>

<script>
import raHeader from '@/components/layout/ra-header.vue';
import raMain from '@/components/layout/ra-main.vue';
// import raFooter from '@/compsonents/layout/ra-footer.vue';
import raSidebarMenu from '@/components/sidebar-menu/index.vue';

export default {
  name: 'App',
  components: {
    raHeader, raMain, raSidebarMenu,
  },
  computed: {
    theme() {
      return this.$store.getters.getTheme;
    },
  },
};
</script>

<style lang="scss">
@import "@/style/scss/init.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}

html,
body {
  height: 100%;
}
* {
  transition: background 0.4s ease-in-out;
}
#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  .center {
    min-height: 100%;
    text-align: right;
    min-height: 100%;
    flex: 1;
    display: flex;
  }
  ion-icon {
    cursor: pointer;
    font-size: 16px;
    margin: 0 5px;
  }
}
</style>
