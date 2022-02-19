<template>
  <div class="container">
    <LogoTitle :title="'後台登入'" />
    <BaseInput :formItems="formItems" />
    <div class="button-group">
      <base-button :mode="'action'" @handleClick="handleClick"
        >登入</base-button
      >
      <base-button :position="'right'">
        <router-link to="/signin">前台登入</router-link>
      </base-button>
    </div>
  </div>
</template>

<script>
import LogoTitle from "../components/UI/LogoTile.vue";
import BaseInput from "../components/UI/BaseInput.vue";
import BaseButton from "../components/UI/BaseButton.vue";
export default {
  components: {
    LogoTitle,
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      formItems: [
        {
          id: 0,
          name: "帳號",
        },
        {
          id: 1,
          name: "密碼",
        },
      ],
    };
  },
  methods: {
    handleClick() {
      this.$router.replace("/admin/users");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/extends.scss";
.container {
  @extend %alphitterContainer;
}
.button-group {
  @extend %button-group;
}
</style>
