<template>
  <div class="card-wrapper">
    <img :src="tweet.image" alt="user-image" />
    <div class="user-info">
      <span class="name">{{ tweet.name }}</span>
      <span class="account">{{ tweet.account | addAtFilter }}</span>
      <span class="dot">·</span>
      <span class="created-time">{{ tweet.createdAt }}</span>
      <div class="user-tweet">
        {{ tweet.tweetContent }}
      </div>
    </div>
    <div class="cross-icon">
      <i class="fas fa-times" @click="deleteTweet(tweet.id)"></i>
    </div>
  </div>
</template>

<script>
import { Filters } from "../utils/mixins";

export default {
  name: "adminTweetListCard",
  mixins: [Filters],
  props: {
    tweet: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteTweet(tweetId) {
      // 將刪除推文事件傳遞至父元件
      this.$emit("after-delete-tweet", tweetId);
    },
  },
};
</script>

<style lang="scss" scoped>
// 載入extend的file
@import "../assets/scss/extends.scss";

.card-wrapper {
  position: relative;
  display: flex;
  border-bottom: 1px solid var(--share-border-color);
  width: 150%;
  padding: 1rem;
  // 使用者圖像樣式設定
  > img {
    @extend %share-avatar-style;
  }
  // 使用者資訊樣式設定
  > .user-info {
    margin-left: 1rem;
    > .account,
    .dot,
    .created-time {
      @extend %share-user-info-style;
    }
    > .user-tweet {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      width: 50%;
    }
  }
  // 叉按鈕樣式設定
  > .cross-icon {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    font-size: 1.5rem;
    color: var(--mute-color);
    cursor: pointer;
  }
}
</style>
