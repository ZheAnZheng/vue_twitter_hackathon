<template>
  <main-layout>
    <!-- 這邊必須用v-show，否則會造成profileUser資料被截斷 -->
    <BaseSpinner v-show="isLoading" />
    <router-view v-show="!isLoading" />
  </main-layout>
</template>
<script>
import MainLayout from "../components/layouts/MainLayout.vue";
import { userProvider } from "../utils/mixins.js";
import usersAPI from "../apis/users.js";
import BaseSpinner from "../components/UI/BaseSpinner.vue";
import { toast } from "../utils/helper.js";
export default {
  mixins: [userProvider],
  components: {
    MainLayout,
    BaseSpinner,
  },
  data() {
    return {
      user: {},
      isLoading: true,
    };
  },
  provide() {
    return {
      reFetchProfileUser: this.reFetchUser,
    };
  },
  beforeRouteUpdate(to, from, next) {
    const { id: toId } = to.params;
    const { id: fromId } = from.params;

    if (toId !== fromId) {
      this.isLoading = true;
    }
    this.fetchProfileUser(toId);
    next();
  },
  created() {
    const { id } = this.$route.params;
    this.fetchProfileUser(id);
  },
  methods: {
    async fetchProfileUser(userId) {
      try {
        const response = await usersAPI.get({ userId });

        if (response.statusText !== "OK") {
          throw Error(response.data.message);
        }
        this.user = { ...response.data };
        console.log(this.user.introduction);
        this.isLoading = false;
      } catch (e) {
        console.log(e.message);
        if (e.message === "Request failed with status code 500") {
          this.$router.go(-1);
          toast.fireError("無此用戶");
          return;
        }
        toast.fireError("讀取用戶失敗");
      }
    },
    reFetchUser() {
      const { id } = this.$route.params;
      this.fetchProfileUser(id);
    },
  },
};
</script>
