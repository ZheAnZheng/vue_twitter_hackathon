<template>
  <div class="admin-users-card">
    <BaseSpinner v-if="isLoading"/>
    <AdminUsersCard v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<script>
import AdminUsersCard from "../components/AdminUsersCard.vue";
import adminAPI from "../apis/admin"
import { toast } from "../utils/helper"
import BaseSpinner from "../components/UI/BaseSpinner.vue"

export default {
  name: "AdminUsers",
  components: {
    AdminUsersCard,
    BaseSpinner,
  },
  data() {
    return {
      users: [],
      isLoading: true
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    // 向伺服器取得所有使用者的資料
    async fetchUsers() {
      try {
        // 透過API向伺服器取得管理者的資訊
        const { data } = await adminAPI.users.getAll()

        this.users = data.map( user => {
          return {
            ...user,
            id: user.id,
            name: user.account,
            image: user.avatar,
            backgroundImage: {
              background: `no-repeat url('https://upload.cc/i1/2022/02/23/ck9BoJ.jpg')`,
            },
            replyCount: user.repliedCount,
            likeCount: user.likedCount,
            following: user.followingCount,
            follower: user.followerCount,
          }
        })

        this.isLoading = false
      } catch(error) {
        console.log('Error', error)
        toast.fireError('目前無法取得所有使用者，請稍後再試')
      }
      
    },
  },
};
</script>

<style lang="scss" scoped>
// 整個userCardList的樣式設定
.admin-users-card {
  display: flex;
  width: 150%;
  flex-wrap: wrap;
}
</style>
