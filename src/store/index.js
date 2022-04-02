import { createStore } from 'vuex'

export default createStore({
  state: {
    menuOpen : false,
  },
  getters: {
    menuOpen(state){
      return state.menuOpen;
    }
  },
  actions: {
    openHandler(context){
      context.commit("openHandler");
    }
  },
  mutations: {
    openHandler(state){
      state.menuOpen = !state.menuOpen;
    }
  },
  modules: {
  }
})
