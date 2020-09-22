<template>
    <div id= "wishlist">
    <h1>this is the wish list</h1>
    <course-item
      v-for=" song in songs "
      :key=" song.song "
      :song="song"
      :iswishlist="true" />
    </div>
</template>

<script>
import songItem from "./components/songcart";
export default {
    name: "wish-list",
    computed:{
        songItem
    },
    computed: function(){
     return this.$store.state.wishSongs;

    }
    
}
</script>

<style scoped>
#wishlist{
border: 1px solid black;
}
</style>