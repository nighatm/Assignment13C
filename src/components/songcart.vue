<template>
   <div id="song">
    <h4> {{ song.artist }}</h4>
    <h4> {{ song.song }}</h4>

    <button @click="addToWishlist(song)"  v-if="!iswishlist"> Add to the Wish List </button>
    <button @click="removefromwishlist(song)" v-else> Remove from the Wish List </button>
   </div> 
</template>

<script>
export default {
    name: "song-selected",
    props:{
        song:{
            type: Object,
            required: true
        },
        iswishlist : { 
            type : Boolean,
            required:true

        }
    },
    methods:{
      addToWishlist:function(song){
          this.$store.commit('towishlist', song);
      },
      removefromwishlist : function(song){
          this.$store.commit('fromwishlist', song);
      }  
    }

}
</script>

<style scoped>

</style>