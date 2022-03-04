<template>
  <div class="container">
    <header class="header">訊息</header>

    <ul>
      <li v-for="message in messageData" :key="message.id">
        <router-link
          class="list-card"
          :to="{
            name: 'private-chatroom',
            params: { id: currentUser.id, userId: message.id },
          }"
        >
          <img :src="message.userAvatar | imageFilter" />
          <div class="card-info">
            <div class="name">{{ message.userName }}</div>
            <div class="account">@{{ message.userAccount }}</div>
            <p class="last-message">{{ message.lastMessage }}</p>
          </div>
          <div>5秒</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { emptyImageFilter } from "../utils/mixins.js";
import { mapState } from "vuex";
export default {
  mixins: [emptyImageFilter],
  computed: {
    ...mapState(["currentUser"]),
  },
  data() {
    return {
      messageData: [
        {
          id: 1,
          userName: "apple",
          userAvatar: "",
          userAccount: "apple",
          updatedAt: "1:00",
          userId: 2,
          lastMessage: "sdasasdasdasdasdasdsadasdasdsadada",
        },
        {
          id: 2,
          userName: "apple",
          userAvatar: "",
          userAccount: "apple",
          updatedAt: "1:00",
          userId: 2,
          lastMessage: "sdasasdasdasdasdasdsadasdasdsadada",
        },
        {
          id: 3,
          userName: "apple",
          userAvatar: "",
          userAccount: "apple",
          updatedAt: "1:00",
          userId: 2,
          lastMessage: "sdasasdasdasdasdasdsadasdasdsadada",
        },
        {
          id: 4,
          userName: "apple",
          userAvatar: "",
          userAccount: "apple",
          updatedAt: "1:00",
          userId: 2,
          lastMessage: "sdasasdasdasdasdasdsadasdasdsadada",
        },
      ],
    };
  },
  filters: {
    muteText(val) {
      console.log(val.length);
      if (val.length > 25) {
        return (val = val.slice(0, 25) + "...");
      } else {
        return val;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
}
a{
    color:var(--mute-color);
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
  align-items: flex-start;
  padding: 15px;
  height: 80px;
  width: 100%;
  font-size: 16px;
  column-gap: 2%;
  border-bottom: 1px solid var(--border-stroke-color);
  background: var(--primary-bg-color);

  .card-info {
    flex: 30%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
  .name {
    display: inline-block;
    color: var(--primary-text-color);
  }
  .account {
    display: inline-block;
    color: var(--mute-color);
  }
  .last-message {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    color: var(--mute-color);
  }
}
</style>
