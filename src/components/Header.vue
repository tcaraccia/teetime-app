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
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  methods: {
    clickHome () {
      this.$router.push({name: 'Courses'})
    },
    clickTeeTimes (_id) {
      this.$router.push({name: 'coursett', params: { id: _id }})
    }
  }

}
</script>

<style>

</style>
