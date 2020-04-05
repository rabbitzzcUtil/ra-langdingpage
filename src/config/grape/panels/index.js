/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
// 控制面板配置
import {
  cmdImport,
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile,
  cmdClear,
} from '../consts';

export default (editor, config) => {
  const pn = editor.Panels;
  const eConfig = editor.getConfig();
  const swv = 'sw-visibility';
  const expt = 'export-template';
  const osm = 'open-sm';
  const otm = 'open-tm';
  const ola = 'open-layers';
  const obl = 'open-blocks';
  const ful = 'fullscreen';
  const prv = 'preview';

  eConfig.showDevices = 0;


  // 重置面板
  pn.getPanels().reset([{
    id: 'commands',
    buttons: [{}],
  }, {
    id: 'options',
    buttons: [{
      id: swv,
      command: swv,
      context: swv,
      className: 'fa fa-square-o',
    }, {
      id: prv,
      context: prv,
      command: (e) => e.runCommand(prv),
      className: 'fa fa-eye',
    }, {
      id: ful,
      command: ful,
      context: ful,
      className: 'fa fa-arrows-alt',
    }, {
      id: expt,
      className: 'fa fa-code',
      command: (e) => e.runCommand(expt),
    }, {
      id: 'undo',
      className: 'fa fa-undo',
      command: (e) => e.runCommand('core:undo'),
    }, {
      id: 'redo',
      className: 'fa fa-repeat',
      command: (e) => e.runCommand('core:redo'),
    }, {
      id: cmdImport,
      className: 'fa fa-download',
      command: (e) => e.runCommand(cmdImport),
    }, {
      id: cmdClear,
      className: 'fa fa-trash',
      command: (e) => e.runCommand(cmdClear),
    }],
  }, {
    id: 'views',
    buttons: [{
      id: osm,
      command: osm,
      active: true,
      className: 'fa fa-paint-brush',
    }, {
      id: otm,
      command: otm,
      className: 'fa fa-cog',
    }, {
      id: ola,
      command: ola,
      className: 'fa fa-bars',
    }, {
      id: obl,
      command: obl,
      className: 'fa fa-th-large',
    }],
  }]);

  // Add devices buttons
  const panelDevices = pn.addPanel({
    id: 'devices-c',
  });
  panelDevices.get('buttons').add([{
    id: cmdDeviceDesktop,
    command: cmdDeviceDesktop,
    className: 'fa fa-desktop',
    active: 1,
  }, {
    id: cmdDeviceTablet,
    command: cmdDeviceTablet,
    className: 'fa fa-tablet',
  }, {
    id: cmdDeviceMobile,
    command: cmdDeviceMobile,
    className: 'fa fa-mobile',
  }]);

  const openBl = pn.getButton('views', obl);
  editor.on('load', () => openBl && openBl.set('active', 1));

  // 在组件更改中 切换到 样式管理器
  config.showStylesOnChange && editor.on('component:selected', () => {
    const openSmBtn = pn.getButton('views', osm);
    const openLayersBtn = pn.getButton('views', ola);

    // 不存在图层或者图层打开，默认选择第一个
    if ((!openLayersBtn || !openLayersBtn.get('active')) && editor.getSelected()) {
      openSmBtn && openSmBtn.set('active', 1);
    }
  });
};
