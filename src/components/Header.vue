<template>
  <header
    :class="{ 'setting-layout-header': isSettingLayout }"
    v-show="!isLoading"
  >
    <div v-show="isHeaderReady" class="header-content">
     <HeaderMenu/>
      <div class="arrow" v-show="isShowArrow" @click="$router.back()">
        <svg
          width="17"
          height="14"
          viewBox="0 0 17 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 5.99988H3.41399L7.70699 1.70687C8.09699 1.31687 8.09699 0.683875 7.70699 0.292875C7.31699 -0.0981249 6.68399 -0.0971249 6.29299 0.292875L0.292988 6.29288C-0.0970117 6.68288 -0.0970117 7.31588 0.292988 7.70687L6.29299 13.7069C6.48799 13.9019 6.74299 13.9999 6.99999 13.9999C7.25699 13.9999 7.51199 13.9019 7.70699 13.7069C8.09699 13.3169 8.09699 12.6839 7.70699 12.2929L3.41399 7.99988H16C16.553 7.99988 17 7.55288 17 6.99988C17 6.44688 16.553 5.99988 16 5.99988Z"
            fill="black"
          />
        </svg>
      </div>
      <div v-if="isUser" class="user-wrapper">
        <div class="name">{{ userTitle }}</div>
        <div class="info">{{ userTweetCount }}推文</div>
      </div>
      <span v-else class="title">{{ title }}</span>
    </div>
  </header>
</template>

<script>
import HeaderMenu from "./HeaderMenu.vue"

const userRouteName = [
  "userTweets",
  "replyTweets",
  "likeTweets",
  "following",
  "followed",
];
const indexRouteName = ["main"];
const settingRouteName = ["setting"];

export default {
  props: {
    isReady: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {

    HeaderMenu
  },
  created() {
    const currentRouteName = this.$route.name;
    const profileRoute = [
      "userTweets",
      "replyTweets",
      "likeTweets",
      "followed",
      "following",
    ];
    
    if (!profileRoute.includes(currentRouteName)) {
      this.isHeaderReady = true;
    }
    this.handleTitleByRoute(currentRouteName);
  },
  inject: {
    profileUser: {
      from: "profileUser",
      default: {},
    },
  },
  data() {
    return {
      title: "",
      userTitle: "",
      userTweetCount: 0,
      isShowArrow: false,
      isUser: false,
      isSettingLayout: false,
      isLoading: true,
      isHeaderReady: false,
    };
  },
  watch: {
    $route(to) {
      this.handleTitleByRoute(to.name);
    },
    profileUser: {
      handler: function (val) {
        const { Tweets, name } = val.data;
        this.userTitle = name;
        this.userTweetCount = Tweets.length;
      },
      deep: true,
    },
    title(val) {
      return val;
    },
    isReady(val) {
      this.isHeaderReady = val;
    },
  },
  methods: {
    handleTitleByRoute(routeName) {
      if (userRouteName.includes(routeName)) {
        this.isUser = true;
        this.isShowArrow = true;
      } else if (indexRouteName.includes(routeName)) {
        this.title = "首頁";
      } else if (settingRouteName.includes(routeName)) {
        this.title = "帳戶設定";
        this.isSettingLayout = true;
      } else if (routeName === "admin-users") {
        this.title = "使用者列表";
        this.isSettingLayout = true;
      } else if (routeName === "admin-tweets") {
        this.title = "推文清單";
        this.isSettingLayout = true;
      } else if (routeName === "tweetStory") {
        this.isShowArrow = true;
        this.title = "推文";
      }
      this.isLoading = false;
    },

  },
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;

  z-index: 999;

  height: 55px;
  width: 100%;
  padding-left: 15px;
  background-color: var(--white-text-color);
  border: 1px solid var(--border-stroke-color);
}

.header-content {
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
}
.user-wrapper {
  display: block;
  height: 55px;
  width: 100%;
  display: flex;
  flex-direction: column;

  .name {
    font-size: 19px;
    font-weight: 800;
    line-height: 30px;
  }

  .info {
    font-size: 13px;
    color: var(--mute-color);
    line-height: 10px;
  }
}

.arrow {
  display: inline-block;
  margin-right: 25px;
  cursor: pointer;
  path {
    fill: var(--primary-text-color);
  }
}
.header-nav {
  margin-right: 20px;
  position: relative;
  input[type="checkbox"] {
    display: none;
  }
  .header-img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    z-index: 9999;
  }

  .nav-body {
    position: absolute;
    left: 0;
    top: 30px;
    background: var(--header-nav-color);
    z-index: 990;
    width: 200px;
    height: 300px;
    border-radius: 7px;
    transform: scale(0, 0);
    transition: all 0.2s ease-in;
    transform-origin: top left;
    opacity: 0;
  }

  input:checked ~ .nav-body {
    opacity: 1;
    transform: scale(1, 1);
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contens: center;
    width: 100%;
    height: 100%;
  }
  .nav-item {
    width: 100%;
    height: 50px;
    text-align: left;
    padding: 15px;
    a {
      color: var(--primary-text-color);
      display: flex;
      flex-direction: row;
      column-gap: 5%;
      align-items: center;
      span {
        color: var(--primary-text-color);
      }
      path[fill] {
        fill: var(--primary-text-color);
      }
      path[stroke] {
        stroke: var(--primary-text-color);
      }
    }
    &:nth-of-type(3) {
      svg {
        margin-right: 5px;
      }
      flex: 3;
    }
  }
  a.router-link-active {
    span {
      color: var(--primary-color);
    }
    path[fill] {
      fill: var(--primary-color);
    }
    path[stroke] {
      stroke: var(--primary-color);
    }
  }
}
// 標題的排版
.title {
  padding-left: 1rem;
}

@media (min-width: 865px) {
  .header-nav {
    display: none;
  }
  header {
    width: 75%;
    margin-left: 25%;
  }
}
@media (min-width: 1085px) {
  .setting-layout-header {
    width: 75%;
  }
  header {
    width: 50%;
  }
}
</style>
