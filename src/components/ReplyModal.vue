<template>
  <div class="container">
    <div class="reply-modal">
      <div class="close" @click="$emit('closeModal')">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.41412 7.99988L15.2071 2.20687C15.5971 1.81687 15.5971 1.18388 15.2071 0.792875C14.8171 0.401875 14.1841 0.402875 13.7931 0.792875L8.00012 6.58588L2.20712 0.792875C1.81712 0.402875 1.18412 0.402875 0.793119 0.792875C0.402119 1.18288 0.403119 1.81587 0.793119 2.20687L6.58612 7.99988L0.793119 13.7929C0.403119 14.1829 0.403119 14.8159 0.793119 15.2069C0.988119 15.4019 1.24312 15.4999 1.50012 15.4999C1.75712 15.4999 2.01212 15.4019 2.20712 15.2069L8.00012 9.41387L13.7931 15.2069C13.9881 15.4019 14.2431 15.4999 14.5001 15.4999C14.7571 15.4999 15.0121 15.4019 15.2071 15.2069C15.5971 14.8169 15.5971 14.1839 15.2071 13.7929L9.41412 7.99988Z"
            fill="#FF6600"
          />
        </svg>
      </div>
      <div class="tweet-block">
        <img class="avatar" :src="tweet.userAvatar | imageFilter" />
        <div class="tweet-info">
          <div class="tweet-owner">
            <div>{{ tweet.userName }}</div>
            <div>@{{ tweet.userAccount }}</div>
            <div>．</div>
            <div>{{ tweet.createdAt | fromNow }}</div>
          </div>
          <div class="tweet-content">
            {{ tweet.description }}
          </div>
          <div class="reply">
            回覆給<span>@{{ tweet.userAccount }}</span>
          </div>
        </div>
      </div>
      <span class="connect-line"></span>
      <div class="reply-block">
        <img class="avatar" :src="currentUser.avatar | imageFilter" />
        <div class="reply-content">
          <input
            id="reply"
            class="reply-input"
            v-model="reply"
            placeholder="推你的回覆"
          />
        </div>
      </div>
      <base-button
        class="reply-button"
        :mode="'action'"
        :position="'right'"
        @handleClick="submitReply(tweet.id)"
        >回覆</base-button
      >
    </div>
  </div>
</template>
<script>
import BaseButton from "./UI/BaseButton.vue";
import { dateFilter, emptyImageFilter } from "../utils/mixins.js";
import { toast } from "../utils/helper.js";
import { mapState } from "vuex";
import tweetsAPI from "../apis/tweets.js";
export default {
  mixins: [dateFilter, emptyImageFilter],
  components: {
    BaseButton,
  },
  data() {
    return {
      reply: "",
    };
  },
  props: {
    tweet: {
      type: Object,
      required: true,
    },
  },
  inject: ["reload"],
  methods: {
    async submitReply(tweetId) {
      try {
        if (this.isReplyValid) {
          const response = await tweetsAPI.createReply({
            tweetId,
            comment: this.reply,
          });
          console.log(response);
          if (response.statusText !== "OK") {
            throw Error(response.data.message);
          }
          this.$emit("closeModal");
          this.reload();
          toast.fireSuccess("回覆成功");
        }
      } catch (e) {
        console.log(e);
        toast.fireError("無法發送回覆");
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
    isReplyValid() {
      return this.reply.trim() !== "";
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.close {
  cursor: pointer;
  display: inline;
}
.reply-modal {
  padding: 15px;
  width: 600px;
  height: 450px;
  border-radius: 10px;
  background: var(--white-text-color);
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  float: left;
}
.tweet-block {
  margin-top: 35px;
  min-height: 150px;
  font-size: 15px;
  .tweet-info {
    margin-left: 60px;
  }
  .tweet-owner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    column-gap: 5px;
    margin-bottom: 5px;
    :nth-of-type(2) {
      color: var(--mute-color);
    }
    :nth-of-type(3) {
      color: var(--mute-color);
    }
    :nth-of-type(4) {
      color: var(--mute-color);
    }
  }
  .tweet-content {
    margin-bottom: 15px;
    min-height: 66px;
  }
  .reply {
    font-size: 13px;
    color: var(--mute-color);
    margin-bottom: 20px;
    span {
      color: var(--primary-color);
    }
  }
}
.connect-line {
  position: relative;
  display: block;
  &::before {
    content: "";
    position: absolute;
    display: block;
    top: -90px;
    left: 22px;
    height: 80px;
    transform: translate(50%, 0);
    width: 2px;
    background: var(--border-stroke-color);
  }
}
.reply-content {
  margin-left: 60px;
  margin-bottom: 141px;
  transform: translateY(50%);
}
.reply-button {
  height: 38px;
  width: 66px;
  font-size: 16px;

  &::after {
    content: "";
    display: block;
    clear: both;
  }
}
.reply-input {
  width: 100%;
  font-size: 18px;
  border: unset;
}
</style>
