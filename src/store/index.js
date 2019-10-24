import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  'ADD': 'Add',
  'INIT': 'init'
}

export function createStore () {
  return new Vuex.Store({
    state: {
      count: 1
    },
    mutations: {
      [types.ADD] (state) {
        state.count += 2
      },
      [types.INIT] (state, count) {
        state.count = count
      }
    },
    actions: {
      add ({ commit }) {
        commit(types.ADD)
      },
      init ({ commit }, count) {
        commit(types.INIT, count)
      },
      // 模拟数据请求
      ajaxData ({ commit }) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('ajax data')
            // 更新store数据
            let data = Math.random()
            commit(types.INIT, data)
            resolve()
          }, 1000)
        })
      }
    }
  })
}
