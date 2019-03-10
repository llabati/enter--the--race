<template>
    <v-app>
        <v-container fluid>
            <v-layout row>
                <v-flex md5 lg5>
                    <v-card>Progression du joueur: </v-card>
                    <player></player>
                </v-flex>
                <v-divider vertical light warning></v-divider>
                <v-flex md2 lg2>
                </v-flex>
                <v-divider vertical light warning></v-divider>
                <v-flex md5 lg5>
                    <v-card>Progression de l'IA : </v-card>
                    <AI>
                        <template slot="play">
                            Pour gagner, vous avez la possibilité de choisir votre vitesse de code, de 1 à 5. En choisissant la vitesse 1, vous irez lentement, amsi avec peu de bugs. 
                            A l'inverse, la vitesse 5 vous permettra d'aller vite... mais vous risquez de faire de nombreux bugs.
                        </template>
                            
                        Vous pouvez convertir vos bugs en points de progression, en cliquant sur DEBOGUER. 
                        Attention : si vos bugs atteignent 100, ils seront soustraits de votre progression. Déboguez avant que vos bugs ne vous pénalisent !
                        
                    </AI>
                </v-flex>
            </v-layout>
            <exit></exit>
        </v-container>
    </v-app>
</template>

<script>

import Player from './Player.vue'
import AI from './AI.vue'
import Exit from './Exit.vue'
import { store } from '../store/store'
export default {

    name: 'Game',
    
    store,
    data(){
        return {
            
        }
    },
    watch: {
    },
    
    methods: {
        
    },
    components: {
        Player,
        AI,
        Exit
    }
    
}
</script>
