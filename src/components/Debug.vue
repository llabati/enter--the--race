<template>
    <div id="debug">
        <v-btn round color="red" class="white--text" v-on:click="debug">Déboguer</v-btn>
        
    </div>
</template>

<script>
export default {
    name: 'Debug',

    data() {
        return {

        }
    },

    methods: {
        debug(){
            this.$emit('clearbug')
        }
         
    }
}
</script>

<style>
    #debug {
        margin-left: 0;
    }
</style>
