<template>
  <div class="admin-tweet-list-container">
    <BaseSpinner v-if="isLoading" />
    <transition-group name="slide" tag="li" mode="out-in">
      <adminTweetListCard
        v-for="tweet in tweetLists"
        :key="tweet.id"
        :initial-tweet="tweet"
        @after-delete-tweet="handleDeleteTweet"
      />
    </transition-group>
  </div>
</template>

<script>
import adminTweetListCard from "../components/AdminTweetListCard.vue";
import adminAPI from "../apis/admin";
import { toast } from "../utils/helper";
import BaseSpinner from "../components/UI/BaseSpinner.vue";

export default {
  name: "adminTweetList",
  components: {
    adminTweetListCard,
    BaseSpinner,
  },
  data() {
    return {
      tweetLists: [],
      isLoading: true,
    };
  },
  created() {
    this.fetchTweetLists();
  },
  methods: {
    // 向伺服器取得所有推文的函式
    async fetchTweetLists() {
      try {
        const { data } = await adminAPI.tweets.getAll();
        const { tweets } = data;

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        // 將取得的tweets放回tweetLists中
        this.tweetLists = tweets.map((tweet) => {
          const { name, account, avatar } = tweet.User;
          const { id, description, createdAt } = tweet;

          return {
            id,
            name,
            account,
            image: avatar,
            tweetContent: description,
            createdAt,
          };
        });

        this.isLoading = false;
      } catch (error) {
        console.log("Error", error);
        toast.fireError("目前無法取得所有推文，請稍後再試");
      }
    },
    // 向伺服器傳送刪除推文的函式
    async handleDeleteTweet(tweetId) {
      try {
        // 透過API向伺服器刪除推文
        const { data } = await adminAPI.tweets.delete({ tweetId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        // 將點擊到的推文刪除
        this.tweetLists = this.tweetLists.filter(
          (tweet) => tweet.id !== tweetId
        );
      } catch (error) {
        console.log("Error", error);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.slide-leave {
  transform: translateX(0);
  opacity: 1;
}
.slide-leave-active,
.slide-move {
  transition: all 1s ease;
}
.slide-leave-to {
  transform: translateX(1000px);
  opacity: 0;
}
.slide-leave-active {
  position: absolute;
  z-index: 9999;
}
</style>
