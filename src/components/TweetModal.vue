<template>
  <div class="modal-container" :class="tweetModalClass[0]">
    <div v-if="isModal" class="close-button">
      <img src="../assets/icon_close.png" alt="close-image">
    </div>
    <form :class="tweetModalClass[1]" @submit.prevent.stop="addTweet">
      <img :class="tweetModalClass[2]" :src="currentUser.image" alt="user-image">
      <textarea v-model="text" :class="tweetModalClass[3]" name="new-tweet" id="new-tweet" placeholder="有什麼新鮮事？"></textarea>
      <BaseButton class="button" :position="'right'" :mode="'action'" >推文</BaseButton>
    </form>
  </div>
</template>

<script>
import BaseButton from '../components/UI/BaseButton.vue'
import { Toast } from '../utils/helper'

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
      text: ''
    }
  },
  methods: {
    // 新增tweet的函式
    addTweet() {
      
      if (!this.text.trim()) {
        Toast.fire({
          icon: 'warning',
          title: '請輸入文字!!'
        })

        return
      }

      // 將事件傳至母元件
      this.$emit('after-add-tweet', this.text)
      this.text = ''
    }
  }
}
</script>

<style lang="scss" scoped>
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

    > .button {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      width: 5rem;
      color: var(--white-text-color);
    }
  }
}

.main-new-tweet {
  border-style: none;
  > .main-form {
    > .main-image {
      top: 0.5rem;
    }

    > .main-textarea {
      padding: 1.5rem 0 0 5rem;
      border-bottom: 0.6rem solid var(--share-border-color);
      height: 10rem;
    }

    > button {
      bottom: 1.5rem;
    }
  }
}
</style>