<template>
    <div id="songList">
        <h2>List of Songs in the Library</h2>
        <div>
        <song-item  v-for= "song in songs" :key=" song.artist" :song= song :iswishlist= "false" />
        </div>
    </div>
</template>

<script>
import SongItem from './songcart.vue';
export default {
    name: "song-list",
    components:{
        SongItem
    },
    computed:{
        songs:function(){
            return this.$store.state.songlist;
        }
    }
}
</script>

<style scoped>
    #songList{
        border: 3px solid black;
    }
    h2{
        color:brown
    }


</style>