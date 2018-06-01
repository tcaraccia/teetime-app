<template>
  <v-container fluid grid-list-md>
    <div v-if="loading">
       <h1 class="grey--text pt-4 pb-4 display-2 text-xs-center" flat>Cargando... </h1>
      <v-progress-linear slot="progress" color="green" indeterminate></v-progress-linear>
    </div>
    <div v-for="day in dates" :key="day.toJSON()" v-if="!loading">
      <h1 class="grey--text pt-4 pb-4 display-2 text-xs-center" flat v-text="localizeDate(day)" ></h1>
      <v-divider class="mb-3"></v-divider>
      <v-slide-y-transition mode="out-in">
        <v-layout row wrap>
          <v-flex xs12 sm6 lg3 pl-3 pb-3 v-for="course in courses" :key="course._id">
            <course v-bind:course="course" v-bind:day="day.toDate()" ></course>
          </v-flex>
        </v-layout>
      </v-slide-y-transition>
    </div>
  </v-container>
</template>

<script>
  import CourseItem from './CourseItem.vue'
  import { createNamespacedHelpers } from 'vuex'
  import moment from 'moment'
  
  const { mapGetters } = createNamespacedHelpers('courses')
  
  export default {
    components: {
      'course': CourseItem
    },
    computed: {
      success: {
        get: function () {
          return this.status.success
        },
        set: function (value) {
          this.$store.dispatch('clearError')
        }
      },
      error: {
        get: function () {
          return this.status.error
        },
        set: function (value) {
          this.$store.dispatch('clearError')
        }
      },
      ...mapGetters({
        courses: 'all',
        loading: 'loading',
        status: 'status',
        dates: 'dates',
        selected: 'selected'
      })
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
