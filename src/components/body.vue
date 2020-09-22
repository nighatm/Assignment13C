<template>
    <div id>
        <h1>Songs list</h1>
        <div id="content">
        <play-list/>
        <wish-list/>
       
        </div>
    </div>
</template>

<script>
import WishList from "./components/wishlist.vue";
import SongList from "./components/songlist.vue";

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

</style>