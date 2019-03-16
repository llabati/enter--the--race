<template>
    <div>
        <v-card>
            <v-card-title primary-title>
                <h2>Vous</h2>
            </v-card-title>
        </v-card>
        <!--<IEcharts :option="gauge" style="width: 400px; height: 300px;"></IEcharts>
        <IEcharts :option="bugs" style="width: 300px; height: 250px;"></IEcharts> -->
        <v-card>
            <v-card-text light>
                <span>Votre score : <strong>{{ playerScore }}</strong></span>
                <span>Vos bugs : <strong>{{ playerBug }}</strong></span>
            </v-card-text>
        </v-card><v-card>
            <v-card-text light>
                <span>Progression : <strong>{{ playerProgress }}</strong></span>
                <span>Nouveaux bugs : <strong>{{ playerNewBug }}</strong></span>
            </v-card-text>
        </v-card>

        <commands style="margin-bottom: 25px;" v-on:youprog="setPlayerScore">Vous choisissez la vitesse de production de votre code, 
        mais attention : plus vous codez vite, plus le risque de produire des bugs augmente...</commands>
        <debug style="margin-left: 30px;" v-on:clearbug="setPlayerDebug">Si vos bugs montent à plus de 100, ils seront décomptés de votre score. 
        Vous pouvez les éliminer en cliquant ici, mais attention ! Vous passez votre tour...</debug>

    </div>  
</template>

<script>

import Vuex from 'vuex'
import { store } from '../store/store'
import Commands from './Commands.vue'
import Debug from './Debug.vue'
import AI from './AI.vue'
//import IEcharts from 'echarts'
export default {

    store,
    name: 'Player',
    
    data(){
        return {
            playerScore: 0,
            playerBug: 0,
            playerProgress: 0,
            playerNewBug: 0
        } 
        
    },
    computed: {
        
    },
    watch: {
        playerBug(){
            if (this.playerBug > 100) return this.sanctionPlayer()
        }
        
    },
    methods:{
        setPlayerScore(playerProgress, playerNewBug){
            this.playerScore = this.playerScore + playerProgress
            this.playerProgress = playerProgress
            this.playerBug = this.playerBug + playerNewBug
            this.playerNewBug = playerNewBug
            console.log('PLAYER updated', this.playerScore, this.playerBug)
            console.log('PLAYER emits playerTurn', this.playerProgress, this.playerNewBug)
            return this.launchPlayerTurn()
            //, this.playerNewBug
            //this.saveForDisplay()
        },
        saveForDisplay(){
            this.playerProgress = playerProgress
            this.playerNewBug = playerNewBug
            console.log('PLAYER - values progress & newBug for display', this.playerProgress, this.playerNewBug)
        },
        setPlayerDebug(){
            this.playerProgress = this.playerBug
            this.playerNewBug = 0
            this.playerScore = this.playerScore + this.playerProgress
            this.playerBug = 0
            console.log('PLAYER debugging', this.playerScore, this.playerBug, this.playerProgress)
            return this.launchPlayerTurn()
        },
        launchPlayerTurn(){
            this.$emit('playerTurn', this.playerProgress, this.playerNewBug, this.playerScore, this.playerBug)
        },
        sanctionPlayer() {
            this.playerScore = this.playerScore - (this.playerBug * 2)
            this.playerProgress = 0
            this.playerNewBug = 0
            this.$emit('playerTurn')
        }
        
     
    },
    components: {
        Commands,
        Debug,
        //IEcharts
    }
    
}
</script>

<style>
    strong {
        color: yellow;
    }
</style>


