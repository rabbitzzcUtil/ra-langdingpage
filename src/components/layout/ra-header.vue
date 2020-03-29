<template>
  <div class="ra-header">
    <div class="operates-area content-area">
      <div class="title">ra-landingpage</div>
      <div
        class="theme-switch"
        @click.prevent="setTheme"
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
      <ion-icon
        name="expand-outline"
        @click.stop="expandFullScreen"
      ></ion-icon>
      <ion-icon name="download-outline"></ion-icon>
      <ion-icon name="code-slash-outline"></ion-icon>
      <ion-icon
        name="share-social-outline"
        @click="share"
      ></ion-icon>
      <a
        href="https://github.com/ra-utility/ra-langdingpage"
        target="__blank"
        style="color:inherit;"
      >
        <ion-icon name="logo-github"></ion-icon>
      </a>
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
  data() {
    return {
    };
  },
  methods: {
    setTheme() {
      let value = 'default-theme';
      if (this.theme === value) {
        value = 'light-theme';
      }
      this.$store.dispatch('setThemeName', value);
    },
    expandFullScreen() {
      // 全屏操作
      this.$store.dispatch('setFullScreen', true);
    },
    share() {
      // 分享功能
      console.log('已分享');
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    .theme-switch {
      transition: all 1s ease-in-out;
    }
    .title {
      margin-right: 15px;
    }
  }
}

// #raMain:-webkit-full-screen {
//   background-color: #e4708a;
//   width: 100vw;
//   height: 100vh;
// }

// #raMain:-webkit-full-screen p {
//   visibility: visible;
// }

// #raMain:-moz-full-screen {
//   background-color: #e4708a;
//   width: 100vw;
//   height: 100vh;
// }

// #raMain:-moz-full-screen p {
//   visibility: visible;
// }

// #raMain:-ms-fullscreen {
//   background-color: #e4708a;
//   width: 100vw;
//   height: 100vh;
// }

// #raMain:-ms-fullscreen p {
//   visibility: visible;
// }

// #raMain:fullscreen {
//   background-color: #e4708a;
//   width: 100vw;
//   height: 100vh;
// }

// #raMain:fullscreen p {
//   visibility: visible;
// }
</style>
