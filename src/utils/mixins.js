import moment from "moment";
import followshipAPI from "../apis/followships.js";
import { toast } from "../utils/helper.js";
// 將所有的filter放在mixins中
export const Filters = {
  // 帳號前方加上@的filter
  filters: {
    addAtFilter(account) {
      return `@${account}`;
    },
    // 跟隨中後方加上單位的filter
    addFollowingUnitFilter(num) {
      return `${num}個`;
    },
    // 跟隨者後方加上單位的filter
    addFollowerUnitFilter(num) {
      return `${num}位`;
    },
  },
};

export const activeLinkHandler = {
  methods: {
    getClass(route) {
      if (this.$route.name === route) {
        return "linking";
      } else {
        return "link";
      }
    },
  },
};

export const emptyImageFilter = {
  filters: {
    imageFilter(val) {
      if (!val) {
        return "https://i.imgur.com/hAKcS3E.jpg";
      } else {
        return val;
      }
    },
    coverFilter(val) {
      if (!val) {
        return "https://i.imgur.com/ju5wFt3.jpg";
      } else {
        return val;
      }
    },
  },
};
export const dateFilter = {
  filters: {
    fromNow(val) {
      return moment(val).fromNow();
    },
  },
};

//提供給ProfilePage 與 FollowPage使用
export const userProvider = {
  provide() {
    //vue 2 的provide與inject並不支援reactive也不建議，Vue3之後才會有computed使provide可以reactive，
    //但以下方法能夠使provide變成reactive，目的是讓user資料不需要透過UserProfile.vue經過長props傳遞到Header.vue
    const user = {};
    Object.defineProperty(user, "data", {
      enumerable: true,
      get: () => this.user,
    });
    return {
      profileUser: user,
    };
  },
};

//API
//<Modal v-show="modalSwitch" @handleCloseModal="closeModal"/>
//控制modal開關與畫面鎖定
export const modalController = {
  data() {
    return {
      modalSwitch: false,
      replyModalSwitch: false,
      tweetModalSwitch: false,
      modalTweets: {},
    };
  },
  methods: {
    openModal(name) {
      this.toggleSwitch(name);
      this.lockView();
    },
    closeModal(name) {
      this.toggleSwitch(name);
      this.unlickView();
    },
    unlickView() {
      const body = document.querySelector("body");

      body.style.overflow = "auto";
    },
    lockView() {
      const body = document.querySelector("body");

      body.style.overflow = "hidden";
    },
    toggleSwitch(name) {
      switch (name) {
        case "profileEdit":
          this.modalSwitch = !this.modalSwitch;
          return;
        case "reply":
          this.replyModalSwitch = !this.replyModalSwitch;
          return;
        case "tweet":
          this.tweetModalSwitch = !this.tweetModalSwitch;
          return;
      }
    },
    handleOpenModal(payload) {
      this.modalTweets = {
        ...payload.tweet,
      };

      this.openModal("reply");
    },
  },
};

//profilePage PopularList followList都會使用到追蹤功能
export const followshipHandler = {
  data() {
    return {
      isProcessing: false,
    };
  },
  methods: {
    async addFollowing(userId, mode) {
      try {
        this.isProcessing = true;
        const { data } = await followshipAPI.addFollowing({
          userId,
        });

        if (data.status !== "success") {
          throw Error(data.message);
        }
        if (mode === "popular") {
          this.togglePopular(userId);
        } else if (mode === "followList") {
          this.toggleFollowList(userId);
        } else if (mode === "profile") {
          this.toggleProfile();
        }
        this.isProcessing = false;
      } catch (e) {
        console.log(e);
        toast.fireError("追隨失敗");
        this.isProcessing = false;
      }
    },
    async deleteFollowing(followingId, mode) {
      try {
        this.isProcessing = true;
        const { data } = await followshipAPI.deleteFollowing({
          followerId: followingId,
          followingId: this.currentUser.id,
        });
        if (data.status !== "success") {
          throw Error(data.message);
        }
        if (mode === "popular") {
          this.togglePopular(followingId);
        } else if (mode === "followList") {
          this.toggleFollowList(followingId);
        } else if (mode === "profile") {
          this.toggleProfile();
        }
        this.isProcessing = false;
      } catch (e) {
        console.log(e);
        toast.fireError("移除追隨失敗");
        this.isProcessing = false;
      }
    },
    togglePopular(userId) {
      this.showedUsers = this.showedUsers.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isFollowed: !user.isFollowed,
          };
        } else {
          return user;
        }
      });
    },
    toggleFollowList(userId) {
      this.users = this.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isFollowed: !user.isFollowed,
          };
        } else {
          return user;
        }
      });
    },
    toggleProfile() {
      this.user.isFollowed = !this.user.isFollowed;
    },
  },
};
