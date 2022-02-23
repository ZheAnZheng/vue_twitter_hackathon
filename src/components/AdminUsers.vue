<template>
    <div class="admin-users-card">
      <AdminUsersCard v-for="user in users" :key="user.id" :user="user" />
    </div>
</template>

<script>
import AdminUsersCard from '../components/AdminUsersCard.vue'

// 模擬使用者資料
const dummyData = [{
  id: 0,
  name: 'John Doe',
  account: 'heyjohn',
  image: 'https://randomuser.me/api/portraits/men/88.jpg',
  backgroundImage: {
    background: "no-repeat url('https://upload.cc/i1/2022/02/23/ck9BoJ.jpg')"
  },
  replyCount: '1.5k',
  likeCount: '20k',
  following: '34',
  follower: '59'
},
{
  id: 1,
  name: 'John Doe',
  account: 'heyjohn',
  image: 'https://randomuser.me/api/portraits/men/88.jpg',
  backgroundImage: {
    background: "no-repeat url('https://upload.cc/i1/2022/02/23/ck9BoJ.jpg')"
  },
  replyCount: '1k',
  likeCount: '2k',
  following: '346',
  follower: '559'
},
{
  id: 2,
  name: 'John Doe',
  account: 'heyjohn',
  image: 'https://randomuser.me/api/portraits/men/88.jpg',
  backgroundImage: {
    background: "no-repeat url('https://upload.cc/i1/2022/02/23/ck9BoJ.jpg')"
  },
  replyCount: '1k',
  likeCount: '2k',
  following: '346',
  follower: '559'
},
{
  id: 3,
  name: 'John Doe',
  account: 'heyjohn',
  image: 'https://randomuser.me/api/portraits/men/88.jpg',
  backgroundImage: {
    background: "no-repeat url('https://upload.cc/i1/2022/02/23/ck9BoJ.jpg')"
  },
  replyCount: '1k',
  likeCount: '2k',
  following: '346',
  follower: '559'
},
{
  id: 4,
  name: 'John Doe',
  account: 'heyjohn',
  image: 'https://randomuser.me/api/portraits/men/88.jpg',
  backgroundImage: {
    background: "no-repeat url('https://upload.cc/i1/2022/02/23/ck9BoJ.jpg')"
  },
  replyCount: '1k',
  likeCount: '2k',
  following: '346',
  follower: '559'
}]

export default {
  name: 'AdminUsers',
  components: {
    AdminUsersCard
  },
  data() {
    return {
      users: []
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    // 向伺服器取得所有使用者的資料
    fetchUsers() {
      // TODO：向伺服器取得所有使用者的資訊

      this.users = dummyData
    }
  }
}
</script>

<style lang="scss" scoped>
// 整個userCardList的樣式設定
.admin-users-card {
  display: flex;
  width: 150%;
  flex-wrap: wrap;
}
</style>
