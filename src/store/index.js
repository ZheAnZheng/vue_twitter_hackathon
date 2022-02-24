import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {},
  },
  mutations: {
    setCurrentUser(state, payload) {
      state.currentUser = { ...payload.currentUser };
    },
  },
  actions: {
    setCurrentUser({ commit }, payload) {
      commit("setCurrentUser", payload);
    },
  },
  modules: {},
});
