<template>
  <main-layout>
    <router-view></router-view>
  </main-layout>
</template>
<script>
import MainLayout from "../components/layouts/MainLayout.vue";
import { userProvider } from "../utils/mixins.js";
import usersAPI from "../apis/users.js";
import { toast } from "../utils/helper";
export default {
  mixins: [userProvider],
  components: {
    MainLayout,
  },
  data() {
    return {
      user: {},
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  methods: {
    async fetchUser(userId) {
      try {
        const response = await usersAPI.get({ userId });
        if (response.statusText !== "OK") {
          throw Error(response.date.message);
        }
        this.user = { ...response.data };
      } catch (e) {
        console.log(e);
        toast.fireError("無法讀取用戶");
      }
    },
  },
};
</script>
