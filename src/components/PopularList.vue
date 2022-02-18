<template>
  <div class="container">
    <div class="list"></div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  display: none;
  position: fixed;
  right: 0;
  width: 25%;
  height: 100%;
  background-color: rgba(0, 255, 0, 0.4);
}
@media screen and (min-width: 865px) {
  .container {
    display: block;
  }
}
</style>
