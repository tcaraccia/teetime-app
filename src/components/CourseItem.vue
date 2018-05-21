<template>
  <v-card>
    <v-card-media :src="card.src" height="200px"></v-card-media>
    <v-card-title primary-title>
        <div>
        <div class="headline" v-text="card.title"></div>
        <span class="grey--text">1,000 miles of wonder</span>
        </div>
    </v-card-title>
    <v-card-text>
        <span class="grey--text">{{card.available}} lugares disponibles</span>
    </v-card-text>
    <v-card-actions>
        <v-btn flat color="green"> Teetimes</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click.native="switchDetail(card)">
        <v-icon>{{ card.showDetail ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
        </v-btn>
    </v-card-actions>
    <v-slide-y-transition>
        <v-card-text v-show="card.showDetail">
        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we
        walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
    </v-slide-y-transition>
    <v-dialog v-model="modal" v-bind="card" max-width="800px">
      <teetimes v-bind:card="card"></teetimes>
    </v-dialog>
  </v-card>
    
</template>

<script>
import Teetimes from './Teetimes'
import { mapGetters } from 'vuex'
export default {
  components: {
    'teetimes': Teetimes
  },
  props: ['card'],
  computed: {
    ...mapGetters([
      'loading', 'modal'
    ])
  }
}
</script>

<style>

</style>
