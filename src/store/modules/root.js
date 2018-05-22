const state = {
  drawer: false
}

const getters = {
  drawer: state => state.drawer
}

const mutations = {
  TOGGLE_DRAWER (state) {
    state.drawer = !state.drawer
  }
}

const actions = {
  toggleDrawer: (context) => context.commit('TOGGLE_DRAWER')
}

export default {
  state,
  getters,
  actions,
  mutations

}
