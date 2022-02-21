<template>
  <div class="tweet-list-container">
    <TweetListCard v-for="tweet in tweets" :key="tweet.id" :tweet="tweet"/>
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
  }
}
</script>