import emptyImage from "../assets/Logo@X2.png";
import moment from "moment";
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

//API
//<Modal v-show="modalSwitch" @handleCloseModal="closeModal"/>
//控制modal開關與畫面鎖定
export const modalController = {
  data() {
    return {
      modalSwitch: false,
    };
  },
  methods: {
    openModal() {
      this.modalSwitch = true;
      this.lockView();
    },
    closeModal() {
      this.modalSwitch = false;
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
  },
};
