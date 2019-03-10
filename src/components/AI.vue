<template>
    <div>
        <!--<IEcharts id="gauge" :option="gauge" style="width: 400px; height: 300px; margin-bottom: 100px;" ></IEcharts> -->
        <v-card>
            Progression: 
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
    data(){
        return {   
/*
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
            },  */  
        } 
    },
    watch: {
        
    },
    
    methods: {
        
    },
    components: {
        //IEcharts
    }
    

}
</script>
