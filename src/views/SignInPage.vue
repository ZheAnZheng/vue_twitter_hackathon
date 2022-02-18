<template>
  <div class="container">
    <LogoTitle :title="'登入Alphitter'" />
    <BaseInput :formItems="formItems" />
    <div class="button-group">
      <base-button :mode="'action'" :position="'center'">登入</base-button>
      <base-button :position="'right'">後台登入</base-button>
      <base-button :position="'right'">註冊Alpitter．</base-button>
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
