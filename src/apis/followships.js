import { apiHelper } from "../utils/helper";

export default {
  addFollowing({ id, followerId }) {
    return apiHelper.post("/followships", { id, followerId });
  },
  deleteFollowing({ followingId }) {
    return apiHelper.delete("/followships", followingId);
  },
};
