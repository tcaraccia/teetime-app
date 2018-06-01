import axios from 'axios'

export default {
  teetimesBetweenDates: (dateRange) => axios.get(process.env.API_BASE_URL + '/teetimes', {
    params: {
      start: dateRange.startDate,
      end: dateRange.endDate
    }
  })
}
