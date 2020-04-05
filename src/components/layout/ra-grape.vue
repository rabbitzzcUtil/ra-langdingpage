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
    const editors = grapesjs.init({
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
      // styleManager: {
      //   sectors: [{
      //     name: 'General',
      //     open: false,
      //     buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom'],
      //   }, {
      //     name: 'Dimension',
      //     open: false,
      //     buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
      //   }, {
      //     name: 'Typography',
      //     open: false,
      //     buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow'],
      //     properties: [{
      //       property: 'text-align',
      //       list: [{
      //         value: 'left',
      //         className: 'fa fa-align-left',
      //       },
      //       {
      //         value: 'center',
      //         className: 'fa fa-align-center',
      //       },
      //       {
      //         value: 'right',
      //         className: 'fa fa-align-right',
      //       },
      //       {
      //         value: 'justify',
      //         className: 'fa fa-align-justify',
      //       },
      //       ],
      //     }],
      //   }, {
      //     name: 'Decorations',
      //     open: false,
      //     buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
      //   }, {
      //     name: 'Extra',
      //     open: false,
      //     buildProps: ['opacity', 'transition', 'perspective', 'transform'],
      //     properties: [{
      //       type: 'slider',
      //       property: 'opacity',
      //       defaults: 1,
      //       step: 0.01,
      //       max: 1,
      //       min: 0,
      //     }],
      //   }, {
      //     name: 'Flex',
      //     open: false,
      //     properties: [{
      //       name: 'Flex Container',
      //       property: 'display',
      //       type: 'select',
      //       defaults: 'block',
      //       list: [{
      //         value: 'block',
      //         name: 'Disable',
      //       }, {
      //         value: 'flex',
      //         name: 'Enable',
      //       }],
      //     }, {
      //       name: 'Flex Parent',
      //       property: 'label-parent-flex',
      //     }, {
      //       name: 'Direction',
      //       property: 'flex-direction',
      //       type: 'radio',
      //       defaults: 'row',
      //       list: [{
      //         value: 'row',
      //         name: 'Row',
      //         className: 'icons-flex icon-dir-row',
      //         title: 'Row',
      //       }, {
      //         value: 'row-reverse',
      //         name: 'Row reverse',
      //         className: 'icons-flex icon-dir-row-rev',
      //         title: 'Row reverse',
      //       }, {
      //         value: 'column',
      //         name: 'Column',
      //         title: 'Column',
      //         className: 'icons-flex icon-dir-col',
      //       }, {
      //         value: 'column-reverse',
      //         name: 'Column reverse',
      //         title: 'Column reverse',
      //         className: 'icons-flex icon-dir-col-rev',
      //       }],
      //     }, {
      //       name: 'Wrap',
      //       property: 'flex-wrap',
      //       type: 'radio',
      //       defaults: 'nowrap',
      //       list: [{
      //         value: 'nowrap',
      //         title: 'Single line',
      //       }, {
      //         value: 'wrap',
      //         title: 'Multiple lines',
      //       }, {
      //         value: 'wrap-reverse',
      //         title: 'Multiple lines reverse',
      //       }],
      //     }, {
      //       name: 'Justify',
      //       property: 'justify-content',
      //       type: 'radio',
      //       defaults: 'flex-start',
      //       list: [{
      //         value: 'flex-start',
      //         className: 'icons-flex icon-just-start',
      //         title: 'Start',
      //       }, {
      //         value: 'flex-end',
      //         title: 'End',
      //         className: 'icons-flex icon-just-end',
      //       }, {
      //         value: 'space-between',
      //         title: 'Space between',
      //         className: 'icons-flex icon-just-sp-bet',
      //       }, {
      //         value: 'space-around',
      //         title: 'Space around',
      //         className: 'icons-flex icon-just-sp-ar',
      //       }, {
      //         value: 'center',
      //         title: 'Center',
      //         className: 'icons-flex icon-just-sp-cent',
      //       }],
      //     }, {
      //       name: 'Align',
      //       property: 'align-items',
      //       type: 'radio',
      //       defaults: 'center',
      //       list: [{
      //         value: 'flex-start',
      //         title: 'Start',
      //         className: 'icons-flex icon-al-start',
      //       }, {
      //         value: 'flex-end',
      //         title: 'End',
      //         className: 'icons-flex icon-al-end',
      //       }, {
      //         value: 'stretch',
      //         title: 'Stretch',
      //         className: 'icons-flex icon-al-str',
      //       }, {
      //         value: 'center',
      //         title: 'Center',
      //         className: 'icons-flex icon-al-center',
      //       }],
      //     }, {
      //       name: 'Flex Children',
      //       property: 'label-parent-flex',
      //     }, {
      //       name: 'Order',
      //       property: 'order',
      //       type: 'integer',
      //       defaults: 0,
      //       min: 0,
      //     }, {
      //       name: 'Flex',
      //       property: 'flex',
      //       type: 'composite',
      //       properties: [{
      //         name: 'Grow',
      //         property: 'flex-grow',
      //         type: 'integer',
      //         defaults: 0,
      //         min: 0,
      //       }, {
      //         name: 'Shrink',
      //         property: 'flex-shrink',
      //         type: 'integer',
      //         defaults: 0,
      //         min: 0,
      //       }, {
      //         name: 'Basis',
      //         property: 'flex-basis',
      //         type: 'integer',
      //         units: ['px', '%', ''],
      //         unit: '',
      //         defaults: 'auto',
      //       }],
      //     }, {
      //       name: 'Align',
      //       property: 'align-self',
      //       type: 'radio',
      //       defaults: 'auto',
      //       list: [{
      //         value: 'auto',
      //         name: 'Auto',
      //       }, {
      //         value: 'flex-start',
      //         title: 'Start',
      //         className: 'icons-flex icon-al-start',
      //       }, {
      //         value: 'flex-end',
      //         title: 'End',
      //         className: 'icons-flex icon-al-end',
      //       }, {
      //         value: 'stretch',
      //         title: 'Stretch',
      //         className: 'icons-flex icon-al-str',
      //       }, {
      //         value: 'center',
      //         title: 'Center',
      //         className: 'icons-flex icon-al-center',
      //       }],
      //     }],
      //   },

      //   ],

      // },
    });
    console.log(editors);
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
