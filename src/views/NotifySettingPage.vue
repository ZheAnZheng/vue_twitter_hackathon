<template>
  <div>
    <Navbar />
    <PopularList />
    <MobileNavbar/>
    <div class="notify-container">
      <header class="notify-header">通知</header>
      <form>
        <div v-for="item in formItems" :key="item.id" class="form-item">
          <input :id="item.name" type="checkbox" />
          <label :for="item.name">{{item.name}}</label>
          <p v-show="item.description">{{item.description}}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import PopularList from "../components/PopularList.vue";
import MobileNavbar from "../components/MobileNavbar.vue";

export default {
  components: {
    Navbar,
    PopularList,
    MobileNavbar
  },
  data() {
    return {
      formItems: [
        {
          id: 0,
          name: "john有新的推文通知",
          description:
            "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        },
        {
          id: 1,
          name: "Michael開始追蹤你",
          description: "",
        },
        {
          id: 2,
          name: "你的貼文有新的回覆",
          description:
            "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        },
        {
          id: 3,
          name: "Peter喜歡你的文章",
          description: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.notify-container {
//   margin-left: 17%;
  width: 100%;
  height: 100%;
  background-color: var(--white-text-color);
}
.notify-header {
  height: 74px;
  width: 100%;
  font-size: 24px;
  padding-left: 23px;
  line-height: 74px;
}

.form-item{
    padding:16px 23px;
    border-bottom:1px solid var(--border-stroke-color);
}
label{
    font-size:16px;
    font-weight:700;
}
input[type="checkbox"]{
    -webkit-appearance: none;
    display: block;
    width:30px;
    height:30px;
    border-radius:50%;
    background-color:var(--mute-color);
    &:checked{
        background-color:var(--white-text-color);
        box-shadow: inset 0 0 0 10px var(--mute-color);
    }
}
@media screen and (min-width:865px){
.notify-container{
    width:83%;
    margin-left: 17%;
}
}
@media screen and (min-width:1085px){
.notify-container{
    width:58%;
   
}
}
</style>
