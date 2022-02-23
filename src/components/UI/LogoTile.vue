<template>
  <div class="title-container">
    <img class="alpha-logo" src="@/assets/Logo@X2.png" />
    <div class="title">{{ title }}</div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.title-container {
  display: flex;
  margin-bottom: 40px;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
.alpha-logo {
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
}
.title {
  font-size: 23px;
}
</style>
