import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songlist: [{ artist: " artist1 ", song: "Song 1 by artist 1" }, { artist: " artist2 ", song: "Song 2 by artist 2" }, { artist: " artist3 ", song: "Song 3 by artist 3" }, { artist: " artist4 ", song: "Song 1 by artist 4" }, { artist: " artist5 ", song: "Song 1 by artist51" }],
    wishlist: []
  },
  mutations: {
    towishlist: function (state, addedSong) {
      state.wishlist.push(addedSong);
      for (let i = 0; i < state.songlist.length; i++) {
        if (state.songlist[i] == addedSong) {
          state.songlist.splice(i, 1);
        }
      }
    },
    fromwishlist: function (state, deletedSong) {
      state.songlist.push(deletedSong);
      for (let i = 0; i < state.wishlist.length; i++) {
        if (state.wishlist[i] == deletedSong) {
          state.wishlist.splice(i, 1);
        }
      }

    }
  },
  actions: {},
  modules: {}
});
