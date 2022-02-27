<template>
  <form>
    <div v-for="item in formItems" :key="item.id" class="input-group">
      <label :for="item.name">{{ item.name }}</label>
      <input :id="item.name" v-model="item.value" :value="item.value" :type="item.type" :class="{ 'error-color': isError }" />
      <div v-show="isError && item.name === '帳號'" class="account-alert-message">帳號不存在</div>
      <div v-show="isError && item.name === '帳號'" class="account-alert-message">帳號重覆</div>
      <div v-show="isError && item.name === '名稱'" class="name-alert-message">字數超出上限</div>
      <div v-show="isError && item.name === 'Email'" class="account-alert-message">Email重覆</div>
      <div v-show="isError && (item.name === '密碼' || item.name === '密碼確認')" class="account-alert-message">密碼輸入錯誤</div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    formItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isError: false,
    }
  },
};
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  flex: 2;
  margin-bottom: 40px;
}

.input-group {
  width: 100%;
  margin-bottom: 20px;
  background-color: var(--input-bg-color);
  &:last-child {
    margin-bottom: 0;
  }

  label {
    display: block;
    font-size: 15px;
    color: var(--mute-color);
  }

  input {
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    border: 0px;
    border-bottom: 2px solid var(--mute-color);

    // 當游標hover或focus時的顏色
    &:hover, &:focus {
      border-bottom: 2px solid var(--input-hover-focus-color);
    }
  }

  // 發生錯誤時的顏色
  > .error-color {
    border-bottom: 2px solid var(--alert-message-color);
  }

  // 提示訊息的顏色
  > .account-alert-message,
    .name-alert-message {
    color: var(--alert-message-color);
  }
}

@media screen and (min-width: 450px) {
  .input-group {
    margin-bottom: 30px;
  }
}
</style>
