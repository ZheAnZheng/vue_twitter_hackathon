<template>
  <ul class="container">
    <BaseSpinner v-if="isLoading" />
    <template v-else>
      <li v-for="reply in replies" :key="reply.id" class="tweet-item">
        <!-- 回覆的人 -->
        <router-link
          :to="{ name: 'userTweets', params: { id: `${reply.userId}` } }"
        >
          <img class="image" :src="reply.userAvatar | imageFilter" />
        </router-link>
        <div class="tweet-context">
          <div class="tweet-info">
            <div class="name">{{ reply.userName }}</div>
            <div class="account">@{{ reply.userAccount }}</div>
            <div class="dot">．</div>
            <div class="time">{{ reply.createdAt | fromNow }}</div>
          </div>
          <div class="reply-info">
            <span class="reply-text">回覆</span>

            <router-link
              class="link"
              :to="{ name: 'userTweets', params: { id: reply.tweetOwnerId } }"
              >@{{ reply.tweetOwnerAccount }}</router-link
            >
          </div>
          <div class="tweet-content">
            <p>
              {{ reply.comment }}
            </p>
          </div>
        </div>
      </li>
      <li class="tweet-item no-data-item" v-show="!replies.length">
        <div class="no-data-item">暫無回覆資料</div>
      </li>
    </template>
  </ul>
</template>
<script>
import { emptyImageFilter, dateFilter } from "../utils/mixins.js";
import BaseSpinner from "../components/UI/BaseSpinner.vue";
import usersAPI from "../apis/users.js";
import { toast } from "../utils/helper.js";

export default {
  components: {
    BaseSpinner,
  },
  mixins: [emptyImageFilter, dateFilter],
  props: {
    tweetReplies: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      replies: [],
      isLoading: true,
    };
  },
  watch: {
    tweetReplies(val) {
      this.replies = [...val];
    },
  },
  created() {
    const { id } = this.$route.params;
    const routeName = this.$route.name;

    if (routeName === "tweetStory") {
      this.replies = this.tweetReplies;
      this.isLoading = false;
    } else {
      this.fetchUserReplied(id);
    }
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

        this.replies = response.data.map((reply) => {
          const { Tweet, ...replyData } = reply;
          const { User } = Tweet;
          return {
            ...replyData,
            tweetOwnerId: Tweet.UserId,
            tweetOwnerAvatar: User.avatar,
            tweetOwnerName: User.name,
            tweetOwnerAccount: User.account,
            userName: this.profileUser.data.name,
            userAvatar: this.profileUser.data.avatar,
            userAccount: this.profileUser.data.account,
            userId: this.profileUser.data.id,
          };
        });
        this.isLoading = false;
      } catch (e) {
        console.log(e);
        toast.fireError("讀取用戶回覆貼文失敗");
        this.isLoading = false;
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
