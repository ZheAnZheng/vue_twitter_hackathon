import { apiHelper } from "../utils/helper";

//folloer追蹤的人
//following 被追中得人
export default {
  //id 對象
  addFollowing({ userId }) {
    return apiHelper.post("/followships", { id: userId });
  },
  //id 被退追者
  //following自己
  deleteFollowing({ followerId, followingId }) {
    return apiHelper.delete(`/followships/${followerId}`, { id: followingId });
  },
};
