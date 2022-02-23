<template>
  <div class="container">
    <TweetModal :tweet-modal-class="tweetModalClass" :is-modal="isModal" @after-add-tweet="handleAddTweet" :current-user="currentUser"/>
    <TweetList />
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
      replyCount: 34,
      likeCount: 344
    },
    {
      id: uuidv4(),
      name: 'Apple',
      image: 'https://randomuser.me/api/portraits/women/78.jpg',
      account: 'apple',
      createdAt: '3 小時',
      tweetContent: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
      replyCount: 34,
      likeCount: 344
    },
    {
      id: uuidv4(),
      name: 'Apple',
      image: 'https://randomuser.me/api/portraits/women/78.jpg',
      account: 'apple',
      createdAt: '3 小時',
      tweetContent: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
      replyCount: 34,
      likeCount: 344
    },
    {
      id: uuidv4(),
      name: 'Apple',
      image: 'https://randomuser.me/api/portraits/women/78.jpg',
      account: 'apple',
      createdAt: '3 小時',
      tweetContent: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
      replyCount: 34,
      likeCount: 344
    }]
}

// 模擬使用者的資料
const dummyUser = {
  currentUser: {
    id: 0,
    name: 'william',
    account: 'william',
    image: 'https://randomuser.me/api/portraits/men/88.jpg',
    isAdmin: false
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
      currentUser: {
        id: -1,
        name: '',
        account: '',
        image: '',
        isAdmin: false
      },
      isAuthentic: false
    }
  },
  created() {
    this.fetchTweets()
    this.fetchCurrentUser()
  },
  methods: {
    // 向伺服器取得推文的函式
    fetchTweets() {
      // TODO：向伺服器拉取tweets

      this.tweets = dummyData.tweets
    },
    // 向伺服器新增推文的函式
    handleAddTweet(text) {
      // TODO：向伺服器傳送貼文

      console.log(text)
    },
    // 向伺服器取得登入者資料的函式
    fetchCurrentUser() {
      // TODO：向伺服器抓取使用者資訊

      this.currentUser = {
        ...this.currentUser,
        ...dummyUser.currentUser
      }
    },
    // 向伺服器新增推文加入喜歡的函式
    handleAddLike(tweetId) {
      // TODO：向伺服器新增推文加入喜歡

      this.tweets = this.tweets.map( tweet => {
        if (tweet.id === tweetId) {
          return {
            ...tweet,
            likeCount: tweet.likeCount + 1
          }
        } else {
          return tweet
        }
      })
    }
  }
}
</script>