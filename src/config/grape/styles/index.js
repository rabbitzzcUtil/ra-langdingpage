/**
 * grape 样式管理器配置
 * * 默认样式导入
 * * 自定义样式导入
 */
export default (editor, config) => {
  const sm = editor.StyleManager;
  const csm = config.customStyleManager;

  // 样式管理器
  // 获取样式并重置
  sm.getSectors().reset(csm && csm.length ? csm : [{
    // 基本样式
    name: config.textGeneral,
    open: false,
    buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom'],
  }, {
    name: config.textLayout,
    open: false,
    buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
  }, {
    name: config.textTypography,
    open: false,
    buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow'],
    properties: [{
      property: 'text-align',
      list: [
        { value: 'left', className: 'fa fa-align-left' },
        { value: 'center', className: 'fa fa-align-center' },
        { value: 'right', className: 'fa fa-align-right' },
        { value: 'justify', className: 'fa fa-align-justify' },
      ],
    }],
  }, {
    name: config.textDecorations,
    open: false,
    buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
  }, {
    name: config.textExtra,
    open: false,
    buildProps: ['transition', 'perspective', 'transform'],
  }]);
};
