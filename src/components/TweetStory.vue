<template>
  <div class="container">
    <ReplyModal
      v-show="replyModalSwitch"
      @closeModal="closeModal('reply')"
      :tweet="tweet"
    />
    <div class="tweet-info">
      <div class="user-info">
        <img src="../assets/Photo.png" />
        <div class="name-wrapper">
          <div>{{ tweet.userName }}</div>
          <div>@{{ tweet.userAccount }}</div>
        </div>
      </div>
      <div class="content">
        {{ tweet.description }}
      </div>
      <div class="date">{{ tweet.createdAt | fromNow }}</div>
      <div class="tweet-relative">
        <div>{{ tweet.repliedCount }}<span>回覆</span></div>
        <div>{{ tweet.likedCount }}<span>喜歡次數</span></div>
      </div>
      <div class="icon" @click="openModal('reply')">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5576 2.80254L12.3726 2.79004H12.3701C6.90262 2.79004 2.62012 7.07379 2.62012 12.5425C2.62012 17.665 6.60262 21.55 11.9514 21.755V26.54C11.9514 26.675 12.0064 26.8975 12.1014 27.0438C12.2789 27.325 12.5814 27.4775 12.8914 27.4775C13.0639 27.4775 13.2376 27.43 13.3939 27.33C13.7239 27.12 21.4851 22.155 23.5039 20.4475C25.8814 18.435 27.3039 15.485 27.3076 12.5575V12.5363C27.3001 7.07754 23.0201 2.80254 17.5576 2.80129V2.80254ZM22.2914 19.0175C20.8739 20.2175 16.2139 23.2738 13.8264 24.8213V20.8375C13.8264 20.32 13.4076 19.9 12.8889 19.9H12.3939C7.81887 19.9 4.49637 16.805 4.49637 12.5425C4.49637 8.12504 7.95637 4.66504 12.3714 4.66504L17.5551 4.67754H17.5576C21.9726 4.67754 25.4326 8.13504 25.4351 12.5475C25.4314 14.935 24.2576 17.3525 22.2926 19.0175H22.2914Z"
            fill="#657786"
          />
        </svg>
      </div>
      <transition name="like" mode="out-in">
        <!-- TODO get tweets/:id 缺isLiked -->
        <!-- 喜愛功能未實行 -->
        <div class="icon" key="redHeart" v-if="isLike" @click="isLike = false">
          <svg
            width="30"
            height="30"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19.6381H10.986C8.40295 19.5901 0.949951 12.8561 0.949951 6.47812C0.949951 3.41412 3.47495 0.724121 6.35295 0.724121C8.64295 0.724121 10.183 2.30412 10.999 3.45412C11.813 2.30612 13.353 0.724121 15.644 0.724121C18.524 0.724121 21.048 3.41412 21.048 6.47912C21.048 12.8551 13.594 19.5891 11.011 19.6361H11V19.6381Z"
              fill="#E0245E"
            />
          </svg>
        </div>
        <div class="icon" key="emptyHeart" v-else @click="isLike = true">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 27.0473H14.9825C11.7537 26.9873 2.4375 18.5698 2.4375 10.5973C2.4375 6.76728 5.59375 3.40479 9.19125 3.40479C12.0537 3.40479 13.9787 5.37979 14.9987 6.81729C16.0162 5.38229 17.9412 3.40479 20.805 3.40479C24.405 3.40479 27.56 6.76729 27.56 10.5985C27.56 18.5685 18.2425 26.986 15.0137 27.0448H15V27.0473ZM9.1925 5.28104C6.5925 5.28104 4.31375 7.76603 4.31375 10.5998C4.31375 17.7748 13.1062 25.0948 15.0012 25.1723C16.8987 25.0948 25.6887 17.776 25.6887 10.5998C25.6887 7.76603 23.41 5.28104 20.81 5.28104C17.65 5.28104 15.885 8.95104 15.87 8.98729C15.5825 9.68979 14.425 9.68979 14.1362 8.98729C14.1187 8.94979 12.355 5.28104 9.19375 5.28104H9.1925Z"
              fill="#657786"
            />
          </svg>
        </div>
      </transition>
    </div>
    <!-- replies尚未完成 -->
    <ReplyList />
  </div>
</template>
<script>
import ReplyModal from "../components/ReplyModal.vue";
import { modalController, dateFilter } from "../utils/mixins.js";
import tweetsAPI from "../apis/tweets.js";
import { toast } from "../utils/helper.js";
import ReplyList from "../components/ReplyList.vue";
export default {
  mixins: [modalController, dateFilter],
  components: {
    ReplyList,
    ReplyModal,
  },
  created() {
    const { id } = this.$route.params;
    this.fetchTweet(id);
  },
  data() {
    return {
      isLike: true,
      tweet: {},
      replies: [],
    };
  },
  methods: {
    async fetchTweet(tweetId) {
      try {
        const response = await tweetsAPI.get({ tweetId });
        if (response.statusText !== "OK") {
          throw new Error(response.data.message);
        }
        console.log(response.data);
        const { User, Replies, ...tweet } = response.data;
        console.log(Replies);
        this.tweet = {
          userAvatar: User.avatar,
          userName: User.name,
          userAccount: User.account,
          ...tweet,
        };
        this.replies = [...Replies];
      } catch (e) {
        console.log(e);
        toast.fireError("無法讀取推文");
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
.tweet-info {
  width: 100%;
  height: 100%;
  background-color: var(--input-text-color);
  border: 1px solid var(--border-stroke-color);
  padding: 18px 15px;
  .user-info {
    display: flex;
    flex-direction: row;
    font-size: 15px;

    margin-bottom: 10px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }
    .name-wrapper div {
      &:nth-child(1) {
        color: var(--primary-text-color);
      }
      &:nth-child(2) {
        color: var(--mute-color);
      }
    }
  }
  .content {
    width: 100%;
    font-size: 23px;
    font-weight: 400;
    color: var(--primary-text-color);
    margin-bottom: 15px;
  }
  .date {
    font-size: 15px;
    color: var(--mute-color);
    border-bottom: 1px solid var(--border-stroke-color);
    padding-bottom: 15px;
    margin-bottom: 20px;
  }
  .tweet-relative {
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border-stroke-color);
    margin-bottom: 15px;
    div {
      font-weight: 500;
      display: inline-block;
      margin-right: 20px;

      span {
        margin-left: 2px;
        color: var(--mute-color);
      }
    }
  }
  .icon {
    display: inline-block;
    margin-right: 100px;
    cursor: pointer;
  }
}

.like-enter-active {
  animation: heartPomp 0.6s ease-in;
}
.show-enter {
  transform: scale(0) translate(50px, -10px);
  opacity: 0;
}
.show-enter-active {
  transition: all 2s ease;
}
.show-enter-to {
  transform: scale(1) translate(0, 0);
  opacity: 1;
}
@keyframes heartPomp {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  30% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1);
  }
  80% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@media screen and (min-width: 865px) {
  .icon {
    display: inline-block;
    margin-right: 150px;
    cursor: pointer;
  }
}
</style>
