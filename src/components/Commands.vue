<template>
<div id="commands">
    <select name="speeds" id="speeds">
            <option class="choice" v-for="speed in speeds" :key="speed.id">{{ speed }}</option>
    </select>
    <v-btn round color="yellow" class="black--text" v-on:click="getPlayerChoice">Jouer</v-btn>
</div>
    
</template>

<script>

export default {
    name: 'Commands',

    data(){
        return {
            speeds: [ 1, 2, 3, 4, 5 ],
            choice: 1,
            playerProgress: 0
        }
    },

    methods: {
        getPlayerChoice(){
            this.choice = document.querySelector('#speeds').value
            return this.setPlayerProgression()
        },
        setPlayerProgression(choice){
            this.playerProgress = Math.floor(Math.random() * this.choice * 100)
            this.playerNewBug = Math.floor(Math.random() * this.choice * 10)
            console.log('COMMANDS', this.choice, this.playerProgress, this.playerNewBug)
            this.$emit('youprog', this.playerProgress, this.playerNewBug)
        },
       
        
    },
    
    
}
</script>

<style>
#commands {
    width: 50%;
}
    #speeds {
        margin-top: 10px;
        width: 20%;
        padding-left: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        /*padding-left: 30px;*/
        font-size: 20px;
        line-height: 1.4;
        font-size: 20px;
        text-align: center;
        box-shadow: 1px 1px 1px 1px;
    }

</style>