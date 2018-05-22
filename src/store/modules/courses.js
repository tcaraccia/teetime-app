import coursesApi from '../../api/courses'
const state = {
  courses: [],
  status: {
    loading: false,
    success: false,
    error: false
  },
  selected: {
    id: null
  },
  modal: false,
  detail: false
}

const getters = {
  courses: state => state.courses,
  loading: state => state.status.loading,
  modal: state => state.modal,
  detail: state => state.detail,
  selected: state => state.selected
}

const mutations = {
  SET_COURSES (state, payload) {
    state.courses = payload
  },
  SET_COURSE (state, payload) {
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
  TOGGLE_MODAL (state, payload) {
    state.detail = false
    state.selected.id = (state.modal) ? null : payload
    state.modal = !state.modal
  },
  TOGGLE_DETAIL (state, payload) {
    state.modal = false
    state.selected.id = (state.detail) ? null : payload
    state.detail = !state.detail
  }
}
const actions = {
  getCourses (context) {
    context.commit('LOADING')
    coursesApi.getAllCourses(courses => {
      context.commit('SET_COURSES', courses || [])
      context.commit('SUCCESS')
    })
  },
  clearError: context => context.commit('CLEAR_ERROR'),
  toggleModal: (context, payload) => context.commit('TOGGLE_MODAL', payload),
  toggleDetail: (context, payload) => context.commit('TOGGLE_DETAIL', payload)
}
export default {
  state,
  getters,
  actions,
  mutations
}
