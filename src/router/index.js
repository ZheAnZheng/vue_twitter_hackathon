import Vue from "vue";
import VueRouter from "vue-router";
import SignUpPage from "../views/SignUpPage.vue";
import SignInPage from "../views/SignInPage.vue";
import AdminLoginPage from "../views/AdminLoginPage.vue";
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
    path: "/admin",
    name: "admin",
    component: AdminLoginPage,
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../views/MainPage.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
