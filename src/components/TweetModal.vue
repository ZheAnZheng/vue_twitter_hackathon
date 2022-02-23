<template>
  <div class="modal-container" :class="{'main-new-tweet':!isModal}">
    <div v-if="isModal" class="close-button">
      <img src="../assets/icon_close.png" alt="close-image">
    </div>
    <form :class="{'main-form':!isModal}" @submit.prevent.stop="addTweet">
      <img :class="{ 'main-image':isModal}" :src="currentUser.image" alt="user-image">
      <textarea v-model="text" :class="{'main-textarea':!isModal}" name="new-tweet" id="new-tweet" placeholder="有什麼新鮮事？"></textarea>
      <div class="alert-message-limit" v-show="isLimited">字數不可超過140字</div>
      <div class="alert-message-blank" v-show="isBlank">內容不可空白</div>
      <BaseButton class="button" :position="'right'" :mode="'action'" >推文</BaseButton>
    </form>
  </div>
</template>

<script>
import BaseButton from '../components/UI/BaseButton.vue'

export default {
  name: 'TweetModal',
  components: {
    BaseButton
  },
  props: {
    tweetModalClass: {
      type: Array,
      default: function() {
        return [{
          'main-new-tweet': false
        },
        {
          'main-form': false
        },
        {
          'main-image': false
        },
        {
          'main-textarea': false
        }]
      }
    },
    isModal: {
      type: Boolean,
      default: true
    },
    currentUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      text: '',
      isLimited: false,
      isBlank: false
    }
  },
  methods: {
    // 新增tweet的函式
    addTweet() {
      // 當輸入文字為空白或沒有輸入任何文字的提示訊息
      if (!this.text.trim()) {
        this.isBlank = true
        return
      } else if (this.text.trim().length > 140) { // 當輸入文字超過140字的提示訊息
        this.isLimited = true
        return
      }

      // 將事件傳至母元件
      this.$emit('after-add-tweet', this.text)
      this.text = ''
    }
  },
  watch: {
    // 利用watch監控text中文字的長度，達成提示訊息的開關
    text(word) {
      if (word.trim().length > 0) {
        this.isBlank =  false
      } else if (word.trim().length < 140) {
        this.isLimited = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/extends.scss';

.modal-container {
  border: 1px solid var(--share-border-color);
  border-radius: 10px;
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
      &::placeholder {
        font-size: 1rem;
        color: var(--share-placeholder-color);
      }
    }

    > .alert-message-limit, .alert-message-blank {
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

.main-new-tweet {
  border-style: none;
  > .main-form {
    border:1px solid var(--share-border-color);
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