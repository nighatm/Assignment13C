<template>
    <div id= "wishlist">
    <h2>Manage Your Music Library</h2>
    <song-item v-for=" song in songs " :key=" song.song.artist " :song="song" :iswishlist="true" />
    </div>
</template>

<script>
import songItem from "./songcart.vue";
export default {
    name: "wish-list",
    components:{
        songItem
    },
     computed:{
        songs:function(){
            return this.$store.state.wishlist;
        }
    }
    
}
</script>

<style scoped>
#wishlist{
border: 3px solid black;
}
h2{
    color: brown;
}
</style>