import axios from 'axios'

export default {
  courses: () => axios.get(process.env.API_BASE_URL + '/courses')
}
