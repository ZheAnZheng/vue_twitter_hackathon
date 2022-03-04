export default {
  //當用來同步profilePage與propularList 追蹤資訊
  namespaced: true,
  state() {
    return {
      followData: {},
    };
  },
  getters: {},
  mutations: {
    update(state, payload) {
      state.followData = { ...payload };
    },
  },
  actions: {},
};
