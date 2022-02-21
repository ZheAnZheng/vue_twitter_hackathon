<template>
  <div class="card-wrapper">
    <img :src="tweet.image" alt="">
    <div class="user-wrapper">
      <div class="user-info">
        <span class="name">{{ tweet.name }}</span>
        <span class="account">{{ tweet.account | addAtFilter }} </span>
        <span class="dot">·</span>
        <span class="created-time">{{ tweet.createdAt }}</span>
      </div>
      <div class="user-tweet">
        {{ tweet.tweetContent }}
      </div>
      <div class="icon">
        <div class="icon-reply">
          <img src="../assets/icon_reply.png" alt="">
          <span>{{ tweet.replyCount }}</span>
        </div>
        <div class="icon-like">
          <img src="../assets/icon_like.png" alt="">
          <span>{{ tweet.likeCount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Filters } from '../utils/mixins'

export default {
  name: 'TweetListCard',
  mixins: [Filters],
  props: {
    tweet: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
// 卡片樣式設定
.card-wrapper {
  display: flex;
  padding-left: 1rem;
  border-bottom: 1px solid var(--share-border-color);
  margin-top: 1rem;
  // 圖像樣式設定
  > img {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
  }
  > .user-wrapper {
    margin-left: 0.5rem;
    // 帳號資訊樣式設定
    > .user-info {
      > .account, .dot, .created-time {
        padding-left: 0.2rem;
        color: var(--mute-color);
      }
    }
    > .user-tweet {
      margin-top: 0.5rem;
    }
    // icon樣式設定
    > .icon {
      display: flex;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      justify-content: space-between;
      width: 20%;
      > .icon-reply, .icon-like {
        display: flex;
        align-items: center;
        > img {
          height: 1rem;
        }
        > span {
          padding-left: 0.5rem;
          color: var(--mute-color);
        }
      }
    }
  }
  
}
</style>