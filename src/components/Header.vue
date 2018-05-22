<template>
  <div>
    <v-navigation-drawer v-model="sidebar" temporary app>
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
        <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
        <v-toolbar-title @click="clickHome" >Teetimes {{this.$route.meta.title}}</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    clickHome () {
      this.$router.push({name: 'home'})
    },
    clickTeeTimes (_id) {
      this.$router.push({name: 'teetimes', params: { id: _id }})
    },
    ...mapActions([
      'toggleDrawer'
    ])
  },
  computed: {
    ...mapGetters(['drawer']),
    sidebar: {
      get () {
        console.log(this.drawer)
        return this.drawer
      },
      set (state) {
        if (state !== this.drawer) {
          this.toggleDrawer()
        }
      }
    }
  }
}
</script>

<style>

</style>
