<template>
  <div id="app" class='container'>
    <h1>Advanced Vue Components</h1>
      <Post>
        <h3 slot="head"> Passing custome html data</h3>

        <template slot="body">
        <p>Learning named slots</p>
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
  </div>
  
</template>

<script>
import Post from './components/Post'

export default {
  components:{
    Post
  }
}
</script>

<style scoped>
.container{
  width:960px;
  margin:auto;
}
</style>