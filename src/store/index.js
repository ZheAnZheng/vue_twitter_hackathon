import Vue from "vue";
import Vuex from "vuex";
import usersAPI from "../apis/users.js";
import { toast } from "../utils/helper.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {},
  },
  mutations: {
    setCurrentUser(state, payload) {
      state.currentUser = { ...payload.data };
    },
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser();

        commit("setCurrentUser", { data });
      } catch (e) {
        console.log(e);
        toast.fireError("無法讀取...");
      }
    },
  },
  modules: {},
});
