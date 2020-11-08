import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    openDrawer: true
  },
  mutations: {
    toggleDrawer(state) {
      state.openDrawer = !state.openDrawer;
      console.log("toggle drawer", state.openDrawer);
    }
  },
  actions: {},
  modules: {}
});
