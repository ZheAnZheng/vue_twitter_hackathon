<template>
  <div :class="{ container: isModal }">
    <div class="modal-container" :class="{ 'main-new-tweet': !isModal }">
      <div v-if="isModal" class="close-button">
        <img
          src="../assets/icon_close.png"
          alt="close-image"
          @click="$emit('closeModal')"
        />
      </div>
      <form :class="{ 'main-form': !isModal }" @submit.prevent.stop>
        <img
          :class="{ 'main-image': isModal }"
          :src="currentUser.avatar | imageFilter"
          alt="user-image"
        />
        <textarea
          :class="{ 'main-textarea': !isModal }"
          name="new-tweet"
          id="new-tweet"
          placeholder="有什麼新鮮事？"
          v-model="text"
        ></textarea>
        <div class="alert-message-limit" v-show="isLimited">
          字數不可超過140字
        </div>
        <div class="alert-message-blank" v-show="isBlank">內容不可空白</div>
        <BaseButton
          class="button"
          :position="'right'"
          :mode="'action'"
          @handleClick="addTweet"
          :isDisabled="isProcessing"
          >推文</BaseButton
        >
      </form>
    </div>
  </div>
</template>

<script>
import BaseButton from "../components/UI/BaseButton.vue";
import { mapState } from "vuex";
import { emptyImageFilter } from "../utils/mixins.js";
import { toast } from "../utils/helper.js";
import tweetsAPI from "../apis/tweets.js";
export default {
  name: "TweetModal",
  mixins: [emptyImageFilter],
  components: {
    BaseButton,
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  props: {
    isModal: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      text: "",
      isLimited: false,
      isBlank: false,
      isProcessing: false,
    };
  },
  inject: {
    reload: {
      from: "reload",
      default: function () {
        return () => {};
      },
    },
  },
  methods: {
    async addTweet() {
      try {
        // 當輸入文字為空白或沒有輸入任何文字的提示訊息
        if (!this.text.trim()) {
          this.isBlank = true;
          return;
        } else if (this.text.trim().length > 140) {
          // 當輸入文字超過140字的提示訊息
          this.isLimited = true;
          return;
        }
        this.isProcessing = true;
        const response = await tweetsAPI.createTweet({
          description: this.text,
        });
        console.log(response);
        if (response.statusText !== "OK") {
          throw new Error(response.data.message);
        }

        this.text = "";
        this.$emit("closeModal");
        this.reload();
        this.isProcessing = false;
        toast.fireSuccess("推文成功");
      } catch (e) {
        console.log(e);
        this.isProcessing = false;
        toast.fireError("無法推文，請稍後再試");
      }
    },
  },
  watch: {
    // 利用watch監控text中文字的長度，達成提示訊息的開關
    text(word) {
      if (word.trim().length > 0) {
        this.isBlank = false;
      } else if (word.trim().length < 140) {
        this.isLimited = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/extends.scss";
.container {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-contents: center;
  align-items: center;
  z-index: 999;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.5);
}
.modal-container {
  border: 1px solid var(--share-border-color);
  margin: auto;
  border-radius: 10px;
  background-color: var(--primary-bg-color);
  width: 50%;
  > .close-button {
    width: 100%;
    padding: 0.5rem;
    border-bottom: 1px solid var(--share-border-color);
    border-radius: 10% 10% 0 0;
    > img {
      height: 1rem;
      width: 1rem;
      cursor: pointer;
    }
  }
  > form {
    position: relative;
    > img {
      position: absolute;
      top: 1rem;
      left: 1rem;
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
    }

    > textarea {
      padding: 2rem 0 0 5rem;
      border-style: none;
      border-color: var(--share-border-color);
      resize: none;
      font-size: 1rem;
      height: 18rem;
      width: 100%;
      color: var(--primary-text-color);
      &::placeholder {
        font-size: 1rem;
        color: var(--share-placeholder-color);
      }
    }

    > .alert-message-limit,
    .alert-message-blank {
      @extend %share-alert-message-style;
    }

    > .button {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      width: 5rem;
    }
  }
}
textarea {
  background: transparent;
}
.main-new-tweet {
  border-style: none;
  width: 100%;
  > .main-form {
    border: 1px solid var(--share-border-color);
    border-bottom: 0.6rem solid var(--share-border-color);
    > .main-image {
      top: 0.5rem;
    }

    > .main-textarea {
      padding: 1.5rem 0 0 5rem;
      height: 10rem;
    }

    > button {
      bottom: 1rem;
    }
  }
}
</style>
