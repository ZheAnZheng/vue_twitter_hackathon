import { apiHelper } from "../utils/helper";

export default {
  users: {
    signUp({ account, email, name, password, checkPassword }) {
      return apiHelper.post("/users", {
        account,
        email,
        name,
        password,
        checkPassword,
      });
    },
    getAll() {
      return apiHelper.get("/admin/users");
    },
    login({ account, password }) {
      return apiHelper.post("/users/login", { account, password });
    },
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
