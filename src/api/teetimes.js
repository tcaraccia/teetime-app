import axios from 'axios'

export default {
  allTeetimes: () => axios.get(process.env.API_BASE_URL + '/courses'),
  teetimesForCourse: (courseId) => axios.get(process.env.API_BASE_URL + '/teetimes', {
    params: {
      courseId: courseId
    }
  })
}
