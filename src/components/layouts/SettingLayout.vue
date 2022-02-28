<template>
  <div>
    <Navbar @openModal="openModal('tweet')" />
    <Header />
    <transition name="fade">
      <TweetModal
        class="modal"
        :is-modal="true"
        v-show="tweetModalSwitch"
        @closeModal="closeModal('tweet')"
      />
    </transition>
    <div class="slot">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { modalController } from "../../utils/mixins.js";
import Navbar from "../Navbar.vue";
import Header from "../Header.vue";
import TweetModal from "../TweetModal.vue";
export default {
  mixins: [modalController],
  components: {
    Navbar,
    Header,
    TweetModal,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/fadeTransition";
.slot {
  padding-top: 55px;
}

@media screen and (min-width: 865px) {
  .slot {
    margin-left: 25%;
    padding-top: 55px;
    width: 50%;
  }
}
</style>
