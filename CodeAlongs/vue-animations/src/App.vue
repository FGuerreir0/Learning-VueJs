<template>
  <div id="app">

    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Animações</h1>
        <p class="lead">Treinando transição/animação de elementos/components no Vue.</p>
      </div>
    </div>

    <div class="container">
<button class="btn btn-primary mb-3" @click="mostrar = !mostrar">Mostrar Conteudo</button>

<transition name="fade">
<div class="alert alert-primary" v-if="mostrar">Animações...</div>
</transition>

    </div>
    

  </div>
</template>



<script>
export default {
    data() {
      return {
        mostrar: true
      }
    }
}
</script>

<style scoped>

.fade-enter{
opacity : 0;
}

.fade-enter-active{
transition : opacity 1s;
}

.fade-enter-to {
opacity : 1;
}

.fade-leave{
opacity: 1;
}

.fade-leave-active{
transition: opacity 2s; 
}

.fade-leave-to {
opacity: 0;
}



</style>

