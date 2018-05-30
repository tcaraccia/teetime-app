import courseApi from '../../api/courses'
const state = {
  courses: [],
  status: {
    loading: false,
    success: false,
    error: false
  },
  selected: {},
  modal: false,
  detail: false
}

const getters = {
  courses: state => state.courses,
  loading: state => state.status.loading,
  modal: state => state.modal,
  detail: state => state.detail,
  selected: state => state.selected,
  status: state => state.status,
  dates: (state, getters, rootState, rootGetters) => Array.from(rootGetters.daterange.by('day'))
}

const mutations = {
  SET_COURSES (state, payload) {
    state.courses = payload
  },
  SET_COURSE (state, payload) {
    state.selected = payload
  },
  SET_TEETIMES (state, payload) {
    state.teetimes = payload
  },
  UNSET_COURSE (state, payload) {
    state.selected = payload
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
    state.detail = false
    state.modal = !state.modal
  },
  TOGGLE_DETAIL (state, payload) {
    state.modal = false
    state.detail = !state.detail
  }
}
const actions = {
  getCourses (context) {
    context.commit('LOADING')
    courseApi.courses().then(results => {
      context.commit('SUCCESS')
      context.commit('SET_COURSES', results.data)
    })
      .catch(e => {
        context.commit('ERROR', e)
      })
  },
  clearError: context => context.commit('CLEAR_ERROR'),
  toggleDetail: (context, payload) => {
    const action = (context.state.detail) ? 'UNSET_COURSE' : 'SET_COURSE'
    context.commit(action, payload)
    context.commit('TOGGLE_DETAIL', payload)
  },
  toggleModal: (context, payload) => {
    const action = (context.state.modal) ? 'UNSET_COURSE' : 'SET_COURSE'
    context.commit(action, payload)
    context.commit('TOGGLE_MODAL', payload)
    if (action === 'SET_COURSE') {
      context.dispatch('teetimes/getTeetimes', payload)
    }
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
