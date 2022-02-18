<template>
  <div class="container">
    <LogoTitle :title="'建立你的帳號'" />
    <BaseInput :formItems="formItems" />

    <div class="button-group">
      <base-button :mode="'action'" :position="'center'">註冊</base-button>
      <base-button :position="'center'">取消</base-button>
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
          name: "名稱",
        },
        {
          id: 2,
          name: "email",
        },
        {
          id: 3,
          name: "密碼",
        },
        {
          id: 4,
          name: "密碼確認",
        },
      ],
    };
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
