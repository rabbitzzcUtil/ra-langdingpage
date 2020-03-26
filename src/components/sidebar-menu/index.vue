<template>
  <div
    class="sidebar-menu"
    :style="sidebarMenuStyle"
  >
    <slot name="header">
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
    </slot>
    <slot name="content">
      <div class="sidebar-menu-content">
        展示模块区域
      </div>
    </slot>
    <slot name="bottom">
      2
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
.sidebar-menu {
  width: 300px;
  background: #1c1c21;
  color: #8f8f92;
  padding: 10px;
  transition: width 0.4s ease-in-out;
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
