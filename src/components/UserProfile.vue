<template>
  <div class="container">
    <transition name="fade">
      <ProfileEditModal
        key="profile"
        v-show="modalSwitch"
        @handleCloseModal="closeModal('profileEdit')"
        :user="currentUser"
      />
    </transition>
    <transition name="fade">
      <ReplyModal
        key="reply"
        v-show="replyModalSwitch"
        @closeModal="closeModal('reply')"
        :tweet="modalTweets"
      />
    </transition>

    <img class="cover-image" :src="user.cover | coverFilter" />
    <div class="user-info">
      <img class="avatar" :src="user.avatar | imageFilter" />
      <div class="button-wrapper" v-if="currentUser.id === user.id">
        <base-button
          class="profile-button"
          :mode="'actionOutline'"
          :position="'right'"
          @handleClick="openModal('profileEdit')"
          >編輯個人資料</base-button
        >
      </div>
      <!-- 追隨邏輯 -->
      <div class="button-wrapper" v-else>
        <base-button
          class="profile-button"
          :mode="'actionOutline'"
          :position="'right'"
          @handleClick="addFollowing(user.id, 'profile')"
          :isDisabled="isProcessing"
          v-if="!user.isFollowed"
          >跟隨</base-button
        >
        <base-button
          class="profile-button"
          :mode="'action'"
          :position="'right'"
          :isDisabled="isProcessing"
          @handleClick="deleteFollowing(user.id, 'profile')"
          v-else
          >正在跟隨</base-button
        >

        <base-button
          class="icon-button"
          :mode="'actionOutline'"
          :position="'right'"
          v-if="true"
        >
          <svg
            width="21"
            height="21"
            viewBox="0 -1 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.3351 2.85253H18.2132V0.728027C18.2132 0.365777 17.9192 0.0717773 17.557 0.0717773C17.1947 0.0717773 16.9007 0.365777 16.9007 0.728027V2.85253H14.7788C14.4166 2.85253 14.1226 3.14565 14.1226 3.50878C14.1226 3.8719 14.4166 4.16503 14.7788 4.16503H16.9016V6.28603C16.9016 6.64828 17.1956 6.94228 17.5578 6.94228C17.9201 6.94228 18.2141 6.64828 18.2141 6.28603V4.16503H20.336C20.6991 4.16503 20.9922 3.87015 20.9922 3.50878C20.9922 3.1474 20.6982 2.85253 20.336 2.85253H20.3351ZM14.8838 9.50778C14.9013 7.37803 14.1996 5.4854 12.9081 4.17903C11.7496 3.00478 10.1816 2.35553 8.49284 2.34765H8.48147C6.79272 2.3564 5.22472 3.0039 4.06622 4.17815C2.77559 5.48628 2.07384 7.3789 2.09134 9.50865C2.12284 13.125 0.408717 14.49 0.341342 14.5425C0.113842 14.7114 0.0202174 15.0063 0.108592 15.2758C0.197842 15.5453 0.449842 15.7264 0.731592 15.7264H4.85809C4.95434 17.6742 6.55559 19.2325 8.52784 19.2325C10.5001 19.2325 12.1005 17.675 12.1976 15.7264H16.2445C16.5245 15.7264 16.773 15.5462 16.8631 15.2802C16.9532 15.0142 16.8631 14.7175 16.64 14.5469C16.5682 14.4909 14.8523 13.125 14.883 9.5069L14.8838 9.50778ZM8.52697 17.92C7.27922 17.92 6.26422 16.9488 6.16972 15.7255H10.8842C10.7897 16.9505 9.77472 17.9192 8.52697 17.9192V17.92ZM2.14822 14.4139C2.76247 13.4558 3.42309 11.8729 3.40297 9.49815C3.38809 7.6939 3.94022 6.17315 4.99984 5.10128C5.91247 4.17728 7.15059 3.66628 8.48759 3.66103C9.82372 3.66715 11.0627 4.17728 11.9745 5.10128C13.0332 6.17403 13.5845 7.6939 13.5696 9.49815C13.5503 11.8729 14.2101 13.4558 14.827 14.4139H2.14822V14.4139Z"
              fill="#FF6600"
            />
          </svg>
        </base-button>
        <base-button
          class="icon-button"
          :mode="'action'"
          :position="'right'"
          v-else
        >
          <svg
            width="21"
            height="21"
            viewBox="0 -1 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.6584 0.131295C20.3302 -0.0297049 19.9391 0.105045 19.7781 0.428795L17.2721 5.48279L15.782 3.89904C15.5344 3.63392 15.1187 3.62254 14.8545 3.87104C14.5902 4.11954 14.578 4.53605 14.8265 4.79855L16.9641 7.07004C17.0892 7.20129 17.2616 7.27567 17.4419 7.27567C17.4734 7.27567 17.5057 7.27305 17.5381 7.26867C17.7507 7.23717 17.9336 7.10242 18.0299 6.90992L20.9541 1.01242C21.1151 0.68692 20.9821 0.29317 20.6566 0.13217L20.6584 0.131295ZM16.6404 14.5469C16.5677 14.4909 14.8519 13.125 14.8816 9.50692C14.9009 7.37804 14.1991 5.48542 12.9076 4.17817C11.7491 3.00567 10.1811 2.35555 8.49236 2.34767H8.48098C6.79223 2.35642 5.22423 3.00392 4.06573 4.17817C2.7751 5.4863 2.07335 7.37892 2.09085 9.50867C2.12235 13.125 0.408229 14.49 0.340854 14.5425C0.113354 14.7114 0.0197292 15.0063 0.108104 15.2758C0.197354 15.5453 0.449354 15.7264 0.731104 15.7264H4.3011C4.3781 17.9752 6.21998 19.7864 8.48798 19.7864C10.756 19.7864 12.5987 17.9752 12.6749 15.7264H16.2466C16.5266 15.7264 16.7751 15.5462 16.8652 15.2802C16.9554 15.0142 16.8635 14.7175 16.6412 14.5469H16.6404ZM8.4871 17.9489C7.23235 17.9489 6.2121 16.9628 6.1386 15.7264H10.8356C10.7612 16.9628 9.74185 17.9489 8.4871 17.9489Z"
              fill="white"
            />
          </svg>
        </base-button>
        <base-button
          class="icon-button"
          :mode="'actionOutline'"
          :position="'right'"
          v-if="true"
        >
          <svg
            width="21"
            height="21"
            viewBox="0 -1 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.8438 2.64062H4.15625C2.82888 2.64062 1.75 3.72038 1.75 5.04862V15.9817C1.75 17.31 2.82888 18.3906 4.15625 18.3906H16.8438C18.1711 18.3906 19.25 17.31 19.25 15.9817V5.04862C19.25 3.72038 18.1711 2.64062 16.8438 2.64062ZM4.15625 3.95313H16.8438C17.4475 3.95313 17.9375 4.44313 17.9375 5.04688V5.67162L10.8938 10.3678C10.6549 10.5253 10.346 10.527 10.1062 10.366L3.0625 5.67162V5.04688C3.0625 4.44313 3.5525 3.95313 4.15625 3.95313ZM16.8438 17.0764H4.15625C3.5525 17.0764 3.0625 16.5864 3.0625 15.9826V7.20988L9.3975 11.4361C9.73263 11.6601 10.1167 11.7721 10.5 11.7721C10.885 11.7721 11.2674 11.6601 11.6025 11.437L17.9375 7.21075V15.98C17.9375 16.5838 17.4475 17.0738 16.8438 17.0738V17.0764Z"
              fill="#FF6600"
            />
          </svg>
        </base-button>
        <base-button
          class="icon-button"
          :mode="'action'"
          :position="'right'"
          v-else
        >
          <svg
            width="21"
            height="21"
            viewBox="0 -1 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.8438 2.64062H4.15625C2.82888 2.64062 1.75 3.72038 1.75 5.04862V15.9817C1.75 17.31 2.82888 18.3906 4.15625 18.3906H16.8438C18.1711 18.3906 19.25 17.31 19.25 15.9817V5.04862C19.25 3.72038 18.1711 2.64062 16.8438 2.64062ZM4.15625 3.95313H16.8438C17.4475 3.95313 17.9375 4.44313 17.9375 5.04688V5.67162L10.8938 10.3678C10.6549 10.5253 10.346 10.527 10.1062 10.366L3.0625 5.67162V5.04688C3.0625 4.44313 3.5525 3.95313 4.15625 3.95313ZM16.8438 17.0764H4.15625C3.5525 17.0764 3.0625 16.5864 3.0625 15.9826V7.20988L9.3975 11.4361C9.73263 11.6601 10.1167 11.7721 10.5 11.7721C10.885 11.7721 11.2674 11.6601 11.6025 11.437L17.9375 7.21075V15.98C17.9375 16.5838 17.4475 17.0738 16.8438 17.0738V17.0764Z"
              fill="#FF6600"
            />
          </svg>
        </base-button>
      </div>
      <div class="profile-name">{{ user.name }}</div>
      <div class="profile-account">@{{ user.account }}</div>
      <div class="profile-description">
        {{ user.introduction }}
      </div>
      <div class="profile-follow">
        <div class="follow">
          {{ user.followerCount }}個<router-link
            :to="{ name: 'following', params: { id: `${user.id}` } }"
            >追隨中</router-link
          >
        </div>
        <div class="follow">
          {{ user.followingCount }}位<router-link
            :to="{ name: 'followed', params: { id: `${user.id}` } }"
            >跟隨者</router-link
          >
        </div>
      </div>
    </div>

    <profile-tabs>
      <router-view @openReplyModal="handleOpenModal" />
    </profile-tabs>
  </div>
</template>

<script>
import BaseButton from "./UI/BaseButton.vue";
import ProfileTabs from "./ProfileTabs.vue";
import ReplyModal from "./ReplyModal.vue";
import {
  modalController,
  followshipHandler,
  emptyImageFilter,
} from "../utils/mixins.js";
import { mapState } from "vuex";
import ProfileEditModal from "./ProfileEditModal.vue";
export default {
  mixins: [modalController, followshipHandler, emptyImageFilter],
  components: {
    BaseButton,
    ProfileTabs,
    ProfileEditModal,
    ReplyModal,
  },
  routeUpdated(to, from, next) {
    this.user = {
      ...this.userData,
    };
    this.turnHeaderShow();

    next();
  },
  data() {
    return {
      user: {},
    };
  },
  inject: {
    profileUser: {
      from: "profileUser",
    },
    turnHeaderShow: {
      from: "turnHeaderShow",
    },
  },

  watch: {
    profileUser: {
      handler: function () {
        this.user = {
          ...this.userData,
        };
        this.turnHeaderShow();
      },
      deep: true,
    },
  },
  computed: {
    ...mapState(["currentUser"]),
    userData() {
      return this.profileUser.data;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/fadeTransition";
.container {
  width: 100%;
  height: 100%;
}
.cover-image {
  width: 100%;
  height: 200px;
  border: 1px solid var(--border-stroke-color);
}
.user-info {
  position: relative;
  padding: 15px;
  border-left: 1px solid var(--border-stroke-color);
  border-right: 1px solid var(--border-stroke-color);

  .avatar {
    position: absolute;
    top: 0;
    left: 15px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    box-shadow: 0 0 0 5px var(--white-text-color);
    transform: translateY(-50%);
  }
  .button-wrapper {
    width: 100%;
    margin-bottom: 25px;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .profile-button {
    height: 35px;
    margin-left: 10px;
  }
  .icon-button {
    padding: 0;
    height: 35px;
    width: 35px;
    margin-left: 10px;
  }
  .profile-name {
    font-size: 19px;
    line-height: 19px;
    color: var(--primary-text-color);
  }
  .profile-account {
    font-size: 15px;
    color: var(--mute-color);
    margin-bottom: 10px;
  }
  .profile-description {
    font-size: 14px;
    color: var(--primary-text-color);
    margin-bottom: 10px;
  }
  .profile-follow {
    margin-bottom: 20px;
    font-size: 14px;
    .follow {
      display: inline-block;
      margin-right: 20px;
      width: max-content;
    }
    a {
      color: var(--mute-color);
    }
  }
}
</style>
