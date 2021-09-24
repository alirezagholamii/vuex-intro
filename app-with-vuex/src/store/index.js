import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature`,
    }
  },
  getters: {
    upperCaseText(state) {
      return state.text.toUpperCase()
    }
  },

  mutations: {
    deleteText(state) {
      const newValue = state.text.slice(0, -1)
      state.text = newValue
    }
  },
  actions: {
  },
  modules: {
  }
})
