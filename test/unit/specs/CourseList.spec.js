import Vue from 'vue'
import CourseList from '@/components/CourseList'

describe('CourseList.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(CourseList)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.grey--text h1').textContent)
    .toEqual('Cargando...')
  })
})
