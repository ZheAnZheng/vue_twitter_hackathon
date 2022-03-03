<template>
  <main-layout>
    <!-- 這邊必須用v-show，否則會造成profileUser資料被截斷 -->
    <BaseSpinner v-show="isLoading" />
    <router-view v-show="!isLoading" />
  </main-layout>
</template>
<script>
import MainLayout from "../components/layouts/MainLayout.vue";
import BaseSpinner from "../components/UI/BaseSpinner.vue";
import { userProvider } from "../utils/mixins.js";
import { toast } from "../utils/helper.js";
import usersAPI from "../apis/users.js";
export default {
  mixins: [userProvider],
  components: {
    MainLayout,
    BaseSpinner,
  },
  created() {
    const { id } = this.$route.params;
    this.fetchProfileUser(id);
  },
  data() {
    return {
      user: {},
      isLoading: true,
    };
  },
  //提供元件可以命令profileUser更新資料
  provide() {
    return {
      reFetchProfileUser: this.reFetchUser,
    };
  },
  beforeRouteUpdate(to, from, next) {
    //若是在同一個id的profilePage，可以不用整個刷新，使要部分刷新
    const { id: toId } = to.params;
    const { id: fromId } = from.params;
    if (toId !== fromId) {
      this.isLoading = true;
    }
    this.fetchProfileUser(toId);
    next();
  },

  methods: {
    async fetchProfileUser(userId) {
      try {
        await this.tryFetchProfileUser(userId);
        this.isLoading = false;
      } catch (e) {
        if (e.message === "Request failed with status code 500") {
          this.$router.go(-1);
          toast.fireError("無此用戶");
          return;
        }
        toast.fireError("讀取用戶失敗");
      }
    },
    async tryFetchProfileUser(userId) {
      try {
        const response = await usersAPI.get({ userId });
        if (response.statusText !== "OK") {
          throw Error(response.data.message);
        }
        this.user = { ...response.data };
      } catch (e) {
        console.log(e);
      }
    },
    reFetchUser() {
      this.isLoading = true;
      const { id } = this.$route.params;
      this.fetchProfileUser(id);
    },
  },
};
</script>
