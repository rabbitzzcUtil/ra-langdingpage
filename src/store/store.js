import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    theme: 'default-theme',
    fullscreen: false,
  },
  getters: {
    getTheme(state) {
      return state.theme;
    },
    getFullscreen(state) {
      return state.fullscreen;
    },
  },
  actions: {
    setThemeName({ commit }, name) {
      commit('setTheme', name);
    },
    setFullScreen({ commit }, name) {
      commit('setFullScreen', name);
    },
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme;
    },
    setFullScreen(state, fullscreen) {
      state.fullscreen = fullscreen;
    },
  },
});

export default store;
