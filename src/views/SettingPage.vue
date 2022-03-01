<template>
  <setting-layout>
    <div class="setting-container">
      <BaseInput class="setting-input" :form-items="formItems" />
      <BaseButton
        @handleClick="updateUserInfo"
        class="setting-button"
        :position="'right'"
        :mode="'action'"
        :isDisabled="isProcessing"
        >儲存</BaseButton
      >
    </div>
  </setting-layout>
</template>

<script>
import SettingLayout from "../components/layouts/SettingLayout.vue";
import BaseInput from "../components/UI/BaseInput.vue";
import BaseButton from "../components/UI/BaseButton.vue";
import userAPI from "../apis/users";
import { toast } from "../utils/helper";
import { mapState } from "vuex";

export default {
  name: "SettingPage",
  components: {
    SettingLayout,
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
          name: "Email",
        },
        {
          id: 3,
          name: "密碼",
          type: "password",
        },
        {
          id: 4,
          name: "密碼確認",
          type: "password",
        },
      ],
      isAuthenticated: false,
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.setUser();
  },
  methods: {
    // 將currentUser的資料放入input中的函式
    setUser() {
      try {
        this.isAuthenticated = true;

        this.formItems[0].value = "@" + this.currentUser.account;
        this.formItems[1].value = this.currentUser.name;
        this.formItems[2].value = this.currentUser.email;
      } catch (error) {
        console.log("Error", error);
        toast.fireError("目前無法取得個人資料，請稍後再試");
      }
    },
    // 透過伺服器更新個人資訊的函式
    async updateUserInfo() {
      try {
        this.isProcessing = true;
        const id = this.currentUser.id;
        const password = this.formItems[3].value;
        const passwordCheck = this.formItems[4].value;
        const formData = new FormData();

        formData.append("account", this.formItems[0].value.slice(1));
        formData.append("name", this.formItems[1].value);
        formData.append("email", this.formItems[2].value);
        formData.append("password", this.formItems[3].value);
        formData.append("introduction", this.currentUser.introduction);
        formData.append("avatar", this.currentUser.avatar);
        formData.append("cover", this.currentUser.cover);

        // 當密碼輸入不相同時
        if (password !== passwordCheck) {
          toast.fireWarning("兩次密碼輸入不相同，請再次確認");
          return;
        }

        // 向API傳送更新的資訊
        const { data } = await userAPI.update({
          userId: id,
          formData,
        });

        // 當無法修改時丟出錯誤
        if (data.status === "error") {
          console.log(data.message);
        } else {
          // 更新成功時的訊息
          toast.fireSuccess("更新成功");
          this.$router.push("/main");
        }
      } catch (error) {
        console.log("Error", error);
        toast.fireError("目前無法修改設定，請稍後再試");
      } finally {
        this.isProcessing = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.setting-container {
  margin: 1rem;
  > .setting-link > .setting-button {
    color: var(--white-text-color);
    width: 5rem;
    height: 100%;
    padding: 0.5rem 0;
  }
}
</style>
