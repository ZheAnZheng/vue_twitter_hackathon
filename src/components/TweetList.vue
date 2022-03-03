<template>
  <ul class="container">
    <BaseSpinner v-if="isLoading" />
    <template v-else>
      <li
        v-for="tweet in tweets"
        :key="`${Math.random() + tweet.id}`"
        class="tweet-item"
      >
        <router-link :to="{ name: 'userTweets', params: { id: tweet.UserId } }">
          <img class="image" :src="tweet.userAvatar | imageFilter" />
        </router-link>
        <router-link :to="{ name: 'tweetStory', params: { id: tweet.id } }">
          <div class="tweet-context">
            <div class="tweet-info">
              <router-link
                class="name"
                :to="{ name: 'userTweets', params: { id: tweet.UserId } }"
                >{{ tweet.userName }}</router-link
              >
              <div class="account">@{{ tweet.userAccount }}</div>
              <div class="dot">．</div>
              <div class="time">{{ tweet.createdAt | fromNow }}</div>
            </div>
            <div class="tweet-content">
              <p>
                {{ tweet.description }}
              </p>
            </div>
          </div>
        </router-link>
        <div class="tweet-relative">
          <button class="message" @click="$emit('openReplyModal', { tweet })">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.77881 0.40127L5.18631 0.39502H5.18506C2.45131 0.39502 0.310059 2.53689 0.310059 5.27127C0.310059 7.83252 2.30131 9.77502 4.97568 9.87752V12.27C4.97568 12.3375 5.00318 12.4488 5.05068 12.5219C5.13943 12.6625 5.29068 12.7388 5.44568 12.7388C5.53193 12.7388 5.61881 12.715 5.69693 12.665C5.86193 12.56 9.74256 10.0775 10.7519 9.22377C11.9407 8.21752 12.6519 6.74252 12.6538 5.27877V5.26814C12.6501 2.53877 10.5101 0.401269 7.77881 0.400644V0.40127ZM10.1457 8.50877C9.43693 9.10877 7.10693 10.6369 5.91318 11.4106V9.41877C5.91318 9.16002 5.70381 8.95002 5.44443 8.95002H5.19693C2.90943 8.95002 1.24818 7.40252 1.24818 5.27127C1.24818 3.06252 2.97818 1.33252 5.18568 1.33252L7.77756 1.33877H7.77881C9.98631 1.33877 11.7163 3.06752 11.7176 5.27377C11.7157 6.46752 11.1288 7.67627 10.1463 8.50877H10.1457Z"
                fill="#657786"
              />
            </svg>

            <span>{{ tweet.repliedCount | emptyFilter }}</span>
          </button>
          <!-- 實心 -->
          <button
            class="like"
            v-if="tweet.isLiked"
            :disabled="isProcessing"
            :class="{ activeButton: isProcessingButton(tweet.id) }"
            @click="deleteLike(tweet.id)"
          >
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 19.6381H10.986C8.40295 19.5901 0.949951 12.8561 0.949951 6.47812C0.949951 3.41412 3.47495 0.724121 6.35295 0.724121C8.64295 0.724121 10.183 2.30412 10.999 3.45412C11.813 2.30612 13.353 0.724121 15.644 0.724121C18.524 0.724121 21.048 3.41412 21.048 6.47912C21.048 12.8551 13.594 19.5891 11.011 19.6361H11V19.6381Z"
                fill="#E0245E"
              />
            </svg>

            <span class="like-text">{{ tweet.likedCount | emptyFilter }}</span>
          </button>
          <!-- 空心 -->
          <button
            class="like"
            :class="{ activeButton: isProcessingButton(tweet.id) }"
            v-else
            @click="addLike(tweet.id)"
            :disabled="isProcessing"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 12.5236H6.49125C4.87687 12.4936 0.21875 8.28489 0.21875 4.29864C0.21875 2.38364 1.79687 0.702393 3.59562 0.702393C5.02687 0.702393 5.98937 1.68989 6.49937 2.40864C7.00812 1.69114 7.97062 0.702393 9.4025 0.702393C11.2025 0.702393 12.78 2.38364 12.78 4.29927C12.78 8.28427 8.12125 12.493 6.50687 12.5224H6.5V12.5236ZM3.59625 1.64052C2.29625 1.64052 1.15687 2.88302 1.15687 4.29989C1.15687 7.88739 5.55312 11.5474 6.50062 11.5861C7.44937 11.5474 11.8444 7.88802 11.8444 4.29989C11.8444 2.88302 10.705 1.64052 9.405 1.64052C7.825 1.64052 6.9425 3.47552 6.935 3.49364C6.79125 3.84489 6.2125 3.84489 6.06812 3.49364C6.05937 3.47489 5.1775 1.64052 3.59687 1.64052H3.59625Z"
                fill="#657786"
              />
            </svg>
            <span>{{ tweet.likedCount | emptyFilter }}</span>
          </button>
        </div>
      </li>
      <li class="tweet-item" v-show="!tweets.length">
        <div class="no-data-item">暫無推文資料</div>
      </li>
    </template>
  </ul>
</template>

<script>
import { emptyImageFilter, dateFilter } from "../utils/mixins.js";
import BaseSpinner from "../components/UI/BaseSpinner.vue";
import tweetsAPI from "../apis/tweets.js";
import usersAPI from "../apis/users.js";
import { toast } from "../utils/helper.js";

export default {
  mixins: [emptyImageFilter, dateFilter],
  components: {
    BaseSpinner,
  },
  created() {
    const routeName = this.$route.name;
    const { id } = this.$route.params;
    if (routeName === "main") {
      this.fetchIndexTweets();
    } else if (routeName === "userTweets") {
      this.fetchUserTweets(id);
    } else if (routeName === "likeTweets") {
      this.fetchUserLikeTweets(id);
    }
  },
  data() {
    return {
      tweets: [],
      isLoading: true,
      isProcessing: false,
      prcessingTweetId: 0,
    };
  },
  watch: {
    $route(to) {
      const { id } = to.params;
      this.isLoading = true;
      if (to.name === "userTweets") {
        this.fetchUserTweets(id);
      } else if (to.name === "likeTweets") {
        this.fetchUserLikeTweets(id);
      }
    },
  },
  methods: {
    async fetchUserTweets(userId) {
      try {
        await this.tryFetchUserTweets(userId);
        this.isLoading = false;
      } catch (e) {
        toast.fireError("無法存取資料");
        console.log(e);
      }
    },
    async fetchUserLikeTweets(userId) {
      try {
        await this.tryFetchUserLikeTweets(userId);
        this.isLoading = false;
      } catch (e) {
        console.log(e);
        toast.fireError("無法讀取喜歡過推文");
      }
    },
    async fetchIndexTweets() {
      try {
        await this.tryFetchIndex();
        this.isLoading = false;
      } catch (e) {
        console.log(e);
        toast.fireError("無法讀取主頁");
      }
    },
    async addLike(tweetId) {
      try {
        this.isProcessing = true;
        this.prcessingTweetId = tweetId;
        await this.tryAddLike(tweetId);
      } catch (e) {
        console.log(e);
        toast.fireError("無法加入喜歡");
      } finally {
        this.isProcessing = false;
        this.prcessingTweetId = 0;
      }
    },
    async deleteLike(tweetId) {
      try {
        this.isProcessing = true;
        this.prcessingTweetId = tweetId;
        await this.tryDeleteLike(tweetId);
      } catch (e) {
        console.log(e);
        toast.fireError("無法取消喜歡");
      } finally {
        this.isProcessing = false;
        this.prcessingTweetId = 0;
      }
    },
    isProcessingButton(tweetId) {
      if (tweetId === this.prcessingTweetId) {
        return true;
      } else {
        return false;
      }
    },
    async tryFetchUserTweets(userId) {
      try {
        const response = await usersAPI.getTweets({ userId });
        if (response.statusText !== "OK") {
          throw Error(response.data.message);
        }
        this.tweets = response.data.map((data) => {
          const { User, ...tweet } = data;
          return {
            userAccount: User.account,
            userAvatar: User.avatar,
            userName: User.name,
            ...tweet,
          };
        });
      } catch (e) {
        console.log(e);
      }
    },
    async tryFetchUserLikeTweets(userId) {
      try {
        this.isLoading = true;
        const response = await usersAPI.getlikeTweets({ userId });
        if (response.statusText !== "OK") {
          throw new Error(response.data.message);
        }
        this.tweets = response.data.map((tweet) => {
          const { Tweet, ...data } = tweet;
          const { User } = Tweet;
          return {
            id: data.TweetId,
            createdAt: data.createdAt,
            likedCount: Tweet.likedCount,
            repliedCount: Tweet.repliedCount,
            updatedAt: data.updatedAt,
            userAccount: User.account,
            userAvatar: User.avatar,
            userName: User.name,
            UserId: data.UserId,
            description: Tweet.description,
            isLiked: data.likedTweet,
          };
        });
      } catch (e) {
        console.loge;
      }
    },
    async tryFetchIndex() {
      try {
        const response = await tweetsAPI.getAll();
        if (response.statusText !== "OK") {
          throw Error(response.data.message);
        }
        this.tweets = response.data.map((data) => {
          const { User, ...tweet } = data;

          return {
            userAccount: User.account,
            userAvatar: User.avatar,
            userName: User.name,
            ...tweet,
          };
        });
      } catch (e) {
        console.log(e);
      }
    },
    async tryAddLike(tweetId) {
      try {
        const response = await tweetsAPI.addLike({ tweetId });
        if (response.statusText !== "OK") {
          throw Error(response.data.message);
        }
        this.tweets = this.tweets.map((tweet) => {
          if (tweet.id === tweetId) {
            return {
              ...tweet,
              isLiked: true,
              likedCount: tweet.likedCount + 1,
            };
          } else {
            return tweet;
          }
        });
      } catch (e) {
        console.log(e);
      }
    },
    async tryDeleteLike(tweetId) {
      try {
        const response = await tweetsAPI.deleteLike({ tweetId });

        if (response.statusText !== "OK") {
          throw Error(response.data.message);
        }
        this.tweets = this.tweets.map((tweet) => {
          if (tweet.id === tweetId) {
            return {
              ...tweet,
              isLiked: false,
              likedCount: tweet.likedCount - 1,
            };
          } else {
            return tweet;
          }
        });
      } catch (e) {
        console.log(e);
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
a {
  color: var(--primary-text-color);
}

.tweet-relative {
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  column-gap: 50px;
  .message {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }
  span {
    font-size: 13px;
    color: var(--mute-color);
    margin-left: 10px;
  }

  .like {
    @extend .message;
  }
  .like-text {
    color: var(--like-color);
  }
}
button {
  border-radius: 2px;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.2);
  }
}
.activeButton {
  background-color: rgba(0, 0, 0, 0.2);
}
.no-data-item {
  height: 100px;
  line-height: 85px;
  color: var(--mute-color);

  margin: auto;
}
</style>
