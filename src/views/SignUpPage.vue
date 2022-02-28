<template>
  <div class="container">
    <LogoTitle :title="'建立你的帳號'" />
    <BaseInput :formItems="formItems" />

    <div class="button-group">
      <base-button
        :mode="'action'"
        :position="'center'"
        @handleClick="signUp"
        :isDisabled="isProcessing"
        >註冊</base-button
      >
      <base-button :position="'center'" @handleClick="cancel"
        ><div>取消</div></base-button
      >
    </div>
  </div>
</template>

<script>
import LogoTitle from "../components/UI/LogoTile.vue";
import BaseInput from "../components/UI/BaseInput.vue";
import BaseButton from "../components/UI/BaseButton.vue";
import { toast } from "../utils/helper.js";
import adminAPI from "../apis/admin.js";
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
          value: "",
          type: "text",
        },
        {
          id: 1,
          name: "名稱",
          value: "",
          type: "text",
        },
        {
          id: 2,
          name: "email",
          value: "",
          type: "email",
        },
        {
          id: 3,
          name: "密碼",
          value: "",
          type: "password",
        },
        {
          id: 4,
          name: "密碼確認",
          value: "",
          type: "password",
        },
      ],
      isProcessing: false,
    };
  },
  methods: {
    async signUp() {
      try {
        this.isProcessing = true;
        const response = await adminAPI.users.signUp({
          account: this.formItems[0].value,
          name: this.formItems[1].value,
          email: this.formItems[2].value,
          password: this.formItems[3].value,
          checkPassword: this.formItems[4].value,
        });
        if (response.statusText !== "OK") {
          throw Error(response.data.message);
        }
        this.isProcessing = false;
        this.$router.push("/signin");
        toast.fireSuccess("註冊成功!");
      } catch (e) {
        console.log(e);
        this.isProcessing = false;
        toast.fireError("註冊失敗");
      }
    },
    cancel() {
      this.$router.replace("/signin");
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
