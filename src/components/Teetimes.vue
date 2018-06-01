<template>
      <v-data-table
        :headers="headers"
        :items="teetimes"
        :loading="loading"
        hide-actions
        class="text-xs-left elevation-2"
      >
        <template slot="items" slot-scope="props">
          <td class="body-2">{{ props.item.time }}</td>
          <td class="body-2">{{ props.item.fee }}</td>
          <td class="text-xs-center">
            <v-edit-dialog 
            :return-value.sync="selected" 
            large
            persistent
            lazy
            >
              <v-chip v-if="props.item.player1" class="body-2" v-bind="playerChip(props.item.player1)" >
                <v-avatar size="20px" v-bind="playerAvatar(props.item.player1)">{{ props.item.player1.handicap}}</v-avatar>
                {{ props.item.player1.alias || null }}
              </v-chip >
              <div v-else>
                <v-btn icon class="mx-0" @click="openBooking(props.item)">
                  <v-icon color="teal">edit</v-icon>
                </v-btn>
              </div>
              <div slot="input" class="mt-3 title">Salida {{props.item.time }} </div>
              <v-text-field
              slot="input"
              v-model="selected"
              label="Nro Matricula"
              single-line
              autofocus
              >
              </v-text-field>
            </v-edit-dialog>
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
      selected: null,
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
      ...mapActions([
        'getTeetimes',
        'bookTeetime'
      ]),
      openBooking (teetime) {
        this.bookTeetime(teetime)
      },
      playerAvatar: (player) => {
        return {
          'color': (player.gender === 'M') ? 'blue lighten-2' : 'pink lighten-2'
        }
      },
      playerChip: (player) => {
        return {
          'color': (player.gender === 'M') ? 'blue lighten-3' : 'pink lighten-3',
          'text-color': 'white'
        }
      }
    }
  }
</script>
<style scoped>
</style>
