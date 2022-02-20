<template>
  <div>
    <Navbar/>
    <Header/>
    <div class="slot">
        <slot></slot>
    </div>
  </div>
</template>
<script>
import Navbar from '../Navbar.vue';
import Header from '../Header.vue';

export default {
  components:{
    Navbar,
    Header
  }
}
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
