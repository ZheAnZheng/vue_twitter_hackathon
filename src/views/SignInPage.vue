<template>
  <div class="container">
    <LogoTitle :title="'登入Alphitter'" />
    <BaseInput :formItems="formItems" />
    <div class="button-group">
      <base-button :mode="'action'" :position="'center'" @handleClick="signin"
        >登入</base-button
      >
      <base-button :position="'right'">
        <router-link to="/admin">後台登入</router-link>
      </base-button>
      <base-button :position="'right'"
        ><router-link to="/signup">註冊Alpitter．</router-link></base-button
      >
    </div>
  </div>
</template>

<script>
import authirozationAPI from "../apis/authirozation.js";
import { toast } from "../utils/helper.js";
import { mapActions } from "vuex";
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
          value: "",
          type: "text",
        },
        {
          id: 1,
          name: "密碼",
          value: "",
          type: "password",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["setCurrentUser"]),
    async signin() {
      try {
        const { data } = await authirozationAPI.signIn({
          email: this.formItems[0].value,
          password: this.formItems[1].value,
        });
        if (data.status !== "success") {
          throw Error(data.message);
        }
        const user = data.data.user;
        if (user.role !== "user") {
          toast.fireWarning("管理員請由後台登入");
        } else {
          localStorage.setItem("token", `${data.data.token}`);
          this.setCurrentUser(user);
          toast.fireSuccess("登入成功");
          this.$router.replace("/main");
        }
      } catch (e) {
        console.log(e);
        toast.fireError("登入失敗");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/extends.scss";
.container {
  @extend %alphitterContainer;
}
a {
  color: var(--blue-text-color);
}
.button-group {
  @extend %button-group;
}
</style>
