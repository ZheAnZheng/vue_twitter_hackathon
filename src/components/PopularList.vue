<template>
  <div class="container">
    <ul class="popularList">
      <li class="list-item head">Popular</li>
      <transition-group name="list">
        <li v-for="user in users" :key="user.id" class="list-item">
          <img class="image" :src="user.image | imageFilter" />
          <div class="user-info">
            <div class="name">{{ user.name }}</div>
            <div class="account">@{{ user.account }}</div>
          </div>
          <div class="button-wrapper">
            <base-button
              class="popularList-button"
              v-if="user.isFollowed"
              :mode="'action'"
              @handleClick="deleteFollowing(user.id)"
              >正在跟隨</base-button
            >
            <base-button
              class="popularList-button"
              v-else
              :mode="'actionOutline'"
              @handleClick="addFollowing(user.id)"
              >跟隨</base-button
            >
          </div>
        </li>
      </transition-group>
      <transition name="list" @afterLeave="showAll">
        <li
          class="list-item tail"
          key="tail"
          v-show="tailShow"
          @click="tailShow = false"
        >
          顯示更多
        </li>
      </transition>
    </ul>
  </div>
</template>
<script>
import { emptyImageFilter } from "../utils/mixins.js";
import BaseButton from "../components/UI/BaseButton.vue";
import dummyCreater from "../utils/dummyCreater.js";
const dummyData = dummyCreater.createTopUser();
export default {
  components: {
    BaseButton,
  },
  mixins: [emptyImageFilter],
  created() {
    this.fetchTopUser();
  },
  data() {
    return {
      users: [],
      tailShow: true,
    };
  },
  methods: {
    fetchTopUser() {
      for (let i = 0; i < 6; i++) {
        this.users.push(dummyData[i]);
      }
    },
    showAll() {
      for (let i = 6; i < 10; i++) {
        this.users.push(dummyData[i]);
      }
    },
    addFollowing(userId) {
      this.users = this.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isFollowed: true,
          };
        } else {
          return user;
        }
      });
    },
    deleteFollowing(userId) {
      this.users = this.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isFollowed: false,
          };
        } else {
          return user;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@mixin setDelay($num, $delay) {
  @for $i from 6 to 11 {
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
}
.popularList {
  margin-top: 5%;
  margin-left: 3%;
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

@media screen and (min-width: 1085px) {
  .container {
    display: block;
  }
}
</style>
