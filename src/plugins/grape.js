/* eslint-disable no-param-reassign */
import Vue from 'vue';

import 'grapesjs/dist/css/grapes.min.css';
import grapes from 'grapesjs';


const Plugin = {
  install(_Vue) {
    // alias
    _Vue.$grapes = grapes;
    _Vue.prototype.$grapes = grapes;
  },
};

Vue.use(Plugin);

export default Plugin;
