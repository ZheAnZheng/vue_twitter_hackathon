<template>
    <hackathonLayout>
        <template >
            <div class="online-bar">
                <ChatSidebar/>
            </div>
        </template>
        <template v-slot:right-side >
            <div class="public-room">
                <ChatRoom/>
            </div>
        </template>
    </hackathonLayout>
</template>
<script>
import HackathonLayout from "../components/layouts/HackathonLayout.vue";
import ChatSidebar from "../components/ChatSidebar.vue";
import ChatRoom from "../components/ChatRoom.vue";
export default {
    components:{
        HackathonLayout,
        ChatSidebar,
        ChatRoom
    }
}
</script>
<style lang="scss" scoped>
.online-bar{
    background-color:rgba(0,255,0,0.3);
    width:100%;
    height:100%;
}
.public-room{
    background-color:rgba(255,0,0,0.3);
    width:100%;
    height:100%;

}
</style>
