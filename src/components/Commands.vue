<template>
<div>
    <select name="speeds" id="speeds">
            <option v-for="speed in speeds" :key="speed.id">{{ speed }}</option>
    </select>
    <v-btn round color="yellow" class="black--text">Jouer</v-btn>
</div>
    
</template>

<script>

export default {
    name: 'Commands',

    data(){
        return {
            speeds: [ 1, 2, 3, 4, 5 ],
   
        }
    },

    methods: {
       
        
    },
    
    
}
</script>

<style>
    #speeds {
        width: 50%;
        height: 40px;
        background-color: '#EEE';
        padding-left: 30px;
        font-size: 20px;
        line-height: 1.4;
        color: '#AAAA00';
        box-shadow: 1px 1px 1px 1px;
    }
</style>