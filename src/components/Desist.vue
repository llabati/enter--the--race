<template>
    <div>
        <v-layout>
            <v-card>
                <v-card-title primary title>
                    <div class="display-1 text-sm-center text-xl-center yellow--text">{{ quitTitle }}</div>
                </v-card-title>
                <v-card-actions>
                    <v-btn round class="yellow--text">Une nouvelle partie ?</v-btn>
                </v-card-actions>
            </v-card>
        </v-layout>
    </div>
</template>

<script>
export default {
    data(){
        return {
            quitTitle: 'Vous venez d\'abandonner une partie en cours'
        }
    }
    
}
</script>