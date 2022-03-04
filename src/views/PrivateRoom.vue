<template>
    <hackathonLayout>
        <template >
            
                <Messagebar/>
           
        </template>
        <template v-slot:right-side >
            
                <div v-if="isInLobby" class="lobby">點選私訊的對象</div>

               <router-view v-else/>
            
        </template>
    </hackathonLayout>
</template>
<script>
import HackathonLayout from "../components/layouts/HackathonLayout.vue";
import Messagebar from "../components/Messagebar.vue";
export default {
    components:{
        HackathonLayout,
        Messagebar,
    },
    watch:{
        $route(val){
            console.log(val)
        }
    },
    computed:{
        isInLobby(){
            return this.$route.name==="private-lobby";
        }
    }
}
</script>
<style lang="scss" scoped>
.lobby{
    display: flex;
    align-items:center;
    justify-content: center;
    width: 100%;
    height:100%;
    background:var(--input-bg-color);
    
}
.online-bar{
    background-color:rgba(0,255,0,0.3);
    width:100%;
    height:100%;
}
.private-room{
    background-color:rgba(255,0,0,0.3);
    width:100%;
    height:100%;

}
</style>
