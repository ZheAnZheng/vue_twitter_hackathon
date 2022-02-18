<template>
  <header>
    <div class="arrow" v-show="isShowArrow">
      <svg
        width="17"
        height="14"
        viewBox="0 0 17 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 5.99988H3.41399L7.70699 1.70687C8.09699 1.31687 8.09699 0.683875 7.70699 0.292875C7.31699 -0.0981249 6.68399 -0.0971249 6.29299 0.292875L0.292988 6.29288C-0.0970117 6.68288 -0.0970117 7.31588 0.292988 7.70687L6.29299 13.7069C6.48799 13.9019 6.74299 13.9999 6.99999 13.9999C7.25699 13.9999 7.51199 13.9019 7.70699 13.7069C8.09699 13.3169 8.09699 12.6839 7.70699 12.2929L3.41399 7.99988H16C16.553 7.99988 17 7.55288 17 6.99988C17 6.44688 16.553 5.99988 16 5.99988Z"
          fill="black"
        />
      </svg>
    </div>
    <div v-if="isUser" class="user-wrapper">
      <div class="name">UserName</div>
      <div class="info">1.4萬 推文</div>
    </div>
    <span v-else>{{ title }}</span>
  </header>
</template>
<script>
export default {
  created() {
    const currentRouteName = this.$route.name;
    this.handleTitleByRoute(currentRouteName);
  },
  data() {
    return {
      title: "",
      isShowArrow: false,
      isUser: false,
    };
  },
  methods: {
    handleTitleByRoute(route) {
      switch (route) {
        case "main":
          return (this.title = "首頁");
        case "tweet":
          this.isShowArrow = true;
          return (this.title = "推文");
        case "setting":
          return (this.title = "帳戶設定");
        case "admin-users":
          return (this.title = "使用者列表");
        case "admin-tweets":
          return (this.title = "推文清單");
        case "user":
          this.isShowArrow = true;
          this.isUser = true;
          return (this.title = "user");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
header {
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 55px;
  width: 100%;
  background-color: var(--white-text-color);
}
.user-wrapper {
  display: block;
  height: 55px;
  width: 100px;
  display: flex;
  flex-direction: column;

  .name {
    font-size: 19px;
    font-weight: 800;
    line-height: 30px;
  }
  .info {
    font-size: 13px;
    color: var(--mute-color);
    line-height: 10px;
  }
}
.arrow {
  display: inline-block;
  margin-right: 25px;
}
@media (min-width: 865px) {
  header {
    width: 75%;

    margin-left: 25%;
  }
}
</style>
