import Vue from "vue";
import VueRouter from "vue-router";

import SigninPage from "../views/SigninPage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/signin",
  },
  {
    path: "/signin",
    name: "sign-in",
    component: SigninPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
