<template>
  <div
    class="sidebar-menu"
    :style="sidebarMenuStyle"
  >
      <div class="sidebar-menu-header">
        <transition>
          <ion-icon
            :name="open ? 'ellipsis-horizontal-outline' :'ellipsis-vertical-outline'"
            class="open-icon"
            @click="openChange"
            :style="openIconStyle"
          ></ion-icon>
        </transition>
      </div>
    <slot name="header" v-if="open">
      <div>{{title}}</div>
      <hr>
    </slot>
    <slot name="content" v-if="open">
      <div class="sidebar-menu-content">
        展示模块区域
      </div>
    </slot>
    <slot name="bottom" v-if="open">
      展示一些bottom细节
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 300,
    },
    left: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '头部',
    },
  },
  watch: {
    open(val) {
      if (val) {
        this.dwidth = this.width;
      } else {
        this.dwidth = 50;
      }
    },
  },
  data() {
    return {
      open: true,
      dwidth: this.width,
    };
  },
  computed: {
    sidebarMenuStyle() {
      return {
        width: `${this.dwidth}px`,
        // height: document.body.offsetHeight || document.documentElement.clientHeight,
        left: this.left ? 0 : 'none',
        right: !this.left ? 0 : 'none',
        'border-left': this.left ? 'none' : '1px solid #8f8f92',
        'border-right': !this.left ? 'none' : '1px solid #8f8f92',

      };
    },
    openIconStyle() {
      return {
        float: this.left ? 'right' : 'left',
      };
    },
  },
  methods: {
    openChange() {
      this.open = !this.open;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/scss/mixin.scss";
.sidebar-menu {
  width: 300px;
  @include base-background();
  padding: 10px;
  transition: width 0.4s ease-in-out,background 0.4s ease-in-out;
  @include text-color();
  .sidebar-menu-header {
    .open-icon {
      cursor: pointer;
    }

    margin-bottom: 30px;
  }
  .sidebar-menu-content {
    height: 60%;
  }
}
</style>
