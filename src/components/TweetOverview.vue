<template>
  <div class="container">
    <TweetModal :is-modal="false" />
    <ReplyModal
      v-show="replyModalSwitch"
      @closeModal="closeModal('reply')"
      :tweet="modalTweets"
    />
    
    <TweetList @openReplyModal="handleOpenModal" />
  </div>
</template>

<script>
import TweetModal from "../components/TweetModal.vue";
import TweetList from "../components/TweetList.vue";
import { modalController } from "../utils/mixins.js";
import ReplyModal from "../components/ReplyModal.vue";

export default {
  name: "TweetOverview",
  mixins: [modalController],
  components: {
    TweetList,
    TweetModal,
    ReplyModal,
  },

  methods: {},
};
</script>
