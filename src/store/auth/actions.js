export default {
  login ({commit}, payload) {
    commit('UPDATE_USER', payload)
  }
}