<template>
  <ul class="container">
    <li v-for="reply in replys" :key="reply.id" class="tweet-item">
      <img class="image" :src="currentUser.image | imageFilter" />
      <div class="tweet-context">
        <div class="tweet-info">
          <div class="name">{{ currentUser.name }}</div>
          <div class="account">@{{ currentUser.account }}</div>
          <div class="dot">．</div>
          <div class="time">3小時</div>
        </div>
        <div class="reply-info">
          <span class="reply-text">回覆</span>
          <router-link class="link" to="#"
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
import emptyImage from "../assets/Logo@X2.png";
const dummyData = [
  {
    id: 1,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    createAt: "2022-1",
    user: {
      id: 2,
      name: "ammy",
      account: "heyammy",
    },
  },
];
const dummyUser = {
  id: 1,
  name: "John Doe",
  account: "heyjohn",
};
export default {
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
    imageFilter(val) {
      if (!val) {
        return emptyImage;
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
