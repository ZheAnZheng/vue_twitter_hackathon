<template>
  <div class="container">
    <div class="edit-modal">
      <div class="modal-head">
        <div class="close" @click="$emit('handleCloseModal')">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.41412 7.99988L15.2071 2.20687C15.5971 1.81687 15.5971 1.18388 15.2071 0.792875C14.8171 0.401875 14.1841 0.402875 13.7931 0.792875L8.00012 6.58588L2.20712 0.792875C1.81712 0.402875 1.18412 0.402875 0.793119 0.792875C0.402119 1.18288 0.403119 1.81587 0.793119 2.20687L6.58612 7.99988L0.793119 13.7929C0.403119 14.1829 0.403119 14.8159 0.793119 15.2069C0.988119 15.4019 1.24312 15.4999 1.50012 15.4999C1.75712 15.4999 2.01212 15.4019 2.20712 15.2069L8.00012 9.41387L13.7931 15.2069C13.9881 15.4019 14.2431 15.4999 14.5001 15.4999C14.7571 15.4999 15.0121 15.4019 15.2071 15.2069C15.5971 14.8169 15.5971 14.1839 15.2071 13.7929L9.41412 7.99988Z"
              fill="#FF6600"
            />
          </svg>
        </div>
        <div>編輯個人資料</div>
        <base-button class="save-button" :mode="'action'"> 儲存</base-button>
      </div>
      <form>
        <img class="cover-image" src="../assets/CoverPhoto.png" />
        <div class="form-wrapper">
          <img class="avatar" src="../assets/Photo.png" />

          <div class="form-group">
            <label for="name">名稱</label>
            <input id="name" v-model="user.name" />
            <div class="text-count">8/15</div>
          </div>
          <div class="form-group">
            <label for="description">自我介紹</label>
            <textarea rows="6" id="description" v-model="user.description" />
            <div class="text-count">0/160</div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import BaseButton from "./UI/BaseButton.vue";
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  components: {
    BaseButton,
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.edit-modal {
  width: 600px;
  height: max-content;
  border-radius: 10px;
  background: var(--white-text-color);
  .modal-head {
    padding: 15px;
    display: flex;

    flex-direction: row;
    column-gap: 40px;
    justify-content: space-between;
    align-items: center;
    :nth-child(2) {
      flex: 5;
      font-size: 19px;
      font-weight: 700;
      color: var(--primary-text-color);
    }
  }
  .close {
    cursor: pointer;
  }
  .save-button {
    flex-basis: 70px;
    height: 28px;
    font-size: 18px;
  }
}
form {
  .cover-image {
    height: 200px;
    border: 1px solid var(--white-text-color);
  }
  .form-wrapper {
    position: relative;
    padding: 0 15px;
    padding-top: 80px;
  }
  .avatar {
    position: absolute;
    top: 0;
    left: 15px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: 0 0 0 3px var(--white-text-color);
    transform: translateY(-50%);
  }
  .form-group {
    margin-bottom: 50px;
    background: var(--input-bg-color);
    border-bottom: 2px solid var(--mute-color);
    border-radius: 3px;
  }
  label {
    padding: 0 15px;
    display: block;
    color: var(--mute-color);
  }
  input {
    border: unset;
    width: 100%;
    padding: 0 15px;
    font-size: 19px;
    background: transparent;
  }
  .text-count {
    color: var(--mute-color);
    font-size: 15px;
    float: right;
    &:last-child {
      margin-bottom: 50px;
    }
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
  textarea {
    resize: none;
    @extend input;
  }
}
</style>
