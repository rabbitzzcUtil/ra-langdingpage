<template>
  <div class="ra-grape">
    <div
      id="gjs"
      style="height:0px; overflow:hidden;"
    >
      <div
        class="panel"
        style="text-align:center;line-height:100px;color:#ecfbfc;
    background: url(http://h1.ioliu.cn/bing/WhirlpoolFinland_ZH-CN6473757145_1920x1080.jpg);
    height: 100vh;padding-top:200px;
    "
      >
        <h1
          class="welcome"
          style="margin: 0;"
        >
          Drag & Drop Layout, Private Custom Website~<br>
          私人订制
        </h1>
        <p class="big-title">
          <span>Design by Vue + GrapeJs + Electron</span>
          <a
            href="https://github.com/ra-utility/ra-langdingpage"
            target="__blank"
            style="vertical-align: sub; margin-left:10px;"
          >
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              width="20px;height:20px"
            >
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable max-len */
import { mapGetters, mapActions } from 'vuex';
import grapesjs from 'grapesjs';
import editorConfig from '@/config/grape/index';

// 引入 grape 默认样式
import 'grapesjs/dist/css/grapes.min.css';
import '@/style/scss/grape.scss';

export default {
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'editor',
    ]),
  },
  mounted() {
    // 引入预设
    editorConfig();
    grapesjs.init({
      height: '100%',
      showOffsets: 1,
      noticeOnUnload: 0,
      container: '#gjs',
      fromElement: true,

      // 导入预设插件，使用默认配置
      plugins: ['gjs-preset-webpage'],
      pluginsOpts: {
        'gjs-preset-webpage': {},
      },
      storageManager: {
        id: 'gjs-',
        type: 'local',
        autosave: 1,
        autoload: 1,
        stepsBeforeSave: 1,
        storeComponents: 1,
        storeStyles: 1,
        storeHtml: 1,
        storeCss: 1,
      },
      styleManager: null,
    });
  },
  methods: mapActions([
    'setEditor',
  ]),
};
</script>

<style lang="scss" scoped>
.ra-grape {
  height: 100vh;

  .logo {
    width: 70px;
    height: 70px;
    vertical-align: middle;
  }

  .logo path {
    pointer-events: none;
    fill: none;
    stroke-linecap: round;
    stroke-width: 7;
    stroke: #fff;
  }

  .big-title {
    text-align: center;
    font-size: 3.5rem;
  }
}
</style>
