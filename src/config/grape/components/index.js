/**
 * grape 组件配置
 */

/* eslint-disable no-unused-vars */
export default (editor, config = {}) => {
  // 获取示例
  const domc = editor.DomComponents;

  // 获取组件的类型，【默认组件，自定义组件】
  const defaultType = domc.getType('default');

  // 对象组件类型定义
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
};
