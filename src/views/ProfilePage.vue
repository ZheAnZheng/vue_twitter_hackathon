<template>
  <main-layout>
    <router-view />
  </main-layout>
</template>
<script>
import MainLayout from "../components/layouts/MainLayout.vue";
export default {
  components: {
    MainLayout,
  },
};
</script>
