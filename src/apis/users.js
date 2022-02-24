import { apiHelper } from "../utils/helper";

export const usersAPI = {
  get({ userId }) {
    return apiHelper.get(`/users/${userId}`);
  },
  getTweets({ userId }) {
    return apiHelper.get(`/users/${userId}/tweets`);
  },
  getReplied({ userId }) {
    return apiHelper.get(`/users/${userId}/replied_tweets`);
  },
  getlikedTweets({ userId }) {
    return apiHelper.get(`/users/${userId}/likes`);
  },
};
