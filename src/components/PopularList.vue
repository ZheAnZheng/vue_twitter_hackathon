<template>
  <div class="container">
    <ul class="popularList">
      <li class="listItem head">Popular</li>
      <transition-group name="list">
        <li v-for="user in users" :key="user.id" class="listItem">
          <img class="image" :src="user.image" />
          <div class="user-info">
            <div class="name">{{ user.name }}</div>
            <div class="account">@{{ user.account }}</div>
          </div>
          <div class="button-wrapper">
            <base-button
              v-if="user.isFollowed"
              :mode="'action'"
              @handleClick="deleteFollowing(user.id)"
              >正在跟隨</base-button
            >
            <base-button
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
          class="listItem tail"
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
import BaseButton from "../components/UI/BaseButton.vue";
const dummyData = [
  {
    id: 1,
    name: "John Doe",
    account: "heyjohn",
    image: require("../assets/Photo.png"),
    isFollowed: true,
  },
  {
    id: 2,
    name: "apple",
    account: "apple",
    image: "",
    isFollowed: false,
  },
  {
    id: 3,
    name: "apple",
    account: "apple",
    image: "",
    isFollowed: false,
  },
  {
    id: 4,
    name: "apple",
    account: "apple",
    image: "",
    isFollowed: false,
  },
  {
    id: 5,
    name: "apple",
    account: "apple",
    image: "",
    isFollowed: false,
  },
  {
    id: 6,
    name: "apple",
    account: "apple",
    image: "",
    isFollowed: false,
  },
  {
    id: 7,
    name: "apple",
    account: "apple",
    image: "",
    isFollowed: false,
  },
  {
    id: 8,
    name: "apple",
    account: "apple",
    image: "",
    isFollowed: false,
  },
  {
    id: 9,
    name: "apple",
    account: "apple",
    image: "",
    isFollowed: false,
  },
  {
    id: 10,
    name: "apple",
    account: "apple",
    image: "",
    isFollowed: false,
  },
];
export default {
  components: {
    BaseButton,
  },
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
.listItem {
  width: 100%;
  height: 61px;
  display: flex;
  column-gap: 10px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: var(--input-bg-color);
  border-bottom: 1px solid var(--popular-line-color);
  .image {
    width: 50px;
    height: 50px;
    background-color: var(--avatar-bg-color);
    border-radius: 50%;
  }
  .user-info {
    flex: 2;
    font-size: 15px;
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

@media screen and (min-width: 865px) {
  .container {
    display: block;
  }
}
</style>
