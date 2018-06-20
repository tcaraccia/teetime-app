<template>
      <v-data-table
        :headers='headers'
        :items='selected.times'
        :loading='loading'
        hide-actions
        class='text-xs-left elevation-2'
      >
        <template slot='items' slot-scope='props'>
          <td class='body-2'>{{ moment(props.item.time).format('HH:mm') || '?' }}</td>
          <td class='body-2'>$ {{ props.item.fee || '?' }}</td>
          <td v-for='player in props.item.players' :key='player'>
            <span v-if="player"> NOT AVAILABLE</span>
            <v-text-field v-else
              slot="input"
              placeholder="matricula nro"
              flat
              solo
              single-line
              autofocus
              light
              small
              >
          </v-text-field>
          </td>
        </template>
      </v-data-table>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('teetimes')
export default {
  props: ['courseId', 'day'],
  data: () => ({
    headers: [
      { text: 'Hora', value: 'time' },
      { text: 'Fee', value: 'fee', sortable: true, align: 'left' },
      { text: 'Jugador 1', value: 'player1', sortable: false, align: 'center' },
      { text: 'Jugador 2', value: 'player2', sortable: false, align: 'center' },
      { text: 'Jugador 3', value: 'player3', sortable: false, align: 'center' },
      { text: 'Jugador 4', value: 'player4', sortable: false, align: 'center' }
    ]
  }),
  computed: {
    ...mapGetters({
      teetimes: 'all',
      loading: 'loading',
      status: 'status',
      dates: 'dates',
      selected: 'selected'
    })
  },
  methods: {
    ...mapActions(['bookTeetime']),
    openBooking (teetime) {
      this.bookTeetime(teetime)
    },
    playerAvatar: player => {
      return {
        color: player.gender === 'M' ? 'blue lighten-2' : 'pink lighten-2'
      }
    },
    playerChip: player => {
      return {
        color: player.gender === 'M' ? 'blue lighten-3' : 'pink lighten-3',
        'text-color': 'white'
      }
    }
  }
}
</script>
<style scoped>
</style>
