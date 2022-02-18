<template>
  <div>
    <MobileNavbar />
    <Navbar />
    <PopularList />
    <Header />
    <div class="slot">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import MobileNavbar from "../MobileNavbar.vue";
import PopularList from "../PopularList.vue";
import Navbar from "../Navbar.vue";
import Header from "../Header.vue";
export default {
  components: {
    MobileNavbar,
    Navbar,
    Header,
    PopularList,
  },
};
</script>
<style lang="scss" scoped>
.slot {
  padding-top: 55px;
}
@media screen and (min-width: 865px) {
  .slot {
    margin-left: 25%;
    padding-top: 55px;
    width: 50%;
  }
}
</style>
