import Vue from 'vue'
import Router from 'vue-router'
import Courses from '@/components/Courses'
import Teetimes from '@/components/Teetimes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Courses',
      component: Courses,
      props: {
        bread: 'Courses'
      }
    },
    {
      path: '/course/:id/teetimes',
      name: 'coursett',
      component: Teetimes,
      props: {
        bread: 'TeeTimes'
      }
    }
  ]
})
