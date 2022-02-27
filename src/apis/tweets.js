import { apiHelper } from "../utils/helper";

export default {
  getAll() {
    return apiHelper.get("/tweets");
  },
  createTweet({ description }) {
    return apiHelper.post("/tweets", { description });
  },
  get({ tweetId }) {
    return apiHelper.get(`/tweets/${tweetId}`);
  },
  getReplies({ tweetId }) {
    return apiHelper.get(`/tweets/${tweetId}/replies`);
  },
  createReply({ tweetId, comment }) {
    return apiHelper.post(`/tweets/${tweetId}/replies`, { comment });
  },
  addLike({ tweetId }) {
    return apiHelper.post(`/tweets/${tweetId}/like`, null);
  },
  deleteLike({ tweetId }) {
    return apiHelper.post(`/tweets/${tweetId}/unlike`, null);
  },
};
