<template>
  <div id="app" class='container'>
    <h1>Advanced Vue Components</h1>
      <Post>
        <h3 slot="head"> Passing custome html data</h3>

        <template slot="body">
        <p class="post_paragraph">Learning named slots, with inheritance styles </p>
        <span>...</span>
        </template>

         <template>
        <p>This is a default slot</p>
        </template>

        <small slot="footer">by Fabio Guerreiro</small>

        <template slot="button">
          Details...
        </template>
      </Post>

      <hr>
<button @click="selectedComponent='Home'">Home</button>
<button @click="selectedComponent='About'">About</button>
<p>{{ selectedComponent }}</p>

<keep-alive>
  <!-- :include="about" - mantem o componente about em cache | :exclude="[Home, Post]"  contrario do include | max="2" mantem só 2 componentes activos em cache-->
<component :is="selectedComponent"></component>
</keep-alive>
  </div>
  
</template>

<script>
import Post from './components/Post'


import Home from './components/Home'
import About from './components/About'

export default {
  components:{
    Post,
    Home,
    About
  },
  data(){
    return{
        selectedComponent : 'Home'
    }
  }
}
</script>

<style scoped>
.container{
  width:960px;
  margin:auto;
}

</style>