<template>
  <v-container fluid grid-list-md>
    <div v-if="loading">
       <h1 class="grey--text pt-4 pb-4 display-2 text-xs-center" flat>Cargando... </h1>
      <v-progress-linear slot="progress" color="green" indeterminate></v-progress-linear>
    </div>
    <div v-for="(result, index) in courses" :key="index">
      <h1 class="grey--text pt-4 pb-4 display-2 text-xs-center" flat v-text="localizeDate(result.date)" ></h1>
      <v-divider class="mb-3"></v-divider>
      <v-slide-y-transition mode="out-in">
        <v-layout row wrap>
          <v-flex xs12 sm6 lg3 pl-3 pb-3 v-for="course in result.courses" v-bind="{ [`xs${course.flex}`]: true }" :key="course.id">
            <course v-bind:course="course"></course>
          </v-flex>
        </v-layout>
      </v-slide-y-transition>
    </div>
  </v-container>
</template>

<script>
  import CourseItem from './CourseItem.vue'
  import { mapGetters } from 'vuex'
  import moment from 'moment'
  export default {
    components: {
      'course': CourseItem
    },
    computed: {
      success: {
        get: function () {
          return this.$store.state.status.success
        },
        set: function (value) {
          this.$store.dispatch('clearError')
        }
      },
      error: {
        get: function () {
          return this.$store.state.status.error
        },
        set: function (value) {
          this.$store.dispatch('clearError')
        }
      },
      ...mapGetters([
        'courses', 'loading'
      ])
    },
    methods: {
      localizeDate: (date) => moment(date).locale('es').format('dddd DD [de] MMMM')
    }
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
