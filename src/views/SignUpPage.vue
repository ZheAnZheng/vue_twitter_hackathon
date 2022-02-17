<template>
  <div class="container">
    <LogoTitle :title="'建立你的帳號'" />
    <BaseInput :formItems="formItems" />
    <BaseButton :mode="'signUp'" />
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
@import "../assets/scss/alphitterContainer.scss";
</style>
