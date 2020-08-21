<template>
<div>
  <h2>Home Component</h2>
  <p>Insert Your Name: </p>
  <input type="text" v-model="name">

  <small>{{ name }}</small>
</div>
</template>

<script>
export default {
  data(){
    return{
      name:''
    }
  }
}
</script>