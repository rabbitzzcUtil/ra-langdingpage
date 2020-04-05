import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = new Vuex.Store({
  /**
   * theme 页面主题
   * fullscreen 是否全屏
   * editor grape 对象
   */
  state: {
    theme: 'default-theme',
    fullscreen: false,
    editor: null,
  },
  getters: {
    getTheme(state) {
      return state.theme;
    },
    getFullscreen(state) {
      return state.fullscreen;
    },
    getEditor(state) {
      return state.editor;
    },
  },
  actions: {
    setThemeName({ commit }, name) {
      commit('setTheme', name);
    },
    setFullScreen({ commit }, name) {
      commit('setFullScreen', name);
    },
    setEditor({ commit }, name) {
      commit('setEditor', name);
    },
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme;
    },
    setFullScreen(state, fullscreen) {
      state.fullscreen = fullscreen;
    },
    setEditor(state, editor) {
      console.log(editor);
      state.editor = editor;
    },
  },
});

export default store;
