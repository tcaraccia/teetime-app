import teetimesApi from '../../api/teetimes'
import _ from 'lodash'
const namespaced = true

const state = {
  all: [],
  selected: null,
  status: {
    loading: false,
    success: false,
    error: false,
    booking: false
  }
}

const getters = {
  all: state => state.all,
  loading: state => state.status.loading,
  selected: state => state.selected,
  status: state => state.status
}

const mutations = {
  SET_TEETIMES (state, payload) {
    state.all = payload
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
  getTeetimes (context, payload) {
    console.log(payload)
    context.commit('LOADING')
    teetimesApi.teetimesBetweenDates({
      startDate: payload.start,
      endDate: payload.end
    }).then(results => {
      context.commit('SUCCESS')
      context.commit('SET_TEETIMES', results.data)
    })
    .catch(e => {
      context.commit('ERROR', e)
    })
  },
  setTeetime (context, payload) {
    const teetime = this.state.teetimes.all.filter(x =>
      x.courseId === payload.course &&
      x.date === payload.date)
    context.commit('SET_TEETIME', teetime || { course: payload.course, date: payload.date })
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
