<template>
  <div>
    <v-layout>
       <v-flex sm12 lg12 xl12 >
        <v-card class="elevation-14">
          <v-card-title primary-title>
            <div>
              <div class="display-1 text-sm-center text-xl-center yellow--text">{{ subtitle }}</div>

            </div>
          </v-card-title>
        </v-card>
        <v-toolbar flat>
            <v-toolbar-title>Règles du jeu</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-container fluid grid-list-lg>
          <v-layout row wrap>
            <v-flex sm10 xl10>
              <explanation>C'est une course entre vous et la machine : en codant plus vite qu'elle, vous prenez le risque de faire de nombreux bugs, et d'être pénalisé. En réglant votre vitesse à chaque coup, trouvez la bonne stratégie pour faire mieux qu'elle. 
              A chaque tour, la machine progresse, et, elle, ne fait pas de bugs...</explanation>
        
              <game></game>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-btn class="yellow--text large-bottom" v-on:click="$router.push('/history')">Découvrez l'historique de toutes vos parties</v-btn>
        </v-layout>  
        </v-container>
       </v-flex>
    </v-layout>


  </div>

</template>

<script>
import App from '../App.vue'
import Explanation from './Explanation.vue'
import Game from './Game.vue'


export default {
  name: 'Race',
  data () {
    return {
      subtitle: 'Trouvez la bonne vitesse pour bien coder !',
    }
  },
  
  components: {
    Explanation,
    Game
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*.bottom-btn {
  margin: -200px 35% 10px 35%;

} */
.large-bottom {
  margin: -200px 20% 0px 25%;
  padding: 10px 30px 30px 30px;

}  

</style>
