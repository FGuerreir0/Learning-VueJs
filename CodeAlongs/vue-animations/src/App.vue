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


<div class="form-group">
  <select class="form-control" v-model="efeitoSeleccionado">
    <option value="fade">Fade</option>
    <option value="zoom">Zoom</option>
    <option value="slide">Slide</option>
  </select>

</div>
<transition :name="efeitoSeleccionado">
<div class="alert alert-primary" v-if="mostrar">SELECCIONE UMA OPÇÃO EM CIMA</div>
</transition>

<transition name="slide" type="animation" :duration="{ enter:5000, leave:610 }">
<div class="alert alert-primary" v-if="mostrar">SLIDE LINEAR</div>
</transition>

<transition name="slideP" type="animation" :duration="{ enter:5000, leave:610 }">
<div class="alert alert-primary" v-if="mostrar">SLIDE C/ PROGRESSÃO</div>
</transition>

<transition name="fade">
<div class="alert alert-primary" v-if="mostrar">FADE</div>
</transition>

<transition name="zoom">
<div class="alert alert-primary" v-if="mostrar">ZOOM</div>
</transition>

<transition enter-class="" enter-active-class="animate__animated animate__bounceInLeft" enter-to-class="" leave-class="" leave-active-class="animate__animated animate__bounceOutDown" leave-to-class=""
>

  <div class="alert alert-primary" v-if="mostrar">npm Animate.css</div>
</transition>

<transition appear @before-enter="beforeEnter" @enter="enter"
@after-enter="afterEnter" @enter-cancelled="enterCancelled"

@before-leave="beforeLeave" @leave="leave"
@after-leave="afterLeave" @leave-cancelled="leaveCancelled"

:css="false"
>

  <div class="alert alert-primary" v-if="mostrar">Animation JavaScript</div>
</transition>

<transition appear appear-class="" appear-active-class="animate__animated animate__flipInY" appear-to-class="" enter-class="" enter-active-class="animate__animated animate__bounceInLeft" enter-to-class="" leave-class="" leave-active-class="animate__animated animate__bounceOutDown" leave-to-class=""
>

<!--
  FAZER ANIMAÇÃO NA RENDERIZAÇÃO INICIAL COM JAVASCRIPT
  
   @before-appear="beforeAppear" @enter="appear"
@after-appear="afterAppear" @appear-cancelled="appearCancelled" -->
  <div class="alert alert-primary" v-if="mostrar">Custom Class on render</div>
</transition>


    </div>
    

  </div>
</template>



<script>
export default {
    data() {
      return {
        mostrar: true,
        efeitoSeleccionado: 'fade'
      }
    },
    methods:{
      beforeEnter(el){
console.log('beforeEnter')
el.style.opacity = 0
      },
      enter(el, done){
console.log('enter');
let contagem=0
const intervalo = setInterval(()=>{
  el.style.opacity = +el.style.opacity + 0.1
  contagem++

  if( contagem > 10){
    clearInterval(intervalo)
    done()
  }
},150)
      },
      afterEnter(){
console.log('afterEnter')
      },
      enterCancelled(){
console.log('enterCancelled');
      },
        beforeLeave(el){
console.log('beforeLeave')
el.style.transition = 'width 0.1s'
el.style.overflow = 'hidden'
el.style.whiteSpace = 'nowrap'
      },
      leave(el, done){
console.log('leave');
let contagem = 0
const tamanho = el.offsetWidth
const intervalo = setInterval(()=>{
  el.style.width = (tamanho * (1 - (contagem / 10))) + 'px'
  contagem ++
  if (contagem > 10){
    clearInterval(intervalo);
    done()
  }
},150)
      },
      afterLeave(){
console.log('afterLeave')
      },
      leaveCancelled(){
console.log('leaveCancelled');
      }
    }
}
</script>


<style scoped>

.fade-enter, .fade-leave-to {
opacity : 0;
}

.fade-enter-active, .fade-leave-active{
transition : opacity 1s;
}

.fade-enter-to, .fade-leave {
opacity : 1;
}



.zoom-enter, .zoom-leave-to {
transform: scale(0);
}

.zoom-enter-active, .zoom-leave-active{
transition : transform 0.5s;
}

.zoom-enter-to, .zoom-leave {
transform: scale(1);
}


@keyframes slide {
  0% {
transform: translateX(-100px);
  }

  100% {

transform: translateX(0);
  }
  
}

.slide-enter, .slide-leave-to{
  opacity: 0;
}

.slide-enter-to, .slide-leave {
opacity: 1;
}

.slide-enter-active{
animation: slide 0.7s;
transition: opacity 1s;
}

.slide-leave-active{
animation: slide 0.7s reverse;
transition: opacity 0.7s;
}



@keyframes slideP {
  0% {
transform: translateX(-100px);
  }

  100% {

transform: translateX(0);
  }
  
}

.slideP-enter, .slideP-leave-to{
  opacity: 0;
}

.slideP-enter-to, .slideP-leave {
opacity: 1;
}

.slideP-enter-active{
animation: slide 0.7s cubic-bezier(0.87, 0.36, 1, 0.23);
transition: opacity 1s cubic-bezier(0.87, 0.36, 1, 0.23);
}

.slideP-leave-active{
animation: slide 0.7s reverse cubic-bezier(0.87, 0.36, 1, 0.23);
transition: opacity 0.7s cubic-bezier(0.87, 0.36, 1, 0.23);
}


</style>

