import emptyImage from "../assets/Logo@X2.png";
import moment from "moment";
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
        return emptyImage;
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
