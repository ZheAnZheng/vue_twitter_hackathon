import Vue from "vue";
import Vuex from "vuex";

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
      state.currentUser = { ...payload.currentUser };
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
    setCurrentUser({ commit }, payload) {
      commit("setCurrentUser", payload);
    },
  },
  modules: {},
});
