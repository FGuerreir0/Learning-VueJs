<template>
<div class="post">
  <div class="post-head">
<slot name='head'></slot>
  </div>

  <div class="post-body">
<slot name='body'></slot>
  </div>

  <div class="post-body">
    <slot></slot>
  </div>

  <div class="post-footer">
<slot name='footer'></slot>
<a href="#" class="link">
  <!-- SE NÃO PASSAR NENHUMA INFORMAÇÃO PARA A SLOT APARECERÁ (default link) -->
  <slot name="button">Default Link...</slot>
  </a>
  </div>
</div>
</template>


<style scoped>
.post {
  margin: 15px auto;
}

.post-head {
  padding: 5px 12px;
  background-color: #eeeeee;
}

.post-body{
  font-size: 16px;
}

.post-footer{
  font-style: italic;
}

.link{
  float:right;
  
}
.post_paragraph{
  color: green
}
</style>