<template>
  <div class="hachathon-container">
    <Navbar />
    <MobileNavbar/>
    <div class="middle-slot">
      <slot></slot>
    </div>
    <div class="right-slot">
      <slot name="right-side"></slot>
    </div>
  </div>
</template>
<script>
import Navbar from "../Navbar.vue";
import MobileNavbar from "../MobileNavbar.vue"
export default {
  components: {
    Navbar,
    MobileNavbar
  },
};
</script>
<style lang="scss" scoped>
.hachathon-container {
  display: flex;
  flex-direction: row;
}
.middle-slot {
  display: none;
  width: 28%;
  height: 100%;
}
.right-slot {
  flex: 3;
  display: inline-flex;
  height: 100vh;
}
@media screen and (min-width: 575px) {
  .middle-slot {
    display: block;
  }
}
@media screen and (min-width: 865px) {
  .middle-slot {
    margin-left: 17%;
  }
}
</style>
