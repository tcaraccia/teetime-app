<template>
  <transition name="fade-transition" mode="out-in">
    <v-app id="inspire">
      <topbar></topbar>
      <v-content>
        <v-container fluid fill-height>
          <transition name="fade-transition" mode="out-in">
            <router-view></router-view>
          </transition>
        </v-container>
      </v-content>
      <v-footer color="green" app>
        <span class="white--text">&copy;2018</span>
      </v-footer>
    </v-app>
  </transition>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    components: {
      'topbar': Header
    },
    props: {
      source: String
    }
  }
</script>