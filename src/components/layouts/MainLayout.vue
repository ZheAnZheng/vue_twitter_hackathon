<template>
  <div>
    <MobileNavbar @openModal="openModal('tweet')" />
    <Navbar @openModal="openModal('tweet')" />
    <Header :isReady="isHeaderReady" />
    <PopularList />
    <transition name="fade">
      <TweetModal
        class="modal"
        :is-modal="true"
        v-show="tweetModalSwitch"
        @closeModal="closeModal('tweet')"
      />
    </transition>
    <div class="slot" v-if="isRouteAlive">
      <slot ></slot>
    </div>
  </div>
</template>

<script>
import MobileNavbar from "../MobileNavbar.vue";
import PopularList from "../PopularList.vue";
import Navbar from "../Navbar.vue";
import Header from "../Header.vue";
import TweetModal from "../TweetModal.vue";
import { modalController } from "../../utils/mixins.js";
export default {
  mixins: [modalController],
  components: {
    MobileNavbar,
    Navbar,
    Header,
    PopularList,
    TweetModal,
  },
  data() {
    return {
      isRouteAlive: true,
      isHeaderReady: false,
    };
  },
  provide() {
    return {
      reload: this.reload,
      turnHeaderShow: this.turnHeaderShow,
    };
  },
  methods: {
    reload() {
      this.isRouteAlive = false;
      this.$nextTick(() => {
        this.isRouteAlive = true;
      });
    },
    turnHeaderShow() {
      this.isHeaderReady = true;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/fadeTransition";
.slot {
  padding-top: 55px;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

@media screen and (min-width: 865px) {
  .slot {
    margin-left: 25%;
    padding-top: 55px;
    width: 75%;
  }
}
@media screen and (min-width: 1085px) {
  .slot {
    width: 50%;
  }
}
</style>
