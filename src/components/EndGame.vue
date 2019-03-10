<template>
<v-app>
    <v-container fluid>
        <v-layout row>
            <v-flex md12 lg12>
                <v-card>
                    <v-card-title primary title>
                        <div class="display-1 text-sm-center text-xl-center yellow--text">
                            Avec points sur , </div>
                    </v-card-title>
                </v-card>
                <v-toolbar flat>
                    <v-toolbar-title>Les actions de la partie</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
            </v-flex>
        </v-layout>
    
        <div id="charts" style="width: 100%;">
            <div style="margin-top: 20px; margin-left: 10px;">
                <v-card color="red" width="30px" height="30px"></v-card><span>Joueur : Bugs</span>
                <v-card color="green" width="30px" height="30px"></v-card><span>Joueur : Progression</span>
                <v-card color="yellow" width="30px" height="30px"></v-card><span>IA : Progression</span>
            </div>
            <div>
            <ul class="ul-bar">
                <li class="li-bar">
                    
                    <div >    
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
        <v-layout>
          <v-btn class="yellow--text large-bottom">Découvrez l'historique de toutes vos parties</v-btn>
        </v-layout>
    </v-container>
</v-app>
</template>

<script>
import { store } from '../store/store'

export default {
    store,
    data(){
        return {
        }
    },
    computed: {
        
    },
    methods: {
        
    }
    
}

</script>

<style scoped>

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
    .width-none {
        display: none;
        width: 0px;
    }

</style>


