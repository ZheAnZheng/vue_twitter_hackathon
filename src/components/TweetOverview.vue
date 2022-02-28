<template>
  <div class="container">
    <TweetModal :is-modal="false" />
    <transition name="fade">
      <ReplyModal
        v-show="replyModalSwitch"
        @closeModal="closeModal('reply')"
        :tweet="modalTweets"
      />
    </transition>

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

<style lang="scss" scoped>
@import "../assets/scss/fadeTransition";
</style>
