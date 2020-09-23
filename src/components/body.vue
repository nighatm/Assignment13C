<template>
    <div id>
        <h1>Music Library of Golden Era</h1>
        <div id="content">
        <wish-list/>
        <song-list/>      
        </div>
    </div>
</template>

<script>
import WishList from "./songlist";
import SongList from "./wishlist";

export default {
    name: "page-body",
     components: {
         WishList,
         SongList
      }, 
}
</script>

<style scoped>
    #content{
        display: grid;
        grid-template-columns: 1fr 1fr;
        background-color: beige;
    }
    h1{
        color: crimson;
    }

</style>