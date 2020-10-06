import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth/modules'
import books from './books/modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    books,
  }
  // modules: {
  // }
})
