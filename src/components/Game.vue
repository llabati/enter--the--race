<template>
    <v-app>
        <v-container fluid>
            <v-layout row>
                <v-flex md5 lg5>
                    
                    <player v-on:playerTurn="upToAI" v-on:gameover="closeGame(true)"></player>
                </v-flex>
                <v-divider vertical light warning></v-divider>
                <v-flex md2 lg2>
                </v-flex>
                <v-divider vertical light warning></v-divider>
                <v-flex md5 lg5>
                    
                    <AI :launchAI = "launchAI" v-on:setTurn="saveTurn" v-on:gameover="closeGame(false)">
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
            launchAI: false,
            playerUpScore: 0,
            playerUpBug: 0,
            AIUpScore: 0,
            playerProg: 0,
            playerNewBugs: 0,
            AIProgress: 0,
            turn: {},
            game: []
        }
    },
    watch: {
        
        AIUpScore(){
            if (this.AIUpScore > 1000) return this.closeGame()
        }
    },
    
    methods: {
        upToAI(playerProgress, playerNewBug, playerScore, playerBug){
            console.log('GAME - playerProgress', playerProgress, playerNewBug)
            this.setupPlayerProgressAndScore(playerProgress, playerNewBug, playerScore, playerBug)
            console.log('GAME - playerUpScore', this.playerUpScore)
            return this.setLaunchAI()
        },
        setLaunchAI() {
            this.launchAI = !this.launchAI
            console.log('AI launched!')

        },
        saveTurn(AIProgress, AIScore){
            console.log('GAME - saveTurn', AIProgress, this.playerProg, this.playerNewBugs)
            this.setupAIProgressAndScore(AIProgress, AIScore)
            this.setupTurn()
            this.game.push(this.turn)
            if (this.playerUpScore > 1000) return this.closeGame()
        },
        setupPlayerProgressAndScore(playerProgress, playerNewBug, playerScore, playerBug){
            console.log('GAME - upToAI - setupPlayer', playerProgress, playerNewBug, playerScore, playerBug)
            this.playerProg = playerProgress
            this.playerNewBugs = playerNewBug
            this.playerUpBug = playerBug
            this.playerUpScore = playerScore
        },
        setupAIProgressAndScore(AIProgress, AIScore){
            this.AIProgress = AIProgress
            this.AIUpScore = AIScore
        },
        setupTurn(){
            this.turn = {}
            this.turn.AIProgress = this.AIProgress
            this.turn.playerProgress = this.playerProg
            this.turn.playerNewBug = this.playerNewBugs
        },
        closeGame(){
            //this.saveTurn(AIProgress, AIScore)
            console.log(this.game)
            this.$store.commit('saveGame', this.game)
            this.$store.commit('addToGames', this.game)
            this.$store.commit('addPlayerScore', this.playerUpScore)
            this.$store.commit('addAIScore', this.AIUpScore)
            console.log('GAME - addScores', this.playerUpScore, this.AIUpScore)
            this.$router.push('/end')
        },

        reset(){
            this.game = []
        }
        
    },
    components: {
        Player,
        AI,
        Exit
    }
    
}
</script>
