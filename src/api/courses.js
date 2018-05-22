import axios from 'axios'

export default {
  getAllCourses () {
    return new Promise((resolve, reject) => {
      axios.get(process.env.API_BASE_URL + '/courses').then(results => {
        resolve(results.data)
      })
      .catch(err => {
        reject(err)
      })
    })
  }
}
