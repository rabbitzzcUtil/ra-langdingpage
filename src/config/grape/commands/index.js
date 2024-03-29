/* eslint-disable no-restricted-globals */
/**
 * grape command 配置
 */
import openImport from './openImport';
import {
  cmdImport,
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile,
  cmdClear,
} from '../consts';

export default (editor, config) => {
  const cm = editor.Commands;
  const txtConfirm = config.textCleanCanvas;

  cm.add(cmdImport, openImport(editor, config));
  cm.add(cmdDeviceDesktop, (e) => e.setDevice('Desktop'));
  cm.add(cmdDeviceTablet, (e) => e.setDevice('Tablet'));
  cm.add(cmdDeviceMobile, (e) => e.setDevice('Mobile portrait'));
  // 清除样式
  cm.add(cmdClear, (e) => confirm(txtConfirm) && e.runCommand('core:canvas-clear'));
};
