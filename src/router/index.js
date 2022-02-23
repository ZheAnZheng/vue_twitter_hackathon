import Vue from "vue";
import VueRouter from "vue-router";
import SignUpPage from "../views/SignUpPage.vue";
import SignInPage from "../views/SignInPage.vue";
import AdminLoginPage from "../views/AdminLoginPage.vue";
import AdminMainPage from "../views/AdminMainPage.vue";
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
    path: "/main",
    name: "main",
    component: () => import("../views/MainPage.vue"),
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("../views/SettingPage.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
