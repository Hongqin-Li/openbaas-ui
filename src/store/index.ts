import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    openDrawer: true,
    sessionToken: "",
    userId: ""
  },
  mutations: {
    toggleDrawer(state) {
      state.openDrawer = !state.openDrawer;
      console.log("toggle drawer", state.openDrawer);
    },
    updateSessionToken(state, token) {
      state.sessionToken = token;
    },
    updateUserId(state, id) {
      state.userId = id;
    }
  },
  actions: {},
  modules: {}
});
