import Moment from 'moment'
import { extendMoment } from 'moment-range'

const moment = extendMoment(Moment)

const state = {
  drawer: false,
  startdate: moment().startOf('day').toDate(),
  enddate: moment().endOf('day').add(7, 'days').toDate()
}

const getters = {
  drawer: state => state.drawer,
  startdate: state => state.startdate,
  enddate: state => state.enddate,
  daterange: state => moment.range(state.startdate, state.enddate)
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
