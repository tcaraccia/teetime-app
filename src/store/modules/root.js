import Moment from 'moment'
import { extendMoment } from 'moment-range'
const moment = extendMoment(Moment)

const state = {
  drawer: false,
  dateRange: moment.range(moment().startOf('day'), moment().endOf('day').add(7, 'd'))
}

const getters = {
  drawer: state => state.drawer,
  daterange: state => state.dateRange
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
