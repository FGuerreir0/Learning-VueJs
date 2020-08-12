<template>
  <div class="row">
    <!-- coluna 1 -->
    <div class="col-8">
      <h2>Filmes</h2>

      <ul class="list-group list-group-flush">
        <FilmesListaIten
          v-for="filme in filmes"
          :key="filme.id"
          :filme="filme"
          :class="aplicarActive(filme)"
          @selecionarFilme="filmeselecionado = $event"
        />
        <!--MODO COM FOR EACH, GENERO DE MAP NO REACT
        <FilmesListaIten
          v-for="filme in filmes"
          :key="filme.id"
          v-bind="filme"
        />
-->
        <!--
          <FilmesListaIten titulo="Vingadores"/> MODO SIMPLES
        <FilmesListaIten titulo="Ironman"/>
        <FilmesListaIten titulo="Pantera Negra"/>
-->
      </ul>
    </div>

    <!-- coluna 2 -->
    <div class="col-4">
      <FilmesListaItenInfo />
    </div>
  </div>
</template>

<script>
import FilmesListaIten from "./FilmesListaIten.vue";
import FilmesListaItenInfo from "./FilmesListaItenInfo.vue";

export default {
  components: {
    FilmesListaIten,
    FilmesListaItenInfo
  },
  data() {
    return {
      filmes: [
        { id: 1, titulo: "Vingadores", ano: 2010 },
        { id: 2, titulo: "Ironman", ano: 1999 },
        { id: 3, titulo: "Pantera Negra", ano: 2003 }
      ],
      filmeselecionado: undefined
    };
  },
  methods:{
aplicarActive(filmeIterado){
return{
  active: this.filmeselecionado && this.filmeselecionado.id === filmeIterado.id
}
}
  }
};
</script>
