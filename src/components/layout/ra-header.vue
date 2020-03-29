<template>
  <div class="ra-header">
    <div class="operates-area content-area">
      <div
        class="theme-switch"
        @click="setTheme()"
      >
        <ion-icon
          name="moon-outline"
          v-if="theme === 'default-theme'"
        ></ion-icon>
        <ion-icon
          name="moon"
          v-else
        ></ion-icon>
      </div>
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
  computed: {
    theme() {
      return this.$store.getters.getTheme;
    },
  },
  methods: {
    setTheme() {
      let value = 'default-theme';
      if (this.theme === value) {
        value = 'light-theme';
      }
      this.$store.dispatch('setThemeName', value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/scss/var.scss";
@import "@/style/scss/box-shadow.scss";
@import "@/style/scss/mixin.scss";

.ra-header {
  width: 100%;
  height: 44px;
  line-height: 44px;
  padding: 0 7px;
  @include base-background();
  @include text-color();
  border-bottom: 1px solid rgb(67, 67, 71);
  @include boxShadow2;

  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  .content-area {
    .theme-switch {
      transition: all 1s ease-in-out;
    }
  }
}
</style>
