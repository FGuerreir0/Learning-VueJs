import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//FAZER A PASSAGEM DE DADOS DE COMPONENT IRMAO PARA COMPONENTE IRMAO SEM PASSAR PELO COMPONENT PAI PRIMEIRO
// NO EVENTBUS PODEMOS DECLARAR DATA, METHODS OU COMPUTEDS QUE IRÃO SER GLOBAIS E DEPOIS ACESSAR MAIS FACILMENTE EM QUALQUER COMPONENTE
export const eventBus = new Vue({
  methods: {
    selecionarFilme(filmeSelecionado){
      this.$emit('selecionarFilme', filmeSelecionado)
    },
    
    actualizarFilme(filmeActualizado){
    this.$emit('actualizarFilme', filmeActualizado)
  }
}
  })

new Vue({
  render: h => h(App),
}).$mount('#app')
