<template>
  <div
    id="app"
    :data-theme="theme"
  >
    <raGrape></raGrape>
  </div>
</template>

<script>

// eslint-disable-next-line import/no-unresolved
import raGrape from '@/components/layout/ra-grape.vue';

export default {
  name: 'App',
  components: {
    raGrape,
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
  box-sizing: border-box;
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
