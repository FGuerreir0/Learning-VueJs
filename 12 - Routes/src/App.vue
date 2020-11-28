<template>
  <div id="app">
    <div class="jumbotron">
      <h1 class="display-4">Vue Router</h1>
      <p class="lead">Adding Routes to SPA</p>
    </div>
    <div class="container">
      <router-link to="/" class="btn btn-info mb-2 mr-2">Home</router-link>

      <router-link :to="{ path: '/contacts' }" class="btn btn-info mb-2 mr-2">Contacts</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>
