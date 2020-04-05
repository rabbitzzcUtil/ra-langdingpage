/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
/**
 * 常量
 */

import grapesjs from 'grapesjs';
import pluginBlocks from 'grapesjs-blocks-basic';
import pluginNavbar from 'grapesjs-navbar';
import pluginCountdown from 'grapesjs-component-countdown';
import pluginForms from 'grapesjs-plugin-forms';
import pluginExport from 'grapesjs-plugin-export';
import pluginAviary from 'grapesjs-aviary';
import pluginFilestack from 'grapesjs-plugin-filestack';

import commands from './commands';
import blocks from './blocks';
import components from './components';
import panels from './panels';
import styles from './styles';

export default () => {
  grapesjs.plugins.add('gjs-preset-webpage', (editor, opts = {}) => {
    const config = opts;

    const defaults = {
      // 块 配置
      blocks: ['link-block', 'quote', 'text-basic'],

      modalImportTitle: '导入(Import)',

      modalImportButton: '导入(Import)',

      // Import description inside import modal
      modalImportLabel: '请导入 html',

      // 导入配置
      modalImportContent: '',

      importViewerOptions: {},

      // 清空样式
      textCleanCanvas: '确定重置该页面么?',

      showStylesOnChange: 1,

      textGeneral: '基本样式(General)',

      textLayout: '布局(Layout)',

      textTypography: '字体(Typography)',

      textDecorations: '字体装饰(Decorations)',

      textExtra: '更多(Extra)',

      // 使用自定义样式管理
      customStyleManager: [],

      blocksBasicOpts: {},

      navbarOpts: {},

      countdownOpts: {},

      formsOpts: {},

      exportOpts: {},

      aviaryOpts: 0,

      filestackOpts: 0,
    };

    // Load defaults
    for (const name in defaults) {
      if (!(name in config)) { config[name] = defaults[name]; }
    }

    const {
      blocksBasicOpts,
      navbarOpts,
      countdownOpts,
      formsOpts,
      exportOpts,
      aviaryOpts,
      filestackOpts,
    } = config;

    // 导入插件配置
    blocksBasicOpts && pluginBlocks(editor, blocksBasicOpts);
    navbarOpts && pluginNavbar(editor, navbarOpts);
    countdownOpts && pluginCountdown(editor, countdownOpts);
    formsOpts && pluginForms(editor, formsOpts);
    exportOpts && pluginExport(editor, exportOpts);
    aviaryOpts && pluginAviary(editor, aviaryOpts);
    filestackOpts && pluginFilestack(editor, filestackOpts);

    /** 自定义区域 */
    // 组件管理器导入
    components(editor, config);

    // 块管理器导入
    blocks(editor, config);

    // 命令管理器导入
    commands(editor, config);

    // 面板管理器导入
    panels(editor, config);

    // 样式管理器导入
    styles(editor, config);
  });
};
