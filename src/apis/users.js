import { apiHelper } from "../utils/helper";

export default {
  getCurrentUser() {
    return apiHelper.get("/users/get-current-user");
  },
  get({ userId }) {
    return apiHelper.get(`/users/${userId}`);
  },
  getTop() {
    return apiHelper.get("/users/top");
  },
  getTweets({ userId }) {
    return apiHelper.get(`/users/${userId}/tweets`);
  },
  getReplied({ userId }) {
    return apiHelper.get(`/users/${userId}/replied_tweets`);
  },
  getlikeTweets({ userId }) {
    return apiHelper.get(`/users/${userId}/likes`);
  },
  update({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData);
  },
};
