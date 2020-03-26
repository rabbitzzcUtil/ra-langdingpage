/* eslint-disable import/extensions */
import Vue from 'vue';
import App from './App.vue';

import '@/plugins/vueSidebarMenu.js';


Vue.config.productionTip = false;

// 隐藏对、ion 的报错
Vue.config.ignoredElements = [/^ion-/];

new Vue({
  render: (h) => h(App),
}).$mount('#app');
