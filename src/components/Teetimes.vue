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
      <td>{{ props.item.time }}</td>
      <td>$ {{ props.item.fee }}</td>

      <td class="text-xs-center" v-bind:class="{free: props.item.player1 === 'Disponible'}">
        <v-edit-dialog :return-value.sync="props.item.player1" lazy>
          <div> {{ props.item.player1 }}</div>
          <v-text-field
          slot="input"
          v-model="props.item.player1"
          label="Edit"
          single-line
          counter
          >
          </v-text-field>
        </v-edit-dialog>
      </td>
      <td class="text-xs-center">
        <v-edit-dialog  :return-value.sync="props.item.player2" lazy>
          <div> {{ props.item.player2 }}</div>
          <v-text-field
          slot="input"
          v-model="props.item.player2"
          label="Edit"
          single-line
          counter
          >
          </v-text-field>
        </v-edit-dialog>
      </td>
      <td class="text-xs-center">
        <v-edit-dialog :return-value.sync="props.item.player3" lazy>
          <div> {{ props.item.player3 }}</div>
          <v-text-field
          slot="input"
          v-model="props.item.player3"
          label="Edit"
          single-line
          counter
          >
          </v-text-field>
        </v-edit-dialog>
      </td>
      <td  class="text-xs-center">
        <v-edit-dialog :return-value.sync="props.item.player4" lazy>
          <div> {{ props.item.player4 }}</div>
          <v-text-field
          slot="input"
          v-model="props.item.player4"
          label="Edit"
          single-line
          counter
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
        player2: 0,
        player3: 0,
        player4: 0
      },
      defaultItem: {
        time: '9:00',
        fee: 350,
        player1: 0,
        player2: 0,
        player3: 0,
        player4: 0
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
            fee: '350',
            player1: 97577,
            player2: 36342,
            player3: 12391,
            player4: 0
          },
          {
            time: '8:30',
            fee: '400',
            player1: 'Disponible',
            player2: 0,
            player3: 0,
            player4: 0
          },
          {
            time: '9:00',
            player1: 0,
            player2: 0,
            player3: 0,
            player4: 0
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
      }
    }
  }
</script>
<style scoped>
.free {
  background-color: lightgreen;
}
</style>
