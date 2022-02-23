<template>
  <div class="admin-tweet-list-container">
    <adminTweetListCard v-for="tweet in tweetLists" :key="tweet.id" :tweet="tweet" @after-delete-tweet="handleDeleteTweet"/>
  </div>
</template>

<script>
import adminTweetListCard from '../components/AdminTweetListCard.vue'

// 模擬所有推文的資料
const dummyData = [{
  id: 1,
  name: "L'Oréal",
  account: 'Loreal',
  image: 'https://randomuser.me/api/portraits/men/44.jpg',
  tweetContent: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
  createdAt: '10 小時'
},
{
  id: 2,
  name: "L'Oréal",
  account: 'Loreal',
  image: 'https://randomuser.me/api/portraits/men/44.jpg',
  tweetContent: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
  createdAt: '1 小時'
},
{
  id: 3,
  name: "L'Oréal",
  account: 'Loreal',
  image: 'https://randomuser.me/api/portraits/men/44.jpg',
  tweetContent: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
  createdAt: '100 小時'
},
{
  id: 4,
  name: "L'Oréal",
  account: 'Loreal',
  image: 'https://randomuser.me/api/portraits/men/44.jpg',
  tweetContent: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
  createdAt: '11 小時'
},
{
  id: 5,
  name: "L'Oréal",
  account: 'Loreal',
  image: 'https://randomuser.me/api/portraits/men/44.jpg',
  tweetContent: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
  createdAt: '15 小時'
}]


export default {
  name: 'adminTweetList',
  components: {
    adminTweetListCard
  },
  data() {
    return {
      tweetLists: []
    }
  },
  created() {
    this.fetchTweetLists()
  },
  methods: {
    fetchTweetLists() {
      // TODO：向伺服器取得所有推文的資料

      this.tweetLists = dummyData
    },
    handleDeleteTweet(tweetId) {
      // TODO：向伺服器傳送刪除推文的訊息

      // 將點擊到的推文刪除
      this.tweetLists = this.tweetLists.filter( tweet => tweet.id !== tweetId)
    }
  }
}
</script>