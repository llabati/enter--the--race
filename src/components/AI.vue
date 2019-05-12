<template>
    <div>
        <v-card>
            <v-card-title primary-title>
                <h2>La machine</h2>
            </v-card-title>
        </v-card>
                
        <v-card-title><br></v-card-title>
        <IEcharts id="gauge" :option="gauge" style="width: 400px; height: 300px; margin-bottom: 100px;" ></IEcharts> 
        <v-card>
            <v-card-text light>
                <p>Machine : <strong>{{ AIScore }}</strong></p>
                <p>Progression: <strong>{{ AIProgress }}</strong></p>
            </v-card-text>
        </v-card>
        <v-card>
        <v-card-text>
            <slot name="play"></slot>
        </v-card-text>
    </v-card>
        <v-card>
            <v-card-text>
                <slot class="body-1"></slot>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
// responsabilité du composant : faire progresser les résultats de l'AI et afficher les scores
import { store } from '../store/store'
import IEcharts from 'vue-echarts-v3/src/full.js'
export default {
    name: 'AI',
    store,
    props: [ 'launchAI' ],
    data(){
        return {   
            AIProgress: 0,
            AIScore : 0,
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
                    name: 'ai'
                    }
                    ]
                }
                ]
            }, 
        } 
    },
    watch: {
        launchAI(){
            return this.setAIScore()
        },

        AIScore(){
            if (this.AIScore > 1000) this.$emit('gameover')
        }
    },
    
    methods: {
        setAIScore(){
            this.AIProgress = Math.floor(Math.random() * 250)
            console.log('AI', this.AIProgress)
            this.setMove(this.AIScore, this.AIProgress)
            this.displayUpdates(this.AIScore)
            return this.launchTurn()
        },
        displayUpdates(AIScore) {
            this.gauge.series[0].data[0].value = AIScore
        },
        launchTurn(){
            this.$emit('setTurn', this.AIProgress, this.AIScore)
        },
        setMove(AIScore, AIProgress){
            return this.AIScore = this.AIScore + this.AIProgress
        }
    },
    components: {
        IEcharts
    }
    

}
</script>
