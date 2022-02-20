<template>
  <div class="container">
    <ul class="tab-head">
      <li class="tab-item">
        <router-link :class="getClass('ownTweets')" :to="{ name: 'ownTweets' }"
          >推文</router-link
        >
      </li>
      <li class="tab-item">
        <router-link
          :class="getClass('replyTweets')"
          :to="{ name: 'replyTweets' }"
          >推文與回覆</router-link
        >
      </li>
      <li class="tab-item">
        <router-link
          :class="getClass('likeTweets')"
          :to="{ name: 'likeTweets' }"
          >喜歡的內容</router-link
        >
      </li>
    </ul>
    <div class="slot">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    getClass(route) {
      if (this.$route.name === route) {
        return "linking";
      } else {
        return "link";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
.tab-head {
  width: 100%;
  height: 54px;
  border-left: 1px solid var(--border-stroke-color);
  border-right: 1px solid var(--border-stroke-color);
  .tab-item {
    display: inline-block;
    width: 130px;
    height: 100%;
  }
  .link {
    position: relative;
    display: block;
    text-align: center;
    line-height: 54px;
    width: 100%;
    height: 100%;
    color: var(--mute-color);
    transition: all 0.2s ease-in;
    &:visited {
      color: var(--mute-color);
    }
    &:hover {
      color: var(--primary-color);
      &::after {
        transform: scaleX(1);
      }
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transform: scaleX(0);
      transition: all 0.2s ease-in;
      transform-origin: left;
      border-bottom: 2px solid var(--primary-color);
    }
  }
}

.linking {
  display: block;
  text-align: center;
  line-height: 54px;
  width: 100%;
  height: 100%;
  color: var(--mute-color);
  &:visited {
    color: var(--mute-color);
  }
  &.router-link-active {
    color: var(--primary-color);
    border-bottom: 2px solid var(--primary-color);
  }
}
.slot {
  width: 100%;
  height: 100%;
}
</style>
