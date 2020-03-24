/* eslint-disable import/extensions */
import Vue from 'vue';
import App from './App.vue';

import '@/plugins/vueSidebarMenu.js';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
