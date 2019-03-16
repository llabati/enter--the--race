<template>
<div id="result">
            <div id="charts" style="width: 100%;">
            <div style="margin-top: 20px; margin-left: 10px;">
                <v-card color="red" width="30px" height="30px"></v-card><span>Joueur : Bugs</span>
                <v-card color="green" width="30px" height="30px"></v-card><span>Joueur : Progression</span>
                <v-card color="yellow" width="30px" height="30px"></v-card><span>IA : Progression</span>
            </div>
            <div>
            <ul class="ul-bar">
                <li class="li-bar" v-for="prog in game" :key="prog.id">
                    
                    <div >    
                        <v-card color="red" width="50px" v-bind:style="{ height: prog.playerNewBug + 'px'}"></v-card>
                        <p>{{ prog.playerNewBug }}</p>
                        <v-card color="green" width="50px" v-bind:style="{ height: prog.playerProgress + 'px'}">Vous</v-card>
                        <p>{{ prog.playerProgress }}</p>
                    </div>
                    <div> 
                        <v-card class="ai" color="yellow" width="50px" v-bind:style="{ height: prog.AIProgress +'px'}">IA</v-card>
                        <p>{{ prog.AIProgress }}</p>
                    </div>
                    <div style="width: 0;"></div> 

                </li>
                
            </ul>
            </div>        
        </div>
</div>
    
</template>

<script>
export default {
    name: 'Result',
    props: ['game'],
    data(){
        return {}
    }
    
}
</script>

<style>

    .li-bar {
        display: inline-block;
        list-style-type: none;
        width: 120px;
        margin-right: 20px;
    }
    .bar {
        width: 30px;
        height: 200px;
        background-color: 'green'
    }
    li div {
        display: inline-block;
        width: 45%;
    }
    .li-bar .ai {
        color: black;
        text-align: center;
    }
    .width-none {
        display: none;
        width: 0px;
    }


</style>


