<template>
  <div id="race">
    <v-app dark>

      <v-layout>
        <v-card class="d-inline-block">
          
            <v-flex sm12 xl12>
              <v-card class="elevation-20">
                <v-card-title primary-title>
                  <div>
                    <h1 class="display-2 text-sm-center text-xl-center">{{ title }}</h1>
                  </div>
                </v-card-title>
              </v-card>
        
            <router-view/>
            </v-flex>
          </v-card>
      </v-layout>
    </v-app>
  </div>
</template>

<script>
import Race from './components/Race.vue'
import History from './components/History.vue'

export default {
  name: 'App',
  data() {
    return { 
      title: 'Serez-vous plus rapide que l\'intelligence artificielle ?',
    }
  },
  
  components: {
    Race,
    History,

  }
}
</script>


