<template>
  <ul class="container">
    <li v-for="reply in replys" :key="reply.id" class="tweet-item">
      <img class="image" :src="currentUser.image | imageFilter" />
      <div class="tweet-context">
        <div class="tweet-info">
          <div class="name">{{ currentUser.name }}</div>
          <div class="account">@{{ currentUser.account }}</div>
          <div class="dot">．</div>
          <div class="time">{{ reply.createAt | fromNow }}</div>
        </div>
        <div class="reply-info">
          <span class="reply-text">回覆</span>
          <router-link
            class="link"
            :to="{ name: 'userTweets', params: { id: reply.user.id } }"
            >@{{ reply.user.account }}</router-link
          >
        </div>
        <div class="tweet-content">
          {{ reply.content }}
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
import { emptyImageFilter, dateFilter } from "../utils/mixins.js";
import dummyCreater from "../utils/dummyCreater.js";
const dummyData = dummyCreater.createReplys(10);
const dummyUser = {
  id: 1,
  name: "John Doe",
  account: "heyjohn",
};
export default {
  mixins: [emptyImageFilter, dateFilter],
  data() {
    return {
      replys: [],
      currentUser: {},
    };
  },
  created() {
    this.fetchReply();
    this.fetchUser();
  },
  methods: {
    fetchReply() {
      this.replys = [...dummyData];
    },
    fetchUser() {
      this.currentUser = dummyUser;
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
.link {
  color: var(--primary-color);
}
.tweet-info {
  margin-bottom: 0 !important;
}
</style>
