<template>
  <div class="tweet-list-container">
    <TweetListCard v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" @after-add-like="deliveryAddLike"/>
  </div>
</template>

<script>
import TweetListCard from '../components/TweetListCard.vue'

export default {
  components: {
    TweetListCard
  },
  props: {
    tweets: {
      type: Array,
      required: true
    }
  },
  methods: {
    deliveryAddLike(tweetId) {
      // 將加入喜歡事件傳遞至父元件
      this.$emit('delivery-add-like', tweetId)
    }
  }
}
</script>