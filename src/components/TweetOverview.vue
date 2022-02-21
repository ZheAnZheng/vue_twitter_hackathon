<template>
  <div class="container">
    <TweetModal :tweet-modal-class="tweetModalClass" :is-modal="isModal" @after-add-tweet="handleAddTweet" :user="user"/>
    <TweetList :tweets="tweets" />
  </div>
</template>

<script>
import TweetModal from '../components/TweetModal.vue'
import TweetList from '../components/TweetList.vue'
import {v4 as uuidv4} from 'uuid'

// 模擬tweets的假資料
const dummyData = {
  tweets: [{
      id: uuidv4(),
      name: 'Apple',
      image: 'https://randomuser.me/api/portraits/women/78.jpg',
      account: 'apple',
      createdAt: '3 小時',
      tweetContent: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
      replyCount: '34',
      likeCount: '344'
    },
    {
      id: uuidv4(),
      name: 'Apple',
      image: 'https://randomuser.me/api/portraits/women/78.jpg',
      account: 'apple',
      createdAt: '3 小時',
      tweetContent: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
      replyCount: '34',
      likeCount: '344'
    },
    {
      id: uuidv4(),
      name: 'Apple',
      image: 'https://randomuser.me/api/portraits/women/78.jpg',
      account: 'apple',
      createdAt: '3 小時',
      tweetContent: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
      replyCount: '34',
      likeCount: '344'
    },
    {
      id: uuidv4(),
      name: 'Apple',
      image: 'https://randomuser.me/api/portraits/women/78.jpg',
      account: 'apple',
      createdAt: '3 小時',
      tweetContent: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
      replyCount: '34',
      likeCount: '344'
    }]
}

const dummyUser = {
  user1: {
    id: 0,
    name: 'william',
    account: 'william',
    image: 'https://randomuser.me/api/portraits/men/88.jpg'
  },
  isAuthentic: true
}


export default {
  name: 'TweetOverview',
  components: {
    TweetList,
    TweetModal
  },
  data() {
    return {
      tweets: [],
      tweetModalClass: [{
        'main-new-tweet': true
      },
      {
        'main-form': true
      },
      {
        'main-image': true,
      },
      {
        'main-textarea': true
      }],
      isModal: false,
      user: {
        id: -1,
        name: '',
        account: '',
        image: ''
      },
      isAuthentic: false
    }
  },
  created() {
    this.fetchTweets()
    this.fetchUser()
  },
  methods: {
    fetchTweets() {
      // TODO：向伺服器拉取tweets

      this.tweets = dummyData.tweets
    },
    handleAddTweet(text) {
      // TODO：向伺服器傳送貼文

      console.log(text)
    },
    fetchUser() {
      // TODO：向伺服器抓取使用者資訊

      this.user = {
        ...this.user,
        ...dummyUser.user1
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>