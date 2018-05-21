import teetimesApi from '../../api/teetimes'
const state = {
  teetimes: [],
  status: {
    loading: false,
    success: false,
    error: false
  },
  course: {
    id: null
  },
  modal: false,
  detail: false
}

const getters = {
  teetimes: state => state.teetimes,
  loading: state => state.status.loading,
  modal: state => state.modal,
  detail: state => state.detail
}

const mutations = {
  SET_TEETIMES (state, payload) {
    state.teetimes = payload
  },
  LOADING (state) {
    state.status = {
      loading: true,
      success: false,
      error: false
    }
  },
  SUCCESS (state) {
    state.status = {
      loading: false,
      success: true,
      error: false
    }
  },
  ERROR (state, payload) {
    state.status = {
      loading: false,
      success: false,
      error: payload
    }
  },
  CLEAR_ERROR (state) {
    state.status = {
      loading: false,
      success: false,
      error: false
    }
  },
  TOGGLE_MODAL (state) {
    state.modal = !state.modal
  },
  TOGGLE_DIALOG (state) {
    state.dialog = !state.dialog
  }
}
const actions = {
  getTeetimes (context) {
    context.commit('LOADING')
    teetimesApi.getAllTeetimes(teetimes => {
      context.commit('SET_TEETIMES', teetimes || [])
      context.commit('SUCCESS')
    })
  },
  clearError: context => context.commit('CLEAR_ERROR'),
  toggleModal: context => context.commit('TOGGLE_MODAL'),
  toggleDialog: context => context.commit('TOGGLE_DIALOG')
}
export default {
  state,
  getters,
  actions,
  mutations
}
