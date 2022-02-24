import { apiHelper } from "../utils/helper";

export default {
  getAll() {
    return apiHelper.get("/tweets");
  },
  createTweet({ formData }) {
    return apiHelper.post("/tweets", { formData });
  },
  get({ tweetId }) {
    return apiHelper.get(`/tweets/${tweetId}`);
  },
  getReplies({ tweetId }) {
    return apiHelper.get(`/tweets/${tweetId}/replies`);
  },
  createReply({ tweetId, formData }) {
    return apiHelper.post(`/tweets/${tweetId}`, { formData });
  },
  addLike({ tweetId }) {
    return apiHelper.post(`/tweets/${tweetId}`, null);
  },
  deleteLike({ tweetId }) {
    return apiHelper.post(`/tweets/${tweetId}`, null);
  },
};
