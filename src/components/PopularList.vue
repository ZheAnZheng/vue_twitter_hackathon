<template>
  <div class="container">
    <div class="popularList">
      <div class="listItem head">Popular</div>
      <div
        v-for="user in users"
        :class="{ show: !isShowAll }"
        :key="user.id"
        class="listItem"
      >
        <div class="image"></div>
        <div class="user-info">
          <div>{{ user.name }}</div>
          <div>@{{ user.account }}</div>
        </div>
        <div class="button-wrapper">
          <base-button v-if="user.isFollowed" :mode="'action'"
            >正在跟隨</base-button
          >
          <base-button v-else :mode="'actionOutline'">跟隨</base-button>
        </div>
      </div>
      <div class="listItem tail" v-show="!isShowAll" @click="showAll">
        顯示更多
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from "../components/UI/BaseButton.vue";
const dummyData = [
  {
    id: 1,
    name: "apple",
    account: "apple",
    imaga: "",
    isFollowed: true,
  },
  {
    id: 2,
    name: "apple",
    account: "apple",
    imaga: "",
    isFollowed: false,
  },
  {
    id: 3,
    name: "apple",
    account: "apple",
    imaga: "",
    isFollowed: false,
  },
  {
    id: 4,
    name: "apple",
    account: "apple",
    imaga: "",
    isFollowed: false,
  },
  {
    id: 5,
    name: "apple",
    account: "apple",
    imaga: "",
    isFollowed: false,
  },
  {
    id: 6,
    name: "apple",
    account: "apple",
    imaga: "",
    isFollowed: false,
  },
  {
    id: 7,
    name: "apple",
    account: "apple",
    imaga: "",
    isFollowed: false,
  },
  {
    id: 8,
    name: "apple",
    account: "apple",
    imaga: "",
    isFollowed: false,
  },
  {
    id: 9,
    name: "apple",
    account: "apple",
    imaga: "",
    isFollowed: false,
  },
  {
    id: 10,
    name: "apple",
    account: "apple",
    imaga: "",
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
      isShowAll: false,
    };
  },
  methods: {
    fetchTopUser() {
      this.users = [...dummyData];
    },
    showAll() {
      this.isShowAll = true;
    },
  },
};
</script>
<style lang="scss" scoped>
@mixin setOverSixHidden() {
  @for $i from 7 through 10 {
    &:nth-of-type(#{$i}) {
      display: none;
    }
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
  }
  .button-wrapper {
    flex: 2;
  }
}
.head {
  border-radius: 10px 10px 0 0;
}
.tail {
  border-radius: 0 0 10px 10px;
  color: var(--primary-color);
}

.show {
  @include setOverSixHidden();
}

@media screen and (min-width: 865px) {
  .container {
    display: block;
  }
}
</style>
