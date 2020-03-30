<template>
  <div class="ra-collapse">
    <div class="title" @click="boxshow=!boxshow">
      <ion-icon
        :name="titleIcon"
      ></ion-icon>
      <slot name="title-text" class="title-text">
        {{title}}
      </slot>
    </div>
    <transition name="draw">
      <div
        class="box"
        v-show="boxshow"
      >
        <slot>fadsmkdasfkl</slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ra-collapse',
  props: {
    title: {
      type: String,
      default: 'Header',
    },
  },
  computed: {
    titleIcon() {
      if (!this.boxshow) {
        return 'caret-forward-outline';
      }
      return 'caret-down-outline';
    },
  },
  data() {
    return {
      boxshow: true,
    };
  },
};
</script>

<style lang="scss" scoped>


.title {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  cursor: default;
  ion-icon {
    margin-right: 10px;
  }
}
// 基本动画
.box {
  height: 200px;
  width: 200px;
}
.draw-enter-active,
.draw-leave-active {
  // transition: all 1s ease;
  transition: all 0.3s ease;
}
.draw-enter,
.draw-leave-to {
  height: 0;
  opacity: 0;
}
</style>
