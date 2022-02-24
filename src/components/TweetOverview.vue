<template>
  <div class="container">
    <TweetModal :is-modal="isModal" @after-add-tweet="handleAddTweet" :current-user="currentUser"/>
    <TweetList />
  </div>
</template>

<script>
import TweetModal from '../components/TweetModal.vue'
import TweetList from '../components/TweetList.vue'

// 模擬使用者的資料
const dummyUser = {
  currentUser: {
    id: 0,
    name: "william",
    account: "william",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
    isAdmin: false,
  },
  isauthenticated: true
}


export default {
  name: "TweetOverview",
  components: {
    TweetList,
    TweetModal,
  },
  data() {
    return {
      tweets: [],
      isModal: false,
      currentUser: {
        id: -1,
        name: "",
        account: "",
        image: "",
        isAdmin: false,
      },
      isauthenticated: false
    }
  },
  created() {
    this.fetchTweets();
    this.fetchCurrentUser();
  },
  methods: {
    // 向伺服器取得推文的函式
    fetchTweets() {
      // TODO：向伺服器拉取tweets

     
    },
    // 向伺服器新增推文的函式
    handleAddTweet(text) {
      // TODO：向伺服器傳送貼文

      console.log(text);
    },
    // 向伺服器取得登入者資料的函式
    fetchCurrentUser() {
      // TODO：向伺服器抓取使用者資訊

      this.currentUser = {
        ...this.currentUser,
        ...dummyUser.currentUser
      }

      this.isauthenticated = dummyUser.isauthenticated
    },
    // 向伺服器新增推文加入喜歡的函式
    handleAddLike(tweetId) {
      // TODO：向伺服器新增推文加入喜歡

      this.tweets = this.tweets.map((tweet) => {
        if (tweet.id === tweetId) {
          return {
            ...tweet,
            likeCount: tweet.likeCount + 1,
          };
        } else {
          return tweet;
        }
      });
    },
  },
};
</script>
