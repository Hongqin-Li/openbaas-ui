import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export interface FunctionItem {
  id: string;
  name: string;
  code: string;
  description: string;
  updatedAt: string;
  deployedAt: string;
}

function makeid(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default new Vuex.Store({
  state: {
    openDrawer: true,
    user: {
      token: "",
      id: "",
      pageUrl: ""
    },
    addFunctionDialog: 0,
    functions: [] as FunctionItem[],
    thisFunctionId: ""
  },
  mutations: {
    toggleDrawer(state) {
      state.openDrawer = !state.openDrawer;
      console.log("toggle drawer", state.openDrawer);
    },
    updateUser(state, data) {
      console.log("updateUser", data);
      state.user = {
        token: data.sessionToken,
        id: data.objectId,
        pageUrl: data.pageUrl
      };
    },
    addFunctionDialogAction(state) {
      state.addFunctionDialog += 1;
    },
    addFunction(state, data) {
      let id = makeid(10);
      while (
        state.functions.filter(i => {
          return i.id === id;
        }).length > 0
      ) {
        id = makeid(10);
      }
      state.functions.push({
        id,
        name: data.name,
        code: "",
        updatedAt: "",
        deployedAt: "",
        description: data.description
      });
      console.log("add new function with id", id);
    },
    selectFunction(state, data) {
      state.thisFunctionId = data;
      console.log("selectFunction id", data);
    }
  },
  actions: {},
  modules: {}
});
