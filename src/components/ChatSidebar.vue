<template>
  <div class="container">
    <header class="header">上線使用者</header>

    <ul>
      <li v-for="user in users" :key="user.id" class="list-card">
        <img :src="user.avatar | imageFilter" />
        <div class="name">{{ user.name }}</div>
        <div class="account">@{{ user.account }}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import { emptyImageFilter } from "../utils/mixins.js";
export default {
  mixins: [emptyImageFilter],
  data() {
    return {
      users: [
        {
          id: 1,
          name: "apple",
          avatar: "",
          account: "apple",
        },
        {
          id: 2,
          name: "apple",
          avatar: "",
          account: "apple",
        },
        {
          id: 3,
          name: "apple",
          avatar: "",
          account: "apple",
        },
        {
          id: 4,
          name: "apple",
          avatar: "",
          account: "apple",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
}
.header {
  position: fixed;
  top: 0;
  width: 28%;
  font-size: 24px;
  height: 75px;
  line-height: 75px;
  padding-left: 24px;
  border: 1px solid var(--border-stroke-color);
  background: var(--input-bg-color);
}
ul {
  width: 100%;
  height: 100%;
  padding-top: 75px;
}
.list-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  height: 80px;
  width: 100%;
  font-size: 16px;
  column-gap: 2%;
  border-bottom: 1px solid var(--border-stroke-color);
  background: var(--primary-bg-color);
  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
  .name {
    color: var(--primary-text-color);
  }
  .account {
    color: var(--mute-color);
  }
}
</style>
