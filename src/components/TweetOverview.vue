<template>
  <div class="container">
<<<<<<< HEAD
    <TweetModal :is-modal="false" />
    <ReplyModal
      v-show="replyModalSwitch"
      @closeModal="closeModal('reply')"
      :tweet="modalTweets"
    />
    <TweetList @openReplyModal="handleOpenModal" />
=======
    <TweetModal :is-modal="isModal" @after-add-tweet="handleAddTweet" :current-user="currentUser"/>
    <TweetList />
>>>>>>> origin/main
  </div>
</template>

<script>
<<<<<<< HEAD
import TweetModal from "../components/TweetModal.vue";
import TweetList from "../components/TweetList.vue";
import { modalController } from "../utils/mixins.js";
import ReplyModal from "../components/ReplyModal.vue";
=======
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
  isAuthenticated: true
}

>>>>>>> origin/main

export default {
  name: "TweetOverview",
  mixins: [modalController],
  components: {
    TweetList,
    TweetModal,
    ReplyModal,
  },
<<<<<<< HEAD

  methods: {},
=======
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
>>>>>>> origin/main
};
</script>
