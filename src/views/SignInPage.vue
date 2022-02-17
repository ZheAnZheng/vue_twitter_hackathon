<template>
  <div class="container">
    <LogoTitle :title="'登入Alphitter'" />
    <BaseInput :formItems="formItems" />
    <BaseButton :mode="'signIn'" />
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
@import "../assets/scss/alphitterContainer.scss";
</style>
