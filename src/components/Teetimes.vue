<template>
  <v-data-table
    :headers="headers"
    :items="teetimes"
    :loading="true"
    hide-actions
    class="text-xs-left elevation-1"
  >
    <v-progress-linear slot="progress" color="green" indeterminate></v-progress-linear>
    <template slot="items" slot-scope="props">
      <td class="body-2">{{ props.item.time }}</td>
      <td class="body-2">$ {{ props.item.fee }}</td>
      <td class="text-xs-center">
        <v-edit-dialog :return-value.sync="props.item.player1" lazy>
          <v-chip v-if="props.item.player1" class="body-2" v-bind="playerChip(props.item.player1)" >
            <v-avatar size="20px" v-bind="playerAvatar(props.item.player1)">{{ props.item.player1.handicap}}</v-avatar>
            {{ props.item.player1.alias }}
          </v-chip >
          <div v-else>
            <div class="green--text">Disponible</div>
          </div>
          <v-text-field
          slot="input"
          v-model="props.item.player1"
          label="Nro Matricula"
          single-line
          lazy
          persistent
          >
          </v-text-field>
        </v-edit-dialog>
      </td>
      <td class="text-xs-center">
        <v-edit-dialog :return-value.sync="props.item.player2" lazy>
          <v-chip v-if="props.item.player2" class="body-2" v-bind="playerChip(props.item.player2)">
            <v-avatar size="20px" v-bind="playerAvatar(props.item.player2)">{{ props.item.player2.handicap}}</v-avatar>
            {{ props.item.player2.alias }}
          </v-chip >
          <div v-else>
            <div class="green--text">Disponible</div>
          </div>
          <v-text-field
          slot="input"
          v-model="props.item.player2"
          label="Nro Matricula"
          single-line
          lazy
          persistent
          >
          </v-text-field>
        </v-edit-dialog>
      </td>
      <td class="text-xs-center">
        <v-edit-dialog 
        :return-value.sync="props.item.player3"
          large
          persistent
          lazy
        >
          <v-chip v-if="props.item.player3" class="body-2" v-bind="playerChip(props.item.player3)">
            <v-avatar size="20px" v-bind="playerAvatar(props.item.player3)">{{ props.item.player3.handicap}}</v-avatar>
            {{ props.item.player4.alias }}
          </v-chip >
          <div v-else>
            <div class="green--text">Disponible</div>
          </div>
          <v-text-field
          slot="input"
          v-model="props.item.player3"
          label="Nro Matricula"
          >
          </v-text-field>
        </v-edit-dialog>
      </td>
      <td  class="text-xs-center">
        <v-edit-dialog :return-value.sync="props.item.player4" lazy>
          
          <v-chip v-if="props.item.player4" class="body-2" v-bind="playerChip(props.item.player4)">
            <v-avatar size="20px" v-bind="playerAvatar(props.item.player4)">{{ props.item.player4.handicap}}</v-avatar>
            {{ props.item.player4.alias }}
          </v-chip >
          <div v-else>
            <div class="green--text">Disponible</div>
          </div>

          <v-text-field
          slot="input"
          v-model="props.item.player4"
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
  export default {
    props: ['card'],
    data: () => ({
      free: false,
      headers: [
        { text: 'Hora', value: 'time' },
        { text: 'Fee', value: 'fee', sortable: true, align: 'left' },
        { text: 'Jugador 1', value: 'player1', sortable: false, align: 'center' },
        { text: 'Jugador 2', value: 'player2', sortable: false, align: 'center' },
        { text: 'Jugador 3', value: 'player3', sortable: false, align: 'center' },
        { text: 'Jugador 4', value: 'player4', sortable: false, align: 'center' }

      ],
      teetimes: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        player1: {
          fullname: 'Tomas Caraccia'
        },
        player2: 'Disponible',
        player3: 'Disponible'
      },
      defaultItem: {
        time: '9:00',
        fee: 350
      }
    }),
    computed: {
      checkSlot () {
        console.log(this)
        return true
      },
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },
    watch: {
      dialog (val) {
        val || this.close()
      }
    },
    created () {
      this.initialize()
    },
    methods: {
      initialize () {
        this.teetimes = [
          {
            time: '8:00',
            fee: 500,
            player4: {
              alias: 'Leticia D',
              enrolment: '97577',
              gender: 'F',
              handicap: 28
            },
            player2: {
              alias: 'Tomas C',
              enrolment: '97577',
              gender: 'M',
              handicap: 25
            }
          },
          {
            time: '8:30',
            fee: 500
          },
          {
            time: '9:00',
            fee: 600
          },
          {
            time: '9:30',
            fee: 600
          },
          {
            time: '10:00',
            fee: 600
          },
          {
            time: '10:30',
            fee: 600
          },
          {
            time: '11:00',
            fee: 600
          },
          {
            time: '11:30',
            fee: 600
          },
          {
            time: '12:00',
            fee: 600
          },
          {
            time: '12:30',
            fee: 600
          },
          {
            time: '13:00',
            fee: 600
          },
          {
            time: '13:30',
            fee: 600
          },
          {
            time: '14:00',
            fee: 600
          },
          {
            time: '14:30',
            fee: 600
          },
          {
            time: '15:00',
            fee: 600
          }
        ]
      },
      editItem (item) {
        this.editedIndex = this.teetimes.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
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
