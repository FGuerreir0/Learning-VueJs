<template>
  <li class="list-group-item">
    <!--<span>{{ titulo }}</span> FORMA SEM CONCATENAÇÃO-->
    <!--<span>{{ tituloConcac }} | {{ ano }}</span>-->
    <span>{{ filme.titulo }} | {{ filme.ano }}</span>

    <button @click="selecionar" class="btn btn-success float-right">
      Seleccionar
    </button>
  </li>
</template>

<script>
export default {
  props: {
    filme: {
      type: Object,
      required: true
    }
    /*
    titulo: { type: String, required: true },
    ano: { type: Number, required: true }
  },
  computed: {
    tituloConcac() {
      return `Título: ${this.titulo}`;
    }*/
  },
  methods: {
    selecionar() {
      this.$emit("selecionarFilme", this.filme);
    }
  }
  /* LIFECYCLE CREATED didmount no react
    created() {
        console.log('Titulo a adicionar:', this.titulo);
    }*/
};
</script>
