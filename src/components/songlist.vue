<template>
    <div id="songList">
        <h1>Choose a song from Song List</h1>
        <song-list  v-for= "song in songs" :key=" song" :song= song :iswishlist= "false" />

    </div>
</template>

<script>
import songItem from './songcart.vue';
export default {
    name: "song-list",
    components:{
        songItem
    },
    computed:{
        songs:function(){
            return this.$store.state.songs;
        }
    }
}
</script>

<style scoped>
    #songList{
        border: 3px solid black;
    }


</style>