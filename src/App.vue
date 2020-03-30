<template>
  <div
    id="app"
    :data-theme="theme"
  >
    <ra-header></ra-header>
    <div class="center">
      <side-left></side-left>
      <ra-main></ra-main>
      <side-right></side-right>
    </div>
    <!-- <ra-footer></ra-footer> -->
  </div>
</template>

<script>
import raHeader from '@/components/layout/ra-header.vue';
import raMain from '@/components/layout/ra-main.vue';
import sideLeft from '@/components/layout/side-left.vue';
import sideRight from '@/components/layout/side-right.vue';
// import raFooter from '@/compsonents/layout/ra-footer.vue';

export default {
  name: 'App',
  components: {
    raHeader,
    raMain,
    sideLeft,
    sideRight,
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
  font-size: 12px;
  box-sizing:border-box;
}
// body::-webkit-scrollbar {
//   display: none;
// }
#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  .center {
    min-height: 100%;
    min-height: 100%;
    flex: 1;
    display: flex;
  }
}
</style>
