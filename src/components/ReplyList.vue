<template>
  <ul class="container">
    <li v-for="reply in replies" :key="reply.id" class="tweet-item">
      <router-link
        :to="{ name: 'userTweets', params: { id: profileUser.data.id } }"
      >
        <img class="image" :src="profileUser.data.image | imageFilter" />
      </router-link>
      <div class="tweet-context">
        <div class="tweet-info">
          <div class="name">{{ profileUser.data.name }}</div>
          <div class="account">@{{ profileUser.data.account }}</div>
          <div class="dot">．</div>
          <div class="time">{{ reply.createdAt | fromNow }}</div>
        </div>
        <div class="reply-info">
          <span class="reply-text">回覆</span>

          <router-link
            class="link"
            :to="{ name: 'userTweets', params: { id: reply.UserId } }"
            >@{{ reply.Tweet.User.account }}</router-link
          >
        </div>
        <div class="tweet-content">
          {{ reply.comment }}
        </div>
      </div>
    </li>
    <li class="tweet-item no-data-item" v-show="replies.length === 0">
      <div class="no-data-item">暫無回覆資料</div>
    </li>
  </ul>
</template>
<script>
import { emptyImageFilter, dateFilter } from "../utils/mixins.js";

import usersAPI from "../apis/users.js";
import { toast } from "../utils/helper.js";

export default {
  mixins: [emptyImageFilter, dateFilter],
  data() {
    return {
      replies: [],
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUserReplied(id);
  },
  inject: {
    profileUser: {
      from: "profileUser",
      default: {
        id: -1,
      },
    },
  },
  methods: {
    async fetchUserReplied(userId) {
      try {
        const response = await usersAPI.getReplied({ userId });
        if (response.statusText !== "OK") {
          throw Error(response.data.message);
        }

        this.replies = [...response.data];
      } catch (e) {
        console.log(e);
        toast.fireError("讀取用戶回覆貼文失敗");
      }
    },
  },
  filters: {
    emptyFilter(val) {
      if (!val) {
        return 0;
      } else {
        return val;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/tweetListStyle.scss";
.reply-text {
  color: var(--mute-color);
}
.no-data-item {
  height: 100px;
  line-height: 85px;
  color: var(--mute-color);

  margin: auto;
}
.link {
  color: var(--primary-color);
}
.tweet-info {
  margin-bottom: 0 !important;
}
</style>
