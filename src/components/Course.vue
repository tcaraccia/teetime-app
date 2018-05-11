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
        <v-btn flat color="green"  @click.stop="teetimesDialog = !teetimesDialog"> Teetimes</v-btn>
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
    <v-dialog v-model="teetimesDialog" v-bind="card" max-width="500px">
        <v-card>
          <v-card-title v-text="card.title"> </v-card-title>
          <v-card-actions>
            <v-btn color="green" flat @click.stop="teetimesDialog=false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
    
</template>

<script>
export default {
  data () {
    return {
      teetimesDialog: false
    }
  },
  props: ['card'],
  methods: {
    switchDetail (card) {
      card.showDetail = !card.showDetail
    },
    clickTeeTimes (card) {
      this.$router.push({name: 'coursett', params: { id: card.id }})
    }
  }
}
</script>

<style>

</style>
