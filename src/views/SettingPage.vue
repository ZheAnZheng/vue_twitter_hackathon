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
        name: '帳號'
      },
      {
        id: 1,
        name: '名稱'
      },
      {
        id: 2,
        name: 'Email'
      },
      {
        id: 3,
        name: '密碼'
      },
      {
        id: 4,
        name: '密碼確認'
      }]
    }
  }

}
</script>

<style lang="scss" scoped>
  .setting-container {
    margin: 1rem;
    > .setting-link > .setting-button {
      color: var(--white-text-color);
      width: 5rem;
      height: 100%;
      padding: 0.5rem 0 ;
    }
  }
</style>