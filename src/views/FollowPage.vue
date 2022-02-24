<template>
  <main-layout>
    <router-view></router-view>
  </main-layout>
</template>
<script>
import MainLayout from "../components/layouts/MainLayout.vue";
import { userProvider } from "../utils/mixins.js";
import dummyCreater from "../utils/dummyCreater.js";
const dummyUser = dummyCreater.getUsersId();
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
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      this.user = dummyUser;
    },
  },
};
</script>
