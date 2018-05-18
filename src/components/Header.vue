<template>
  <div>
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list dense>
      <v-list-tile @click="clickHome">
          <v-list-tile-action>
          <v-icon>fas fa-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="clickHome">
          <v-list-tile-action>
          <v-icon>fas fa-golf-ball</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
          <v-list-tile-title>Teetimes</v-list-tile-title>
          </v-list-tile-content>
      </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="green" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title @click="clickHome" >Teetimes {{this.$route.meta.title}}</v-toolbar-title>
          <v-menu
            ref="date"
            :close-on-content-click="true"
            v-model="date"
            :nudge-right="40"
            :return-value.sync="tempDate"
            lazy
            transition="scale-transition"
            offset-y
            min-width="290px"
            class="mx-auto"
          >
            <v-text-field
              slot="activator"
              v-model="tempDate"
              prepend-icon="event"
              readonly
              color="white"

            ></v-text-field>
            <v-date-picker 
              color="green"
              header-color="green" 
              v-model="tempDate" 
              @input="$refs.date.save(tempDate)"
              locale="es-ar">
            </v-date-picker>

          </v-menu>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    tempDate: null,
    dateFormatted: null,
    date: null
  }),
  created () {
    this.date = new Date()
  },
  computed: {
    computedDateFormatted () {
      return this.formatDate(this.date)
    }
  },
  watch: {
    date (val) {
      this.dateFormatted = this.formatDate(this.date)
    }
  },
  methods: {
    clickHome () {
      this.$router.push({name: 'CourseList'})
    },
    clickTeeTimes (_id) {
      this.$router.push({name: 'coursett', params: { id: _id }})
    },
    formatDate (date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate (date) {
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${day}-${month.padStart(2, '0')}-${year.padStart(2, '0')}`
    }
  }

}
</script>

<style>

</style>
