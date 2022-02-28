import Vue from "vue";
import Vuex from "vuex";
import usersAPI from "../apis/users.js";
import { toast } from "../utils/helper.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {},
    isAuthenticated: false,
    token: "",
  },
  mutations: {
    setCurrentUser(state, payload) {
      state.currentUser = { ...payload };
      state.isAuthenticated = true;
      state.token = localStorage.getItem("token");
    },

    revokeAuthentication(state) {
      state.currentUser = {};
      state.token = "";
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
    //重新整理會導致store資料消失，所以儲存在localStorage
    saveState(state) {
      console.log("in");
      localStorage.setItem("STATE_KEY", JSON.stringify(state));
    },
    loadState(state) {
      const previousState = JSON.parse(localStorage.getItem("STATE_KEY"));
      console.log(previousState);
      state.currentUser = {
        ...previousState.currentUser,
      };
      state.isAuthenticated = previousState.isAuthenticated;
      state.token = previousState.token;
    },
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser();
        commit("setCurrentUser", data);
      } catch (e) {
        console.log(e);
        toast.fireError("無法讀取...");
      }
    },
    setCurrentUser({ commit }, payload) {
      commit("setCurrentUser", payload);
      commit("saveState");
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
  },
  modules: {},
});
