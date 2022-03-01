<template>
  <div class="card-wrapper">
    <div class="background-image" :style="user.backgroundImage">
      <img :src="user.image | imageFilter" alt="user-image" />
    </div>
    <div class="user-info">
      <div class="name">{{ user.name }}</div>
      <div class="account">{{ user.account | addAtFilter }}</div>
      <div class="icon">
        <div class="icon-reply">
          <i class="far fa-comment"></i>
          <span>{{ user.tweetCount }}</span>
        </div>
        <div class="icon-like">
          <i class="far fa-heart"></i>
          <span>{{ user.likeCount }}</span>
        </div>
      </div>
      <div class="follow">
        <div class="following">
          {{ user.following | addFollowingUnitFilter }}<span>跟隨中</span>
        </div>
        <div class="follower">
          {{ user.follower | addFollowerUnitFilter }}<span>跟隨者</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Filters } from "../utils/mixins";
import { emptyImageFilter } from '../utils/mixins'

export default {
  name: "AdminUsersCard",
  mixins: [Filters, emptyImageFilter],
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
// 每張卡片的樣式設定
.card-wrapper {
  height: 19rem;
  width: 15rem;
  border-radius: 15px;
  margin: 1rem;
  background-color: var(--user-card-background-color);
  // 背景圖片的樣式設定
  > .background-image {
    position: relative;
    height: 45%;
    border-radius: 15px 15px 0 0;
    // 個人貼圖的樣式設定
    > img {
      position: absolute;
      height: 6rem;
      width: 6rem;
      border-radius: 50%;
      bottom: -20%;
      left: 50%;
      transform: translateX(-50%);
      border: 4px solid white;
    }
  }
  // 個人資訊的樣式設定
  > .user-info {
    text-align: center;
    margin-top: 2rem;
    font-size: 15px;
    > .name {
      font-weight: 700;
    }
    > .account {
      color: var(--mute-color);
    }
    > .icon {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      > .icon-like {
        margin-left: 1rem;
      }
      > .icon-like,
      .icon-reply {
        > i {
          color: var(--mute-color);
        }
        > span {
          margin-left: 0.5rem;
        }
      }
    }
    > .follow {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      font-size: 14px;
      > .follower {
        margin-left: 1rem;
      }
      > .follower,
      .following {
        > span {
          color: var(--mute-color);
        }
      }
    }
  }
}
</style>
