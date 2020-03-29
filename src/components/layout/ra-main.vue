<template>
  <div
    class="ra-main"
    id="raMain"
  >
    核心嘻嘻嘻
    <ion-icon
      class="icon-contract"
        name="contract-outline"
        v-if="fullscreen"
        @click.stop="exitFullscreen"
      ></ion-icon>
  </div>
</template>

<script>
import { launchFullscreen, exitFullscreen } from '@/utils/fullscreen';

export default {
  name: 'RaMain',
  data() {
    return {
      fsObj: null,
    };
  },
  computed: {
    fullscreen() {
      return this.$store.getters.getFullscreen;
    },
  },
  watch: {
    fullscreen(val) {
      if (val) {
        const $raMain = document.getElementById('raMain');
        launchFullscreen($raMain);
      }
    },
  },
  mounted() {
    this.fsObj = document.addEventListener('fullscreenchange', () => {
      // document.fullscreenEnabled || window.fullScreen ||
      // document.webkitIsFullScreen || document.msFullscreenEnabled
      if (document.fullscreenElement) {
        console.log('进入全屏');
      } else {
        console.log('退出全屏');
        this.$store.dispatch('setFullScreen', false);
      }
    });
  },
  methods: {
    exitFullscreen,
  },
  beforeDestroy() {
    document.removeEventListener('fullscreenchange', this.fsObj);
    this.fsObj = null;
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/scss/var.scss";

.ra-main {
  flex: 1;
  background: $mainBg;
  padding: 30px;
  color: $footerBg;
  .icon-contract {
    position:fixed;
    top: 10px ;
    right: 10px;
    font-size: 20px !important;
    color: #313135;
  }

}
</style>
