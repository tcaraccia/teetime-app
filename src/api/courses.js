/**
 * Mocking API for ui development
 * will replace with real api calls
 */
const courses = [
  {
    date: new Date('2018/05/11'),
    courses: [
      {
        id: 1,
        title: 'Pilara',
        src: 'http://www.pilara.com.ar/sitenuevo/images/golf/caratula.jpg',
        flex: 6,
        showDetail: false,
        available: 5
      },
      {
        id: 2,
        title: 'Pilar Golf',
        src: 'http://pilargolf.com.ar/wp-content/uploads/16.ABIERTO-2006.b-1.jpg',
        flex: 6,
        showDetail: false,
        available: 5
      },
      {
        id: 3,
        title: 'Sofitel Cardales',
        src: 'http://www.sofitellareserva.com/content/actividades/golf.jpg',
        flex: 6,
        showDetail: false,
        available: 5
      },
      {
        id: 4,
        title: 'Lomas Athletic',
        src: 'http://lomasac.com.ar/wp-content/uploads/2016/01/001a_hoyo-01-par-4-tee-de-salida-810x542.jpg',
        flex: 3,
        showDetail: false,
        available: 5
      },
      {
        id: 5,
        title: 'Cañuelas Golf Club',
        src: 'http://www.canuelasgolfclub.com/wp-content/uploads/2015/02/house-brochure_LR.jpg?id=67',
        flex: 6,
        showDetail: false,
        available: 5
      },
      {
        id: 6,
        title: 'La Orquidea',
        src: 'http://www.laorquideagolf.com.ar/img/galeria/grandes/02.jpg',
        flex: 6,
        showDetail: false,
        available: 5
      },
      {
        id: 7,
        title: 'Highland',
        src: 'http://www.highlandparkweb.com/sigmacontent313/hpccwebsite/images/img_grande_infraestructura.jpg',
        flex: 3,
        showDetail: false,
        available: 5
      }
    ]
  },
  {
    date: new Date('2018/05/12'),
    courses: [
      {
        id: 1,
        title: 'Pilara',
        src: '/static/img/courses/pilara.jpg',
        flex: 6,
        showDetail: false,
        available: 5
      },
      {
        id: 2,
        title: 'Piero',
        src: '/static/img/courses/pilara.jpg',
        flex: 6,
        showDetail: false,
        available: 5
      },
      {
        id: 3,
        title: 'Golfers',
        src: '/static/img/courses/pilara.jpg',
        flex: 6,
        showDetail: false,
        available: 5
      },
      {
        id: 4,
        title: 'Golfers',
        src: '/static/img/courses/pilara.jpg',
        flex: 3,
        showDetail: false,
        available: 5
      },
      {
        id: 5,
        title: 'Piero',
        src: '/static/img/courses/pilara.jpg',
        flex: 6,
        showDetail: false,
        available: 5
      },
      {
        id: 6,
        title: 'Golfers',
        src: '/static/img/courses/pilara.jpg',
        flex: 6,
        showDetail: false,
        available: 5
      },
      {
        id: 7,
        title: 'Golfers',
        src: '/static/img/courses/pilara.jpg',
        flex: 3,
        showDetail: false,
        available: 5
      }
    ]
  },
  {
    date: new Date('2018/05/13'),
    courses: [
      {
        id: 1,
        title: 'Pilara',
        src: '/static/img/courses/pilara.jpg',
        flex: 6,
        showDetail: false,
        available: 5
      },
      {
        id: 2,
        title: 'Piero',
        src: '/static/img/courses/pilara.jpg',
        flex: 6,
        showDetail: false,
        available: 5
      },
      {
        id: 3,
        title: 'Golfers',
        src: '/static/img/courses/pilara.jpg',
        flex: 6,
        showDetail: false,
        available: 5
      },
      {
        id: 4,
        title: 'Golfers',
        src: '/static/img/courses/pilara.jpg',
        flex: 3,
        showDetail: false,
        available: 5
      },
      {
        id: 5,
        title: 'Piero',
        src: '/static/img/courses/pilara.jpg',
        flex: 6,
        showDetail: false,
        available: 5
      },
      {
        id: 6,
        title: 'Golfers',
        src: '/static/img/courses/pilara.jpg',
        flex: 6,
        showDetail: false,
        available: 5
      },
      {
        id: 7,
        title: 'Golfers',
        src: '/static/img/courses/pilara.jpg',
        flex: 3,
        showDetail: false,
        available: 5
      }
    ]
  }
]

export default {
  getAllCourses (cb) {
    setTimeout(() => cb(courses), 5000)
  }
}
