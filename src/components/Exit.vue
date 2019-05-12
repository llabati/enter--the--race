<template>
    <div class="bottom">
        <v-layout>
            <v-btn round color="yellow--text" v-on:click="reset">Abandonner</v-btn>
        </v-layout>
    </div>
</template>

<script>
export default {
    methods: {
        reset(){
            this.$store.commit('resetGame')
            return this.$router.push('/desist')
        }
    }
}
</script>

<style>
    .bottom {
        margin: 20px 40% 20px 40%;
    }
</style>