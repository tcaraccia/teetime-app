
<template>
  <v-container fluid grid-list-md>
    <div v-for="result in results" :key="result.date.toString()">
      <h1 class="grey--text pt-4 pb-4 display-2 text-xs-center" flat color="green" v-text="moment(result.date).locale('es').format('dddd DD [de] MMMM')" ></h1>
      <v-divider class="mb-3"></v-divider>
      <v-slide-y-transition mode="out-in">
        <v-layout row wrap>
          <v-flex xs12 sm6 lg3 pl-3 pb-3 v-for="course in result.courses" v-bind="{ [`xs${course.flex}`]: true }" :key="course.id">
            <course v-bind:card="course"></course>
          </v-flex>
        </v-layout>
      </v-slide-y-transition>
    </div>
  </v-container>
</template>

<script>
  import Course from './Course.vue'

  export default {
    components: {
      'course': Course
    },
    data: () => ({
      ttDialog: false,
      date: new Date(),
      results: [
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
    })
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>
