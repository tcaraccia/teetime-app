/**
 * Mocking API for ui development
 * will replace with real api calls
 */
const teetimes = [
  {
    time: '8:00',
    fee: 500,
    player4: {
      alias: 'Leticia D',
      enrolment: '97577',
      gender: 'F',
      handicap: 28
    },
    player2: {
      alias: 'Tomas C',
      enrolment: '97577',
      gender: 'M',
      handicap: 25
    }
  },
  {
    time: '8:30',
    fee: 500
  },
  {
    time: '9:00',
    fee: 600
  },
  {
    time: '9:30',
    fee: 600
  },
  {
    time: '10:00',
    fee: 600
  },
  {
    time: '10:30',
    fee: 600
  },
  {
    time: '11:00',
    fee: 600
  },
  {
    time: '11:30',
    fee: 600
  },
  {
    time: '12:00',
    fee: 600
  },
  {
    time: '12:30',
    fee: 600
  },
  {
    time: '13:00',
    fee: 600
  },
  {
    time: '13:30',
    fee: 600
  },
  {
    time: '14:00',
    fee: 600
  },
  {
    time: '14:30',
    fee: 600
  },
  {
    time: '15:00',
    fee: 600
  }
]

export default {
  getTeetimes (cb) {
    setTimeout(() => cb(teetimes), 2000)
  }
}
