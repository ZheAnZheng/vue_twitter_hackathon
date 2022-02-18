<template>
  <div>
    <MobileNavbar />
    <Navbar />
    <div class="slot">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import MobileNavbar from "../MobileNavbar.vue";
import Navbar from "../Navbar.vue";
export default {
  components: {
    MobileNavbar,
    Navbar,
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 865px) {
  .slot {
    margin-left: 25%;
  }
}
</style>
