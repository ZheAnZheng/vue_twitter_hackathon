<template>
  <main-layout>
    <TweetOverview />
  </main-layout>
</template>

<script>
import MainLayout from "../components/layouts/MainLayout.vue";
import TweetOverview from '../components/TweetOverview.vue'

export default {
  components: {
    MainLayout,
    TweetOverview
  },
};
</script>
