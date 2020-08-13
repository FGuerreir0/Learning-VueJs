<template>
    <div>
        <h2>Filme selecionado</h2>

        <div class="card" v-if="filme">
            <div class="card-body">
                <h5 class="card-title">{{filme.titulo}} | {{filme.ano}}</h5>
                <button @click="editar" class="btn btn-danger float-right">Editar</button>
            </div>
        </div>
    <p v-else>Nenhum Filme Seleccionado</p>
    </div>
</template>

<script>

import { eventBus } from './../main'

export default {
  /*  
  PARA RECEBER A COMUNICAÇÃO DE DADOS DE UM COMPONENTE IRMAO DEPOIS DE TER PASSADO PELO COMPONENTE PAI TEMOS DE CRIAR PROPS, SE FOR POR EVENTBUS SERÁ POR DATA
  props:{
        filme:Object
    }*/

    data(){
return{
    filme:undefined
}
    },
    created(){
        eventBus.$on('selecionarFilme', (filmeSelecionado)=>{
            this.filme = filmeSelecionado;
        });
    },
    methods:{
        editar(event){
            this.$emit('editarFilme', this.filme)
        }
    }
}
</script>