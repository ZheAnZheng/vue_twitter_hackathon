import Vue from "vue";
import Vuex from "vuex";
import usersAPI from "../apis/users.js";
import { toast } from "../utils/helper.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {},
    adminUser: {
      id: -1,
      name: "",
      account: "",
      avatar: "",
      role: "user"
    },
    isAuthenticated: "false",
    token: "",
  },
  mutations: {
    setCurrentUser(state, payload) {
      state.currentUser = { ...payload.data };
    },
    setAdminUser(state, adminUser) {
      state.adminUser = {
        ...state.adminUser,
        ...adminUser
      }

      state.isAuthenticated = true
      state.token = localStorage.getItem("token")
    },
    revokeAuthentication(state) {
      state.adminUser = {}
      localStorage.removeItem('token')
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
