<template>
<v-app>
    <v-container fluid>
        <v-layout row>
            <v-flex md12 lg12>
                <v-card>
                    <v-card-title primary title>
                        <div class="display-1 text-sm-center text-xl-center yellow--text">
                            {{ claimVictory() }} avec {{ winner }} points sur {{ total }} </div>
                    </v-card-title>
                </v-card>
                <v-toolbar flat>
                    <v-toolbar-title>Les actions de la partie</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
            </v-flex>
        </v-layout>
        <results :game="game"></results>
    
        <v-btn class="yellow--text" v-on:click="setNewGame">Une nouvelle partie ?</v-btn>
        <v-layout>
          <v-btn class="yellow--text large-bottom" v-on:click="goToHistory">Découvrez l'historique de toutes vos parties</v-btn>
        </v-layout>
    </v-container>
</v-app>
</template>

<script> 
import { store } from '../store/store'
import Results from './Results.vue'

export default {
    store,
    data(){
        return {
            victory: '',
            
        }
    },
    computed: {
        playerGameScore(){
            return this.$store.state.playerFinalScore
        },
        AIGameScore(){
            return this.$store.state.AIFinalScore
        },
        winner(){
            return Math.max(this.playerGameScore, this.AIGameScore)
        },
        total(){
            return this.playerGameScore + this.AIGameScore
        },
        game() {
            return this.$store.state.game
        }
        
    },
    methods: {
        claimVictory(){
            
            if (this.playerGameScore > this.AIGameScore){
                return this.victory = 'Vous avez gagné '
            } else {
                return this.victory = "C'est la machine qui a gagné "
            }
        },

        setNewGame: function(){
            this.$store.commit('resetGame')
            this.$router.push('/')
        },
        goToHistory: function(){
            this.$router.push('/history')
        }
    },
    components: {
        Results
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


