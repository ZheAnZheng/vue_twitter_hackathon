<template>
  <div class="container" >
    <header class="header">公開聊天室</header>
    <div  class="chatroom-body">
      <ul class="message-list">
        <li
          v-for="message in messageData"
          :key="message.id"
          class="message-item"
          
        >
          <div
            :class="{
              message: message.type === 'message',
              notify: message.type === 'notify',
            }"
          >
            <div class="notify-content" v-if="message.type === 'notify'">
              {{ message.userName + message.message }}
            </div>
            <div
              v-else
              class="message-wrapper"
              :class="[currentUser.id === message.userId ? 'own' : 'other']"
            >
              <img
                class="image"
                :src="message.userAvatar | imageFilter"
                v-if="!isCurrentUser(message.userId)"
              />

              <div>
                <div
                  class="message-text"
                  :class="{ 'own-text': isCurrentUser(message.userId) }"
                >
                  {{ message.message }}
                </div>
                <div
                  class="message-time"
                  :class="{ 'own-time': isCurrentUser(message.userId) }"
                >
                  1:00
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div class="message-bar">
        <input placeholder="輸入訊息..." class="message-input" />
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.13 9.35798L1.614 0.107979C1.324 -0.0440207 0.974 0.00597923 0.741 0.233979C0.511 0.459979 0.448001 0.810979 0.591001 1.10198L4.953 10.022L0.591001 18.942C0.448001 19.234 0.511 19.585 0.741 19.81C0.886 19.95 1.074 20.022 1.264 20.022C1.384 20.022 1.504 19.994 1.614 19.935L19.131 10.685C19.376 10.555 19.531 10.299 19.531 10.021C19.531 9.74298 19.376 9.48898 19.131 9.35898L19.13 9.35798ZM2.948 2.50998L15.752 9.27198H6.255L2.948 2.51198V2.50998ZM6.255 10.77H15.753L2.948 17.535L6.255 10.772V10.77Z"
            fill="#FF6600"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { emptyImageFilter } from "../utils/mixins.js";
export default {
  mixins: [emptyImageFilter],
  computed: {
    ...mapState(["currentUser"]),
  },
  mounted(){

      var div=document.querySelector('.message-list');
      div.lastElementChild.scrollIntoView()
    
  },
  data() {
    return {
      messageData: [
        {
          id: 0,
          type: "notify",
          userId: 0,
          userName: "apple",
          userAvatar: "",
          message: "進入",
          createdAt: "",
        },
        {
          id: 1,
          type: "message",
          userId: 0,
          userName: "apple",
          userAvatar: "",
          message:
            "大家好大家好大家好大家\n好大家好大家好大家好大家好\n大家好大家好大家好家好大家好大家好大家好\n家好大家好大家好大家好\n",
          createdAt: "",
        },
        {
          id: 2,
          type: "message",
          userName: "kevin",
          userId: 294,
          userAvatar: "",
          message: "大家好",
          createdAt: "",
        },
      ],
    };
  },
  methods: {
    isCurrentUser(userId) {
      return this.currentUser.id === userId;
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
.header {
  position: fixed;
  top: 0;
  width: 100%;
  font-size: 24px;
  height: 75px;
  line-height: 75px;
  padding-left: 24px;
  border: 1px solid var(--border-stroke-color);
  background: var(--input-bg-color);
  z-index: 9999;
}
.chatroom-body {
  background: var(--white-text-color);
  position: relative;
  
  padding: 75px 16px 0 16px;
  border: 1px solid var(--border-stroke-color);
  padding-bottom: 64px;
  height:calc(100% - 50px) ;
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
}
.message-list {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: auto;
  .message-item {
    &:first-child {
      min-height: 60px;
      margin-top: 77vh;
    }
  }
  .notify {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .notify-content {
      border-radius: 10px;
      padding: 0 10px;
      background: var(--notify-bg-color);
      color: var(--mute-color);
    }
  }
  .message-wrapper {
    position: relative;
    display: flex;
    font-size: 15px;
    flex-direction: row;
    column-gap: 10px;
    padding-left: 50px;
  }
  .own {
    flex-direction: row-reverse;
  }
  .image {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    bottom: 14%;
    left: 0;
  }
  .message-text {
    white-space: pre-wrap;
    word-break: break-word;
    padding: 10px 15px;
    border-radius: 30px 30px 30px 0;

    min-width: 40px;
    background: var(--notify-bg-color);
  }
  .own-text {
    border-radius: 30px 30px 0px 30px;
    background: var(--primary-color);
    color: var(--white-text-color);
  }
  .message-time {
    font-size: 13px;
    color: var(--mute-color);
  }

  .own-time {
    float: right;
  }
}
.message-bar {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 64px;
  column-gap: 16px;
  background: var(--primay-bg-color);
  border: 1px solid var(--border-stroke-color);
  z-index: 999;
  .message-input {
    width: 95%;
    padding: 3px 16px;
    height: 32px;
    background: var(--border-stroke-color);
    border: 1px solid var(--border-stroke-color);
    border-radius: 50px;
  }
}
@media screen and (min-width:865px){
  .chatroom-body{
    height:100%;
  }
}
</style>
