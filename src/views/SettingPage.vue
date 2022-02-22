<template>
    <setting-layout>
      <div class="setting-container">
        <BaseInput class="setting-input" :form-items="formItems" />
        <router-link class="setting-link" to="/main">
          <BaseButton class="setting-button" :position="'right'" :mode="'action'">儲存</BaseButton>
        </router-link>
      </div>
    </setting-layout>
</template>

<script>
import SettingLayout from '../components/layouts/SettingLayout.vue';
import BaseInput from '../components/UI/BaseInput.vue'
import BaseButton from '../components/UI/BaseButton.vue'

const dummyUser = {
  currentUser: {
    id: 1,
    name: 'John Doe',
    account: '@wonderman',
    email: 'John Doe@gmail.com'
  },
  isAuthenticated: true
}


export default {
  name: 'SettingPage',
  components: { 
    SettingLayout,
    BaseInput,
    BaseButton
  },
  data() {
    return {
      formItems: [{
        id: 0,
        name: '帳號',
        value: ''
      },
      {
        id: 1,
        name: '名稱',
        value: ''
      },
      {
        id: 2,
        name: 'Email',
        value: ''
      },
      {
        id: 3,
        name: '密碼'
      },
      {
        id: 4,
        name: '密碼確認'
      }],
      currentUser: {
        id: -1,
        name: '',
        account: '',
        email: '',
        isAdmin: false
      },
      isAuthenticated: false
    }
  },
  created() {
    this.fetchCurrentUser()
  },
  methods: {
    fetchCurrentUser() {
      // TODO：向伺服器取得使用者資料

      this.currentUser = {
        ...this.currentUser,
        ...dummyUser.currentUser
      }

      this.isAuthenticated = dummyUser.isAuthenticated

      const { name, account , email } = this.currentUser

      this.formItems[0].value = account
      this.formItems[1].value = name
      this.formItems[2].value = email
    }
  }
}
</script>

<style lang="scss" scoped>
.setting-container {
  margin: 1rem;
  // width: 60%;
  > .setting-link > .setting-button {
    color: var(--white-text-color);
    width: 5rem;
    height: 100%;
    padding: 0.5rem 0 ;
  }
}
</style>