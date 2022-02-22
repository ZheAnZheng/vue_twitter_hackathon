<template>
  <main-layout>
    <router-view />
  </main-layout>
</template>
<script>
import MainLayout from "../components/layouts/MainLayout.vue";

import dummyCreater from "../utils/dummyCreater.js";
import { userProvider } from "../utils/mixins.js";
const dummyUser = dummyCreater.createCurrentUser();
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
