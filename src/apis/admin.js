import { apiHelper } from "../utils/helper";

export default {
  users: {
    signUp({ fromData }) {
      return apiHelper.post("/users", { fromData });
    },
    getAll() {
      return apiHelper.get("/admin/users");
    },
    login({ email, password }) {
      return apiHelper.post("/users/login", { email, password })
    }
  },
  tweets: {
    getAll() {
      return apiHelper.get("/admin/tweets");
    },
    delete({ tweetId }) {
      return apiHelper.delete(`/admin/tweets/${tweetId}`);
    },
  },
};
