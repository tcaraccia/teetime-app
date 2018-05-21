import coursesApi from '../../api/courses'
const state = {
  courses: [],
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
  courses: state => state.courses,
  loading: state => state.status.loading,
  modal: state => state.modal,
  detail: state => state.detail
}

const mutations = {
  SET_COURSES (state, payload) {
    state.courses = payload
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
  getCourses (context) {
    context.commit('LOADING')
    coursesApi.getAllCourses(courses => {
      context.commit('SET_COURSES', courses || [])
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
