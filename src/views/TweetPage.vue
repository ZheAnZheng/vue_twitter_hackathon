<template>
  <main-layout>
    <TweetStory />
  </main-layout>
</template>
<script>
import MainLayout from "../components/layouts/MainLayout.vue";
import TweetStory from "../components/TweetStory.vue";
export default {
  components: { MainLayout, TweetStory },
};
</script>
