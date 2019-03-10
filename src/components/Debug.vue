<template>
    <div>
        <v-btn round color="red" class="white--text" v-on:click="debug">Déboguer</v-btn>
        
    </div>
</template>

<script>
export default {
    name: 'Debug',

    data() {
        return {
            //playerNewBug: 0
        }
    },

    methods: {
        debug(){
            this.$emit('clearbug')

        }
         
    }
}
</script>