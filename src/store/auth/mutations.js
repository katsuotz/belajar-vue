export default {
  UPDATE_USER(state, payload) {
    state.user = payload
    if (payload)
      localStorage.setItem('user', JSON.stringify(payload))
    else
      localStorage.removeItem('user')
  }
}