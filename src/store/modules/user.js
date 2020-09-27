const getDefaultState = () => {
  return {
    nickname: '',
    token: ''
  }
}

const state = getDefaultState()

const getters = {}
const mutations = {}
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
