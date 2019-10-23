import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  'ADD': 'Add'
}

export function createStore () {
  return new Vuex.Store({
    state: {
      count: 1
    },
    mutations: {
      [types.ADD] (state) {
        state.count += 2
      }
    },
    actions: {
      add ({ commit }) {
        commit(types.ADD)
      }
    },
    modules: {
    }
  })
}
