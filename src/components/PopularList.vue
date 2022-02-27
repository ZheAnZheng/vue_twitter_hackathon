<template>
  <div class="container">
    <ul class="popularList">
      <li class="list-item head">Popular</li>
      <transition-group name="list">
        <li v-for="user in showedUsers" :key="user.id" class="list-item">
          <img class="image" :src="user.image | imageFilter" />
          <div class="user-info">
            <div class="name">{{ user.name }}</div>
            <div class="account">@{{ user.account }}</div>
          </div>
          <div class="button-wrapper" v-show="user.id !== currentUser.id">
            <base-button
              class="popularList-button"
              v-if="user.isFollowed"
              key="followed"
              :mode="'action'"
              @handleClick="deleteFollowing(user.id, 'popular')"
              :disabled="isProcessing"
              >正在跟隨</base-button
            >
            <base-button
              class="popularList-button"
              :class="{ disabled: isProcessing }"
              v-else
              :mode="'actionOutline'"
              key="follow"
              @handleClick="addFollowing(user.id, 'popular')"
              :disabled="isProcessing"
              >跟隨</base-button
            >
          </div>
        </li>
      </transition-group>
      <transition name="list" @afterLeave="showAll">
        <li
          class="list-item tail"
          key="tail"
          v-show="tailShow && notOverSix"
          @click="tailShow = false"
        >
          顯示更多
        </li>
      </transition>
    </ul>
  </div>
</template>
<script>
import { emptyImageFilter, followshipHandler } from "../utils/mixins.js";
import BaseButton from "../components/UI/BaseButton.vue";
import usersAPI from "../apis/users.js";
import { mapState } from "vuex";
import { toast } from "../utils/helper.js";

export default {
  components: {
    BaseButton,
  },
  mixins: [emptyImageFilter, followshipHandler],
  created() {
    this.fetchTopUser();
  },
  data() {
    return {
      showedUsers: [],
      users: [],
      tailShow: true,
    };
  },
  computed: {
    ...mapState(["currentUser"]),

    notOverSix() {
      if (this.users.length > 6) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    async fetchTopUser() {
      try {
        const response = await usersAPI.getTop();

        if (response.statusText !== "OK") {
          throw Error(response.data.message);
        }
        this.users = [...response.data];
        this.showSixUsers();
      } catch (e) {
        console.log(e);
        toast.fireError("無法熱門用戶失敗");
      }
    },
    showSixUsers() {
      let maxLength = this.users.length > 6 ? 6 : this.users.length;
      for (let i = 0; i < maxLength; i++) {
        this.showedUsers.push(this.users[i]);
      }
    },
    showAll() {
      for (let i = 7; i < this.users.length; i++) {
        this.showedUsers.push(this.users[i]);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@mixin setDelay($num, $delay) {
  @for $i from 0 to 11 {
    &:nth-of-type(#{$i}) {
      transition-delay: $num;
    }
    $num: $num + $delay;
  }
}
.container {
  display: none;
  position: fixed;
  right: 0;
  width: 25%;
  height: 100%;
  background-color: var(--white-text-color);
  border-left: 1px solid var(--share-border-color);
}
.popularList {
  margin-top: 4%;
  margin-left: 6%;
  max-width: 350px;
  min-width: 270px;
}
.list-item {
  width: 100%;
  max-width: 350px;
  height: 61px;
  display: flex;
  column-gap: 10px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 15px;
  background-color: var(--input-bg-color);
  border-bottom: 1px solid var(--popular-line-color);
  .image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .user-info {
    flex: 2;
    .name {
      color: var(--primary-text-color);
    }
    .account {
      color: var(--mute-color);
    }
  }
}
.head {
  border-radius: 10px 10px 0 0;
  cursor: default;
}
.tail {
  border-radius: 0 0 10px 10px;
  color: var(--primary-color);
  cursor: pointer;
  &:hover {
    color: var(--primary-text-color);
  }
}
.popularList-button {
  height: 35px;
  font-size: 15px;
}
.list-leave {
  opacity: 1;
  transform: translateX(0);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-enter {
  opacity: 0;
  transform: translateX(30px);
}
.list-enter-active,
.list-leave-active,
.list-move {
  @include setDelay(0s, 0.2s);
  transition: all 0.2s ease;
}
.list-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.disabled {
  cursor: default;
}

@media screen and (min-width: 1085px) {
  .container {
    display: block;
  }
}
</style>
