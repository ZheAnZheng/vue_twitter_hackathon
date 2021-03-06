import Vue from "vue";
import VueRouter from "vue-router";
import SignUpPage from "../views/SignUpPage.vue";
import SignInPage from "../views/SignInPage.vue";
import AdminLoginPage from "../views/AdminLoginPage.vue";
import AdminMainPage from "../views/AdminMainPage.vue";
import store from "./../store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/signin",
  },
  {
    path: "/signin",
    name: "sign-in",
    component: SignInPage,
  },
  {
    path: "/signup",
    name: "sign-up",
    component: SignUpPage,
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../views/MainPage.vue"),
  },
  {
    path: "/chatroom",
    name: "public-chatroom",
    component: () => import("../views/PublicRoom.vue"),
  },

  {
    path: "/setting",
    name: "setting",
    component: () => import("../views/SettingPage.vue"),
  },
  {
    path: "/notify",
    name: "notify",
    component: () => import("../views/NotifySettingPage.vue"),
  },
  {
    path: "/users/:id",
    component: () => import("../views/ProfilePage.vue"),
    children: [
      {
        path: "/",
        component: () => import("../components/UserProfile.vue"),
        redirect: "/users/:id/tweets",
        children: [
          {
            path: "tweets",
            name: "userTweets",
            component: () => import("../components/TweetList.vue"),
          },
          {
            path: "reply",
            name: "replyTweets",
            component: () => import("../components/ReplyList.vue"),
          },
          {
            path: "like",
            name: "likeTweets",
            component: () => import("../components/TweetList.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/users/:id",
    component: () => import("../views/FollowPage.vue"),
    children: [
      {
        path: "following",
        name: "following",
        component: () => import("../components/FollowList.vue"),
      },
      {
        path: "followed",
        name: "followed",
        component: () => import("../components/FollowList.vue"),
      },
    ],
  },
  {
    path: "/users/:id/chatroom",
    name: "private-lobby",
    component: () => import("../views/PrivateRoom.vue"),
    children: [
      {
        path: ":userId",
        name: "private-chatroom",
        component: () => import("../components/ChatRoom.vue"),
      },
    ],
  },
  {
    path: "/tweets/:id",
    name: "tweetStory",
    component: () => import("../views/TweetPage.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminLoginPage,
  },
  {
    path: "/admin",
    name: "admin-main",
    component: AdminMainPage,
    children: [
      {
        path: "users",
        name: "admin-users",
        component: () => import("../components/AdminUsers"),
      },
      {
        path: "tweets",
        name: "admin-tweets",
        component: () => import("../components/AdminTweetList.vue"),
      },
    ],
  },
  {
    path: "/*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach(async (to, from, next) => {
  store.commit("loadState");
  let isAuthenticated = store.getters["isAuthenticated"];
  const currentUser = store.state.currentUser;

  const pathsWithoutAuthentication = ["sign-up", "sign-in", "admin"];
  const pathWidthAdmin = ["admin-users", "admin-tweets", "admin-main"];

  //????????? ??? ?????????????????????
  if (!isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next();
    return;
  }
  //????????? ??? ????????????????????? ????????????
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next("/signin");
    return;
  }
  //??????????????????????????? ??????admin???????????? ????????????
  if (
    isAuthenticated &&
    currentUser.role === "user" &&
    (pathWidthAdmin.includes(to.name) ||
      pathsWithoutAuthentication.includes(to.name))
  ) {
    next("/main");
    return;
  }
  //??????????????????????????? ??????user???????????? ??????admin/users
  if (
    isAuthenticated &&
    currentUser.role === "admin" &&
    !pathWidthAdmin.includes(to.name)
  ) {
    next("/admin/users");
    return;
  }
  if (isAuthenticated && currentUser.role === "user") {
    store.dispatch("fetchCurrentUser");
  }
  next();
});

export default router;
