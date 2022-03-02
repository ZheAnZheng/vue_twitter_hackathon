<template>
  <div class="container">
    <div key="edit-modal" class="edit-modal">
      <form @submit.prevent.stop="uploadEdit">
        <div class="modal-head">
          <div class="close" @click="cancelChangeAndCloseModal">
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
          <base-button
            class="save-button"
            :mode="'action'"
            :isDisabled="isProcessing"
          >
            儲存</base-button
          >
        </div>

        <!-- 背景圖 -->
        <div class="coverImage-group">
          <img class="cover-image" :src="editUser.cover | coverFilter" />
          <label class="cover-label" for="cover"
            ><svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.708 20H2.292C1.028 20 0 18.972 0 17.708V5.375C0 4.11 1.028 3.083 2.292 3.083H4.438C5.633 1.17 7.722 0 10 0C12.277 0 14.367 1.17 15.562 3.083H17.708C18.972 3.083 20 4.11 20 5.375V17.708C20 18.972 18.972 20 17.708 20ZM2.292 4.583C1.855 4.583 1.5 4.938 1.5 5.375V17.708C1.5 18.145 1.855 18.5 2.292 18.5H17.708C18.145 18.5 18.5 18.145 18.5 17.708V5.375C18.5 4.938 18.145 4.583 17.708 4.583H15.258C14.941 4.633 14.626 4.488 14.476 4.201C13.596 2.536 11.882 1.501 10 1.501C8.117 1.501 6.402 2.536 5.524 4.203C5.364 4.505 5.022 4.663 4.691 4.583H2.293H2.292Z"
                fill="white"
              />
              <path
                d="M9.99989 6.16699C7.31989 6.16699 5.13989 8.34699 5.13989 11.027C5.13989 13.707 7.31989 15.887 9.99989 15.887C12.6799 15.887 14.8599 13.707 14.8599 11.027C14.8599 8.34699 12.6799 6.16699 9.99989 6.16699ZM11.9999 11.75H10.7499V13C10.7499 13.414 10.4139 13.75 9.99989 13.75C9.58589 13.75 9.24989 13.414 9.24989 13V11.75H7.99989C7.58589 11.75 7.24989 11.414 7.24989 11C7.24989 10.586 7.58589 10.25 7.99989 10.25H9.24989V8.99999C9.24989 8.58599 9.58589 8.24999 9.99989 8.24999C10.4139 8.24999 10.7499 8.58599 10.7499 8.99999V10.25H11.9999C12.4139 10.25 12.7499 10.586 12.7499 11C12.7499 11.414 12.4139 11.75 11.9999 11.75Z"
                fill="white"
              />
            </svg>
          </label>
          <div class="deleteIcon" @click="deleteCoverImage">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.41412 7.99988L15.2071 2.20687C15.5971 1.81687 15.5971 1.18388 15.2071 0.792875C14.8171 0.401875 14.1841 0.402875 13.7931 0.792875L8.00012 6.58588L2.20712 0.792875C1.81712 0.402875 1.18412 0.402875 0.793119 0.792875C0.402119 1.18288 0.403119 1.81587 0.793119 2.20687L6.58612 7.99988L0.793119 13.7929C0.403119 14.1829 0.403119 14.8159 0.793119 15.2069C0.988119 15.4019 1.24312 15.4999 1.50012 15.4999C1.75712 15.4999 2.01212 15.4019 2.20712 15.2069L8.00012 9.41387L13.7931 15.2069C13.9881 15.4019 14.2431 15.4999 14.5001 15.4999C14.7571 15.4999 15.0121 15.4019 15.2071 15.2069C15.5971 14.8169 15.5971 14.1839 15.2071 13.7929L9.41412 7.99988Z"
                fill="white"
              />
            </svg>
          </div>
          <input
            id="cover"
            type="file"
            name="cover"
            accept="image/*"
            @change="handleCoverImageChagne"
          />
        </div>
        <div class="form-wrapper">
          <!-- 頭像 -->
          <div class="avatar-group">
            <label class="avatar-label" for="avatar"
              ><svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.708 20H2.292C1.028 20 0 18.972 0 17.708V5.375C0 4.11 1.028 3.083 2.292 3.083H4.438C5.633 1.17 7.722 0 10 0C12.277 0 14.367 1.17 15.562 3.083H17.708C18.972 3.083 20 4.11 20 5.375V17.708C20 18.972 18.972 20 17.708 20ZM2.292 4.583C1.855 4.583 1.5 4.938 1.5 5.375V17.708C1.5 18.145 1.855 18.5 2.292 18.5H17.708C18.145 18.5 18.5 18.145 18.5 17.708V5.375C18.5 4.938 18.145 4.583 17.708 4.583H15.258C14.941 4.633 14.626 4.488 14.476 4.201C13.596 2.536 11.882 1.501 10 1.501C8.117 1.501 6.402 2.536 5.524 4.203C5.364 4.505 5.022 4.663 4.691 4.583H2.293H2.292Z"
                  fill="white"
                />
                <path
                  d="M9.99989 6.16699C7.31989 6.16699 5.13989 8.34699 5.13989 11.027C5.13989 13.707 7.31989 15.887 9.99989 15.887C12.6799 15.887 14.8599 13.707 14.8599 11.027C14.8599 8.34699 12.6799 6.16699 9.99989 6.16699ZM11.9999 11.75H10.7499V13C10.7499 13.414 10.4139 13.75 9.99989 13.75C9.58589 13.75 9.24989 13.414 9.24989 13V11.75H7.99989C7.58589 11.75 7.24989 11.414 7.24989 11C7.24989 10.586 7.58589 10.25 7.99989 10.25H9.24989V8.99999C9.24989 8.58599 9.58589 8.24999 9.99989 8.24999C10.4139 8.24999 10.7499 8.58599 10.7499 8.99999V10.25H11.9999C12.4139 10.25 12.7499 10.586 12.7499 11C12.7499 11.414 12.4139 11.75 11.9999 11.75Z"
                  fill="white"
                />
              </svg>
            </label>
            <img class="avatar" :src="editUser.avatar | imageFilter" />
            <input
              id="avatar"
              type="file"
              name="avatar"
              accept="image/*"
              @change="handleAvatarChange"
            />
          </div>
          <div class="form-group" :class="{ invalid: isNameInvalid }">
            <label for="name">名稱</label>
            <input id="name" name="name" v-model="editUser.name" />

            <div class="text-count">
              <span v-show="nameTextLength > 50"> 字數過長 </span>
              <span v-show="nameTextLength < 1"> 名字不可為空 </span>
              {{ nameTextLength }}/50
            </div>
          </div>
          <div class="form-group" :class="{ invalid: isIntroInvalid }">
            <label for="description">自我介紹</label>
            <textarea
              rows="6"
              id="introduction"
              name="introduction"
              placeholder="尚無自我介紹"
              v-model="editUser.introduction"
            />
            <div class="text-count">
              <span v-show="isIntroInvalid">自我介紹超過160</span>
              {{ introTextLength }}/160
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import BaseButton from "./UI/BaseButton.vue";
import usersAPI from "../apis/users.js";
import { toast } from "../utils/helper.js";
import { emptyImageFilter } from "../utils/mixins.js";
import { mapState } from "vuex";
export default {
  components: {
    BaseButton,
  },
  mixins: [emptyImageFilter],
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editUser: {},
      isProcessing: false,
    };
  },
  watch: {
    user() {
      this.copyUser();
    },
    editUser: {
      handler: function (val) {
        return val;
      },
      deep: true,
    },
  },
  computed: {
    ...mapState(["currentUser"]),
    nameTextLength() {
      return this.editUser.name.length;
    },
    introTextLength() {
      return this.editUser.introduction.length;
    },
    isNameInvalid() {
      return this.nameTextLength > 50 || this.nameTextLength < 1;
    },
    isIntroInvalid() {
      return this.introTextLength > 160;
    },
  },
  created() {
    this.copyUser();
  },
  inject: ["reFetchProfileUser"],
  methods: {
    handleCoverImageChagne(e) {
      console.log(e);
      const { files } = e.target;
      if (files.length > 0) {
        this.editUser.cover = window.URL.createObjectURL(files[0]);
      } else {
        this.editUser.cover = "";
      }
    },
    handleAvatarChange(e) {
      const { files } = e.target;
      if (files.length > 0) {
        this.editUser.avatar = window.URL.createObjectURL(files[0]);
      }
    },
    deleteCoverImage() {
      this.editUser.coverImage =
        "https://via.placeholder.com/350x220/DFDFDF?text=No+Image";
    },
    copyUser() {
      this.editUser = Object.assign({}, this.user);
    },
    async uploadEdit(e) {
      try {
        if (this.checkFormInvalid()) {
          toast.fireWarning("填寫錯誤，請更新後送出");
          return;
        }
        this.isProcessing = true;
        const formData = new FormData(e.target);
        formData.append("password", this.currentUser.password);
        formData.append("account", this.currentUser.account);
        formData.append("email", this.currentUser.email);
        const response = await usersAPI.update({
          userId: this.currentUser.id,
          formData,
        });
        console.log(response);
        if (response.statusText !== "OK") {
          throw new Error(response.data.message);
        }
        this.saveEdit();
        this.isProcessing = false;
        this.reFetchProfileUser();
        toast.fireSuccess("修改成功");
      } catch (e) {
        console.log(e);
        this.isProcessing = false;
        toast.fireError("無法上傳修改");
      }
    },
    saveEdit() {
      const { avatar, cover, name, introduction } = this.editUser;
      this.user.avatar = avatar;
      this.user.cover = cover;
      this.user.name = name;
      this.user.introduction = introduction;
      this.$emit("handleCloseModal");
    },
    checkFormInvalid() {
      return this.isNameInvalid || this.isIntroInvalid;
    },
    cancelChangeAndCloseModal() {
      this.copyUser();
      this.$emit("handleCloseModal");
    },
  },
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
.d-none {
  display: none;
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
    font-size: 16px;
  }
}
.coverImage-group {
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    transition: all 0.2s ease-in;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &:hover {
    &::before {
      opacity: 1;
      background: rgba(99, 99, 99, 0.5);
    }
    .cover-label {
      opacity: 1;
    }
    .deleteIcon {
      opacity: 1;
    }
  }
}
.cover-label {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease-in;
}
.avatar-label {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  transition: all 0.2s ease-in;
  transform: translate(-50%, -50%);
}
.deleteIcon {
  opacity: 0;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 45%;
  transform: translate(50%, -50%);
  transition: all 0.2s ease-in;
}
.avatar-group {
  position: absolute;
  top: 0;
  left: 15px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  transform: translateY(-50%);
  &::before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 50%;
    transition: all 0.2s ease-in;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &:hover {
    &::before {
      opacity: 1;
      background: rgba(99, 99, 99, 0.5);
    }
    .avatar-label {
      opacity: 1;
    }
  }
}
input[name="cover"] {
  display: none;
}
input[name="avatar"] {
  display: none;
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
    border-radius: 50%;
    box-shadow: 0 0 0 3px var(--white-text-color);
  }
  .form-group {
    margin-bottom: 50px;
    background: var(--input-bg-color);
    border-bottom: 2px solid var(--mute-color);
    border-radius: 3px;
    &.invalid {
      border-bottom: 2px solid var(--alert-message-color);
      div,
      span {
        color: var(--alert-message-color);
      }
    }
  }

  label {
    padding: 0 15px;
    display: block;
    cursor: pointer;
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
