<template>
  <div>
    <MobileNavbar />
    <slot></slot>
  </div>
</template>

<script>
import MobileNavbar from "../MobileNavbar.vue";
export default {
  components: {
    MobileNavbar,
  },
};
</script>
