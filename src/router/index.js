import Vue from 'vue'
import Router from 'vue-router'
import CourseList from '@/components/CourseList'
import CourseItem from '@/components/CourseItem'
import Teetimes from '@/components/Teetimes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: CourseList,
      props: {
        bread: 'CourseList'
      }
    },
    {
      path: '/courses',
      name: 'courselist',
      component: CourseList,
      props: {
        bread: 'CourseList'
      }
    },
    {
      path: '/courses/:id/',
      name: 'course',
      component: CourseItem,
      props: {
        bread: 'CourseItem'
      }
    },
    {
      path: '/courses/:id/teetimes',
      name: 'teetimes',
      component: Teetimes,
      props: {
        bread: 'Teetimes'
      }
    }
  ]
})
