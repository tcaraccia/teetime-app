import Vue from 'vue'
import Vuex from 'vuex'
import root from './modules/root'
import courses from './modules/courses'
import teetimes from './modules/teetimes'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    root,
    courses,
    teetimes
  },
  strict: debug
})
