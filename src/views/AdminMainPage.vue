<template>
  <setting-layout class="admin-slot">
    <router-view />
  </setting-layout>
</template>
<script>
import SettingLayout from "../components/layouts/SettingLayout.vue";

export default {
  components: { SettingLayout },
};
</script>