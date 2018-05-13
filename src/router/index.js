import Vue from 'vue'
import Router from 'vue-router'
import CourseList from '@/components/CourseList'
import Teetimes from '@/components/Teetimes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CourseList',
      component: CourseList,
      props: {
        bread: 'CourseList'
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
