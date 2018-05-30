<template>
  <v-card>
    <v-card-media :src="course.thumbnail" height="200px"></v-card-media>
    <v-card-title primary-title>
        <div>
        <div class="headline" v-text="course.name"></div>
        <span class="grey--text" v-text="course.description"></span>
        </div>
    </v-card-title>
    <v-card-text>
        <span class="grey--text">{{5}} lugares disponibles</span>
    </v-card-text>
    <v-card-actions>
        <v-btn flat color="green" @click.native="toggleModal({course: course._id, date: day})">Teetimes</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click.native="toggleDetail(course._id)">
        <v-icon>{{ ((selected.course === course._id) && detail) ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
        </v-btn>
    </v-card-actions>
    <v-slide-y-transition>
        <v-card-text v-show="(selected.course === course._id) && detail">
        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we
        walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
    </v-slide-y-transition>
    <v-dialog 
      hide-overlay
      v-model="showmodal" 
      max-width="800px">
      <teetimes v-bind:courseId="selected.course" v-bind:day="day"></teetimes>
    </v-dialog>
  </v-card>
    
</template>

<script>
import Teetimes from './Teetimes'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    'teetimes': Teetimes
  },
  props: ['course', 'day'],
  computed: {
    ...mapGetters([
      'loading', 'modal', 'detail', 'selected'
    ]),
    showmodal: {
      get () {
        return ((this.selected.course === this.course._id) && this.modal)
      },
      set (course) {
        this.toggleModal(course)
      }
    }
  },
  methods: {
    toggleDetail (id) {
      this.toggleDetail(id)
    },
    toggleModal (payload) {
      this.toggleModal(payload)
    },
    ...mapActions([
      'toggleDetail',
      'toggleModal'
    ])
  }
}
</script>

<style>

</style>
