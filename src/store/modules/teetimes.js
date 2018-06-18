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
  PUSH_NEW_TEETIME (state, payload) {
    state.all.push(payload)
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
    // TODO: Switch to Promisified as in https://stackoverflow.com/questions/40165766/returning-promises-from-vuex-actions
    const selectedCourse = this.state.courses.all.find(x => x._id === payload.course)
    const selectedTeetime = this.state.teetimes.all.find(x =>
      x.course === payload.course &&
      x.date === payload.date.toJSON())
    if (selectedTeetime) {
      context.commit('SET_TEETIME', selectedTeetime)
    } else {
      context.commit('LOADING')
      teetimesApi.createTeetime({
        course: selectedCourse,
        date: payload.date
      }).then(result => {
        context.commit('PUSH_NEW_TEETIME', result.data)
        context.commit('SET_TEETIME', result.data)
        context.commit('SUCCESS')
      })
      .catch(e => {
        context.commit('ERROR', e)
      })
    }
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
