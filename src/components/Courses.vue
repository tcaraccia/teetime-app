
<template>
  <v-container fluid grid-list-md>
  <h1 class="grey--text mb-3 display-1 text-xs-center" flat color="green" v-text="moment(date).locale('es').format('dddd DD [de] MMMM')" ></h1>
  <v-divider class="mb-3"></v-divider>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>
        <v-flex xs12 sm6 lg3 pl-3 pb-3 v-for="course in courses" v-bind="{ [`xs${course.flex}`]: true }" :key="course.id">
          <course v-bind:card="course"></course>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
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
      courses: [{
        id: 1,
        title: 'Pilara',
        src: '/static/img/courses/pilara.jpg',
        flex: 6,
        showDetail: false
      },
      {
        id: 2,
        title: 'Piero',
        src: '/static/img/courses/pilara.jpg',
        flex: 6,
        showDetail: false
      },
      {
        id: 3,
        title: 'Golfers',
        src: '/static/img/courses/pilara.jpg',
        flex: 6,
        showDetail: false
      },
      {
        id: 4,
        title: 'Golfers',
        src: '/static/img/courses/pilara.jpg',
        flex: 3,
        showDetail: false
      },
      {
        id: 5,
        title: 'Piero',
        src: '/static/img/courses/pilara.jpg',
        flex: 6,
        showDetail: false
      },
      {
        id: 6,
        title: 'Golfers',
        src: '/static/img/courses/pilara.jpg',
        flex: 6,
        showDetail: false
      },
      {
        id: 7,
        title: 'Golfers',
        src: '/static/img/courses/pilara.jpg',
        flex: 3,
        showDetail: false
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
