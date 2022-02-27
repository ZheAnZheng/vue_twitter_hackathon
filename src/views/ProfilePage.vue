<template>
  <main-layout>
    <router-view />
  </main-layout>
</template>
<script>
import MainLayout from "../components/layouts/MainLayout.vue";
import { userProvider } from "../utils/mixins.js";
import usersAPI from "../apis/users.js";
import { toast } from "../utils/helper.js";
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
      } catch (e) {
        console.log(e);
        toast.fireError("讀取用戶失敗");
      }
    },
  },
};
</script>
