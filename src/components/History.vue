<template>
<v-app>
        <v-container fluid>
            <v-layout row>
                <v-flex md12 lg10>
                    <v-card>
                        <v-card-title primary title>
                            <div>
                            <h1 class="display-5 text-lg-center">{{ history }}</h1>
                            </div>
                        </v-card-title>
                    </v-card>

    
        <v-card>
          <v-toolbar flat>
            
            <v-toolbar-title>Parties</v-toolbar-title>
            <v-spacer></v-spacer>
            
          </v-toolbar>
          
          <v-container fluid grid-list-sm>
            <v-layout row wrap>
              <v-flex md12 lg10>
                <v-card color="green" class="white--text" width="100%" height="100%">
                  <v-card-title>
                    Partie  - Vous avez gagné cette partie avec  points. Cliquez pour voir l'historique des actions.</v-card-title>
                </v-card> 
                <v-card color="yellow" class="black--text" width="100%" height="100%">
                  <v-card-title>
                    Partie  - Votre adversaire a gagné cette partie avec  points. Cliquez pour voir l'historique des actions.</v-card-title>
                </v-card> 
              </v-flex>
            </v-layout>
          </v-container>
    <div id="dis"></div> 
    <div id="charts" style="width: 100%;">
            <div style="margin-top: 20px; margin-left: 10px;">
                <v-card color="red" width="30px" height="30px"></v-card><span>Joueur : Bugs</span>
                <v-card color="green" width="30px" height="30px"></v-card><span>Joueur : Progression</span>
                <v-card color="yellow" width="30px" height="30px"></v-card><span>IA : Progression</span>
            </div>
            <div>
            <ul>
                <li class="li-bar">
                    
                    <div>    
                        <v-card color="red" width="50px" v-bind:style="{ height: '50px'}"></v-card>
                        <p>{{  }}</p>
                        <v-card color="green" width="50px" v-bind:style="{ height: '50px'}">Vous</v-card>
                        <p>{{  }}</p>
                    </div>
                    <div> 
                        <v-card class="ai" color="yellow" width="50px" v-bind:style="{ height: '50px'}">IA</v-card>
                        <p>{{  }}</p>
                    </div>
                    <div style="width: 0;"></div> 

                </li>
                
            </ul>
            </div>        
        </div>
        <v-btn class="yellow--text">Une nouvelle partie ?</v-btn>
          
        </v-card>
      </v-flex>
    </v-layout>
    </v-container>
  </v-app>
        
    
</template>

<script>
import { store } from '../store/store'
export default {
    store, 
    name: 'History',
    data(){
        return {
            history: 'Voici l\'historique des parties déjà jouées lors de cette session',
            
        }
    },
    computed: {
        
    },
    methods: {
        

    }
    
}
</script>

<style>

    .li-bar {
        display: inline-block;
        list-style-type: none;
        width: 120px;
        margin-right: 20px;
    }
    .bar {
        width: 30px;
        height: 200px;
        background-color: 'green'
    }
    li div {
        display: inline-block;
        width: 45%;
    }
    .li-bar .ai {
        color: black;
        text-align: center;
    }
    

</style>


