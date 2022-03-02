<template>
  <header
    :class="{ 'setting-layout-header': isSettingLayout }"
    v-show="!isLoading"
  >
    <div v-show="isHeaderReady" class="header-content">
      <div class="header-nav">
        <label for="navbar">
          <img class="header-img" v-show="isUserPage" :src="currentUser.avatar" />
        </label>
        <input type="checkbox" id="navbar" />
        <div class="nav-body">
          <ul>
            <li class="nav-item">
              <router-link
                :to="{ name: 'userTweets', params: { id: currentUser.id } }"
              >
                <svg
                  width="18"
                  height="21"
                  viewBox="0 0 18 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00003 10.8158C10.355 10.8158 11.872 10.6658 12.84 9.55976C13.654 8.62976 13.918 7.19176 13.646 5.16776C13.266 2.34276 11.529 0.655762 9.00003 0.655762C6.47103 0.655762 4.73403 2.34276 4.35403 5.16976C4.08203 7.19176 4.34603 8.62976 5.16003 9.55976C6.12803 10.6668 7.64503 10.8158 9.00003 10.8158ZM5.84003 5.36776C6.00203 4.16776 6.62703 2.15576 9.00003 2.15576C11.373 2.15576 11.998 4.16876 12.16 5.36776C12.367 6.91776 12.217 7.99476 11.71 8.57276C11.255 9.09276 10.444 9.31576 9.00003 9.31576C7.55603 9.31576 6.74503 9.09276 6.29003 8.57276C5.78303 7.99476 5.63303 6.91676 5.84003 5.36776ZM17.28 18.2358C16.403 14.7098 12.998 12.2458 9.00003 12.2458C5.00203 12.2458 1.59703 14.7098 0.720027 18.2358C0.548027 18.9278 0.692027 19.6358 1.11503 20.1758C1.52303 20.6958 2.15503 20.9958 2.84803 20.9958H15.152C15.845 20.9958 16.477 20.6958 16.885 20.1758C17.309 19.6358 17.452 18.9288 17.279 18.2358H17.28ZM15.704 19.2518C15.578 19.4118 15.388 19.4978 15.152 19.4978H2.84803C2.61303 19.4978 2.42203 19.4128 2.29603 19.2518C2.15903 19.0778 2.11603 18.8398 2.17603 18.5978C2.88603 15.7428 5.69303 13.7478 9.00003 13.7478C12.307 13.7478 15.114 15.7418 15.824 18.5978C15.884 18.8398 15.841 19.0778 15.704 19.2518Z"
                    fill="black"
                  />
                </svg>
                <span> 個人資料 </span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'setting' }">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 7.20996C8.90996 7.20996 7.20996 8.90996 7.20996 11C7.20996 13.09 8.90996 14.79 11 14.79C13.09 14.79 14.79 13.09 14.79 11C14.79 8.90996 13.09 7.20996 11 7.20996ZM11 13.29C9.73796 13.29 8.70996 12.264 8.70996 11C8.70996 9.73596 9.73996 8.70996 11 8.70996C12.26 8.70996 13.29 9.73596 13.29 11C13.29 12.264 12.262 13.29 11 13.29Z"
                    fill="#FF6600"
                  />
                  <path
                    d="M11.36 21.375H10.638C9.45499 21.375 8.48399 20.487 8.37599 19.311L8.36199 19.164C8.33699 18.877 8.15499 18.631 7.88999 18.52C7.60399 18.4 7.30799 18.455 7.09199 18.635L6.97599 18.732C6.10799 19.457 4.72299 19.395 3.91599 18.592L3.40599 18.082C2.56999 17.242 2.50999 15.928 3.26599 15.022L3.36399 14.904C3.54999 14.682 3.59399 14.381 3.48599 14.117C3.37599 13.845 3.12799 13.663 2.83999 13.637L2.68999 13.623C1.50999 13.516 0.622986 12.543 0.622986 11.361V10.639C0.622986 9.456 1.51099 8.485 2.68699 8.377L2.84299 8.363C3.12799 8.338 3.37299 8.156 3.48499 7.89C3.59499 7.62 3.54999 7.317 3.36499 7.095L3.27099 6.979C2.51399 6.071 2.57299 4.756 3.40799 3.919L3.91999 3.407C4.72399 2.603 6.10799 2.542 6.97999 3.267L7.09599 3.365C7.31399 3.549 7.62399 3.595 7.88599 3.487C8.15599 3.375 8.33799 3.129 8.36299 2.844L8.37699 2.691C8.48399 1.511 9.45699 0.625 10.639 0.625H11.361C12.544 0.625 13.515 1.513 13.623 2.689L13.637 2.845C13.662 3.13 13.843 3.375 14.109 3.485C14.386 3.602 14.689 3.547 14.903 3.368L15.023 3.266C15.89 2.543 17.277 2.604 18.083 3.406L18.593 3.918C19.429 4.756 19.489 6.071 18.733 6.978L18.633 7.096C18.445 7.316 18.399 7.618 18.51 7.884C18.622 8.154 18.87 8.334 19.156 8.362L19.308 8.376C20.488 8.483 21.375 9.456 21.375 10.638V11.361C21.375 12.544 20.487 13.515 19.311 13.623L19.156 13.637C18.872 13.661 18.626 13.842 18.516 14.107C18.403 14.379 18.449 14.681 18.633 14.902L18.733 15.022C19.489 15.927 19.429 17.242 18.593 18.082L18.083 18.592C17.276 19.396 15.893 19.456 15.023 18.732L14.908 18.636C14.691 18.453 14.378 18.406 14.118 18.514C13.845 18.628 13.663 18.874 13.638 19.16L13.624 19.31C13.517 20.483 12.544 21.37 11.362 21.37L11.36 21.375ZM7.58699 16.955C7.88699 16.955 8.17999 17.015 8.45699 17.13C9.24699 17.458 9.78099 18.184 9.85699 19.026L9.87099 19.173C9.90799 19.573 10.238 19.873 10.641 19.873H11.363C11.763 19.873 12.093 19.573 12.131 19.173L12.145 19.025C12.221 18.183 12.755 17.458 13.537 17.133C14.33 16.803 15.233 16.951 15.87 17.483L15.983 17.577C16.161 17.725 16.349 17.757 16.476 17.757C16.682 17.757 16.876 17.677 17.022 17.53L17.532 17.02C17.816 16.736 17.837 16.29 17.58 15.982L17.48 15.862C16.938 15.212 16.803 14.322 17.128 13.539C17.454 12.749 18.18 12.219 19.022 12.142L19.177 12.128C19.574 12.091 19.877 11.761 19.877 11.358V10.636C19.877 10.236 19.574 9.906 19.175 9.868L19.023 9.854C18.177 9.776 17.453 9.244 17.128 8.461C16.802 7.673 16.938 6.783 17.481 6.134L17.581 6.016C17.838 5.706 17.817 5.26 17.533 4.976L17.023 4.466C16.877 4.319 16.683 4.239 16.477 4.239C16.35 4.239 16.162 4.271 15.985 4.419L15.865 4.519C15.231 5.047 14.315 5.189 13.543 4.873C12.755 4.546 12.223 3.821 12.146 2.977L12.132 2.822C12.097 2.425 11.767 2.122 11.365 2.122H10.642C10.242 2.122 9.91199 2.425 9.87399 2.824L9.85999 2.976C9.78399 3.819 9.25199 4.544 8.46999 4.869C7.68299 5.195 6.77699 5.052 6.13999 4.519L6.02199 4.423C5.84199 4.273 5.65399 4.243 5.52699 4.243C5.32099 4.243 5.12699 4.323 4.98099 4.469L4.46899 4.979C4.18699 5.263 4.16599 5.709 4.42299 6.017L4.52299 6.135C5.06299 6.788 5.19999 7.679 4.87499 8.46C4.54799 9.248 3.82299 9.78 2.97999 9.857L2.82399 9.871C2.42699 9.908 2.12399 10.238 2.12399 10.641V11.363C2.12399 11.763 2.42699 12.093 2.82599 12.131L2.97599 12.145C3.82399 12.223 4.54899 12.757 4.87299 13.541C5.19799 14.327 5.06299 15.216 4.51999 15.866L4.42399 15.981C4.16399 16.291 4.18599 16.737 4.46999 17.021L4.97999 17.531C5.12599 17.678 5.31999 17.758 5.52599 17.758C5.65299 17.758 5.84099 17.728 6.01799 17.578L6.13399 17.482C6.53999 17.146 7.05699 16.958 7.58699 16.958V16.955Z"
                    fill="#FF6600"
                  />
                </svg>
                <span> 設定 </span>
              </router-link>
            </li>
            <li class="nav-item">
              <ThemeSwitch />
            </li>
            <li class="nav-item">
              <router-link class="logOut" to="/signin">
                <svg
                  class="strokeLine"
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 13L5 9M5 9L9 5M5 9H19M14 13V14C14 14.7956 13.6839 15.5587 13.1213 16.1213C12.5587 16.6839 11.7956 17 11 17H4C3.20435 17 2.44129 16.6839 1.87868 16.1213C1.31607 15.5587 1 14.7956 1 14V4C1 3.20435 1.31607 2.44129 1.87868 1.87868C2.44129 1.31607 3.20435 1 4 1H11C11.7956 1 12.5587 1.31607 13.1213 1.87868C13.6839 2.44129 14 3.20435 14 4V5"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span @click="logout">登出</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="arrow" v-show="isShowArrow" @click="handleBackArrow">
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
import ThemeSwitch from "./ThemeSwitch.vue";
import { mapState } from "vuex";
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
    ThemeSwitch,
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
    const adminRoute=['admin-users',"admin-tweets"]
    if(!adminRoute.includes(currentRouteName)){
      this.isUserPage=true;
    }
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
      isUserPage:false
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
  computed: {
    ...mapState(["currentUser"]),
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
    handleBackArrow() {
      this.$router.back();
    },
    logout() {
      this.$store.commit("revokeAuthentication");
      this.$router.push("/signin");
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
