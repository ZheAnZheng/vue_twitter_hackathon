<template>
  <div class="button-group">
    <!-- 這邊先把畫面做出來，因此暫時先用這樣代替 -->
    <button class="actionBtn" v-show="mode === 'signUp'">註冊</button>
    <button class="cancelBtn" v-show="mode === 'signUp'">取消</button>
    <button class="actionBtn" v-show="mode === 'signIn' || mode === 'admin'">
      登入
    </button>
    <button class="routeBtn" v-show="mode === 'signIn'">後台登入</button>
    <button class="routeBtn" v-show="mode === 'signIn'">註冊Alpitter．</button>
    <button class="routeBtn" v-show="mode === 'admin'">前台登入</button>
  </div>
</template>
<script>
//透過mode判斷顯示的button
export default {
  props: {
    mode: {
      type: String,
      required: false,
    },
  },
};
</script>
<style lang="scss" scoped>
%button-style {
  display: block;
  height: 46px;
  font-size: 18px;
  font-weight: 800;
  width: 100%;
  font-weight: 800;
  border-radius: 50px;
}
.button-group {
  width: 100%;
  text-align: center;
  .actionBtn {
    @extend %button-style;
    background-color: var(--primary-color);
    color: var(--white-text-color);
  }
  .cancelBtn {
    @extend %button-style;
    background-color: rgba(0, 0, 0, 0);
    color: var(--blue-text-color);
  }
  .routeBtn {
    @extend %button-style;
    color: var(--blue-text-color);
    display: inline;
    width: max-content;
    float: right;
  }
}
</style>
