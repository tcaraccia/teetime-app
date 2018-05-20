import coursesApi from '../../api/courses'
const state = {
  courses: [],
  status: {
    loading: false,
    success: false,
    error: false
  },
  selection: {
    date: null,
    courseId: null
  }
}

const getters = {
  courses: state => state.courses,
  loading (state) {
    return state.status.loading
  }
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
  clearError (context) {
    context.commit('CLEAR_ERROR')
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
