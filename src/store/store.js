import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    theme: 'default-theme',
  },
  getters: {
    getTheme(state) {
      return state.theme;
    },
  },
  actions: {
    setThemeName({ commit }, name) {
      commit('setTheme', name);
    },
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme;
    },
  },
});

export default store;
