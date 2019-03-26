<template>
    <div>
        <v-card>
            <v-card-title primary-title>
                <h2>Vous</h2>
            </v-card-title>
        </v-card>
        <IEcharts :option="gauge" style="width: 400px; height: 300px;"></IEcharts>
        <IEcharts :option="bugs" style="width: 300px; height: 250px;"></IEcharts> 
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
import IEcharts from 'vue-echarts-v3/src/full.js'
export default {

    store,
    name: 'Player',
    
    data(){
        return {
            playerScore: 0,
            playerBug: 0,
            playerProgress: 0,
            playerNewBug: 0,
            gauge: {
                itemStyle: {
                    color: '#FFCC00'
                },
                
                series: [
                {
                    name: 'Code',
                    type: 'gauge',
                    radius: '100%',
                    itemStyle: {

                        color: '#AAAA55',
                    },
                    splitNumber: 10,
                    min: 0,
                    max: 1000,

                    detail: {
                        show: true,
                        itemStyle: {
                            color: '#FFCC00'
                        },
                        formatter: '{value}'},
                    data: [{
                    value: 0,
                    itemStyle: {
                        color: '#FFCC00'
                    },
                    name: 'player'
                    }
                    ]
                }
                ]
            },
            
                 bugs:{
                     series: [                       
                         {
                             type: 'gauge',
                             center: [ '63%', '30%' ],
                             radius: '100%',
                             min: 0,
                             max: 100,
                             startAngle: 225,
                             endAngle: 315,
                             clockwise: false,
                             splitNumber: 10,
                             axisLine: {
                                 lineStyle: {
                                     width: 10
                                 }
                             },
                             axisTick: {
                                 show: false
                             },
                             axisLabel: {
                                 formatter: function(v){
                                     switch(v + ''){
                                         case '0': return '0';
                                         case '1': return '50';
                                         case '2': return '100';
                                     }
                                 }
                             },
                             splitLine: {
                                 length: 10,
                                 lineStyle: {
                                     color: 'white'
                                 }
                             },
                             pointer: {
                                 width: 8
                            },
                            title: {
                                show: true,
                                color: 'red',
                                bottom: '60%'
                            },
                            data: [
                                {
                                    value: 0,
                                    name: 'Bugs'
                                }
                            ]
                         }
                     ]
                 }
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
            this.setProgress(playerProgress, playerNewBug)
            console.log('PLAYER updated', this.playerScore, this.playerBug)
            this.displayUpdates(this.playerScore, this.playerBug)
            return this.launchPlayerTurn()
        },
        setProgress(playerProgress, playerNewBug){
            this.playerScore = this.playerScore + playerProgress
            this.playerProgress = playerProgress
            this.playerBug = this.playerBug + playerNewBug
            this.playerNewBug = playerNewBug
        },
        displayUpdates(playerScore, playerBug) {
            this.gauge.series[0].data[0].value = playerScore
            this.bugs.series[0].data[0].value = playerBug
        },
        
        setPlayerDebug(){
            this.playerProgress = this.playerBug
            this.playerNewBug = 0
            this.playerScore = this.playerScore + this.playerProgress
            this.playerBug = 0
            console.log('PLAYER debugging', this.playerScore, this.playerBug, this.playerProgress)
            this.displayUpdates(this.playerScore, this.playerBug)
            return this.launchPlayerTurn()
        },
        launchPlayerTurn(){
            this.$emit('playerTurn', this.playerProgress, this.playerNewBug, this.playerScore, this.playerBug)
            console.log('PLAYER emits playerTurn', this.playerProgress, this.playerNewBug)
        },
        sanctionPlayer() {
            this.playerScore = this.playerScore - (this.playerBug * 2)
            this.playerProgress = 0
            this.playerNewBug = 0
            this.$emit('playerTurn', this.playerProgress, this.playerNewBug, this.playerScore, this.playerBug)
        }
        
     
    },
    components: {
        Commands,
        Debug,
        IEcharts
    }
    
}
</script>

<style>
    strong {
        color: yellow;
    }
</style>


