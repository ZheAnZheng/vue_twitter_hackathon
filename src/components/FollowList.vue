<template>
  <div class="container">
    <ul class="tab-head">
      <li class="tab-item">
        <router-link :class="getClass('followed')" :to="{ name: 'followed' }">
          跟隨者</router-link
        >
      </li>
      <li class="tab-item">
        <router-link :class="getClass('following')" :to="{ name: 'following' }"
          >正在跟隨</router-link
        >
      </li>
    </ul>
    <ul class="followList">
      <li v-for="user in currentList" :key="user.id" class="list-item">
        <img class="image" :src="user.image | imageFilter" />
        <div class="user-info">
          <base-button
            v-if="user.isFollowed"
            class="follow-button"
            :mode="'action'"
            :position="'right'"
            @handleClick="addFollowing(user.id, 'followList')"
            >正在跟隨</base-button
          >
          <base-button
            v-else
            class="follow-button"
            :mode="'actionOutline'"
            :position="'right'"
            @handleClick="deleteFollowing(user.id, 'followList')"
            >跟隨</base-button
          >
          <div class="name">{{ user.name }}</div>
          <div class="account">@{{ user.account }}</div>

          <div class="introduction">
            {{ user.introduction }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import {
  activeLinkHandler,
  emptyImageFilter,
  followshipHandler,
} from "../utils/mixins.js";
import { mapState } from "vuex";
import BaseButton from "./UI/BaseButton.vue";

export default {
  components: { BaseButton },
  mixins: [activeLinkHandler, emptyImageFilter, followshipHandler],
  inject: ["profileUser"],
  data() {
    return {
      users: [],
    };
  },
  computed: {
    ...mapState(["currentUser"]),
    //透過路由顯示對應 跟隨列表資料
    currentList() {
      const routeName = this.$route.name;
      if (routeName === "following") {
        return this.profileUser.data.Followings;
      } else {
        console.log(this.profileUser.data);
        return this.profileUser.data.Followers;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/activeLink.scss";
.container {
  width: 100%;
  height: 100%;
}
.tab-head {
  width: 100%;
  height: 54px;
  display: flex;
  flex-direction: row;
  border-left: 1px solid var(--border-stroke-color);
  border-right: 1px solid var(--border-stroke-color);
  .tab-item {
    width: 130px;
    height: 100%;
  }
}
.followList {
  width: 100%;
  .list-item {
    height: 100%;
    width: 100%;
    padding: 15px 15px 10px 15px;
    border: 1px solid var(--border-stroke-color);
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    float: left;
  }
  .user-info {
    padding-left: 65px;
    height: 100%;
    width: 100%;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    .account {
      margin-bottom: 5px;
      color: var(--mute-color);
    }
  }
  .follow-button {
    height: 26px;
  }
}
</style>
