import coursesApi from '../../api/courses'
const state = {
  all: []
}

const getters = {
  allCourses: state => state.all
}

const actions = {
  getAllCourses ({commit}) {
    coursesApi.getAllCourses(courses => {
      commit('setCourses', courses)
    })
  }
}

const mutations = {
  setCourses (state, courses) {
    state.all = courses
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
