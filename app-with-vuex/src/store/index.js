import { createStore } from 'vuex'
import deleteTextFromDB from '../api'

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
    deleteText(state, newValue) {
      state.text = newValue
    }
  },
  actions: {
    async deleteText({ commit, state }) {
      try {
        const result = await deleteTextFromDB();
        if (result === 'success') {
          const newValue = state.text.slice(0, -1);
          commit('deleteText', newValue)
        }
      } catch (e) {
        console.log('ERROR ===> ', e);
      }
    }
  },
  modules: {
  }
})
