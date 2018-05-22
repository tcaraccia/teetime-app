<template>
  <v-card>
    <v-card-media :src="course.src" height="200px"></v-card-media>
    <v-card-title primary-title>
        <div>
        <div class="headline" v-text="course.title"></div>
        <span class="grey--text">1,000 miles of wonder</span>
        </div>
    </v-card-title>
    <v-card-text>
        <span class="grey--text">{{course.available}} lugares disponibles</span>
    </v-card-text>
    <v-card-actions>
        <v-btn flat color="green" @click.native="toggleModal(course.id)">Teetimes</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click.native="toggleDetail(course.id)">
        <v-icon>{{ ((selected.id === course.id) && detail) ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
        </v-btn>
    </v-card-actions>
    <v-slide-y-transition>
        <v-card-text v-show="(selected.id === course.id) && detail">
        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we
        walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
    </v-slide-y-transition>
    <v-dialog v-model="showModal" v-bind="course" max-width="800px">
     <!-- <teetimes v-bind:card="card"></teetimes>-->
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
  props: ['course'],
  computed: {
    ...mapGetters([
      'loading', 'modal', 'detail', 'selected'
    ]),
    showModal: {
      get () {
        return ((this.selected.id === this.course.id) && this.modal)
      },
      set (value) {
        this.toggleModal()
      }
    }
  },
  methods: {
    toggleDetail (id) {
      this.toggleDetail(id)
    },
    toggleModal (id) {
      this.toggleModal(id)
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
