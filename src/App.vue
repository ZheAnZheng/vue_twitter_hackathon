<template>
  <router-view />
</template>
<script>
export default {
  created() {
    this.$store.commit("loadState");
    const theme = localStorage.getItem("THEME_KEY");
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  },
};
</script>
<style lang="scss">
@import "./assets/scss/color.scss";
@import "./assets/scss/reset.scss";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500&display=swap");
html,
body {
  height: 100%;
  font-size: 16px;
  font-family: "Noto Sans TC", sans-serif;
  background-color: var(--primary-bg-color);
  color: var(--primary-text-color);
  background-color: var(--white-text-color);
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
