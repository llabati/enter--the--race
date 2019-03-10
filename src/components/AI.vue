<template>
    <div>
        <!--<IEcharts id="gauge" :option="gauge" style="width: 400px; height: 300px; margin-bottom: 100px;" ></IEcharts> -->
        <v-card>
            <v-card-title primary-title>
                <h2>La machine</h2>
            </v-card-title>
        </v-card>
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
import { store } from '../store/store'
//import IEcharts from 'vue-echarts-v3/src/full.js'
export default {
    name: 'AI',
    store,
    props: [ 'launchAI' ],
    data(){
        return {   
            AIProgress: 0,
            AIScore : 0
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
            this.AIScore = this.AIScore + this.AIProgress
            this.$emit('setTurn', this.AIProgress)
        }
    },
    components: {
        //IEcharts
    }
    

}
</script>
