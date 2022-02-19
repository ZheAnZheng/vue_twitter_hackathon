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
        path: "",
        name: "user",
        component: () => import("../components/UserProfile.vue"),
      },
    ],
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminLoginPage,
  },
  {
    // TODO路由問題
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
