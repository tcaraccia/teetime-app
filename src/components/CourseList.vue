
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
  import CourseItem from './CourseItem.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      'course': CourseItem
    },
    data: () => ({
      ttDialog: false,
      date: new Date()
    }),
    computed: mapGetters({
      results: 'allCourses'
    }),
    created () {
      this.$store.dispatch('getAllCourses')
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
