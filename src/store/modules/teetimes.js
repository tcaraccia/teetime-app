import teetimesApi from '../../api/teetimes'
import _ from 'lodash'
const namespaced = true

const state = {
  teetimes: [],
  selected: null,
  status: {
    loading: false,
    success: false,
    error: false,
    booking: false
  }
}

const getters = {
  teetimes: state => state.teetimes,
  loading: state => state.status.loading,
  selected: state => state.selected,
  status: state => state.status
}

const mutations = {
  SET_TEETIMES (state, payload) {
    state.teetimes = payload
  },
  SET_TEETIME (state, payload) {
    state.selected = payload
  },
  BOOKING (state) {
    state.status = {
      loading: false,
      success: false,
      error: false,
      booking: true
    }
  },
  LOADING (state) {
    state.status = {
      loading: true,
      success: false,
      error: false,
      booking: false
    }
  },
  SUCCESS (state) {
    state.status = {
      loading: false,
      success: true,
      error: false,
      booking: false
    }
  },
  ERROR (state, payload) {
    state.status = {
      loading: false,
      success: false,
      error: payload,
      booking: false
    }
  }
}
const actions = {
  getTeetimes (context) {
    context.commit('LOADING')
    const teetimes = teetimesApi.getAllTeetimes()
    context.commit('SET_TEETIMES', teetimes)
    context.commit('SUCCESS')
  },
  bookTeetime (context, payload) {
    context.commit('BOOKING')
    context.commit('SET_TEETIME', _.cloneDeep(payload))
  }
}
export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
