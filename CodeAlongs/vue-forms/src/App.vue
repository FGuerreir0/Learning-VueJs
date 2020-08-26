<template>
  <div id="app">
    
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Formulários no Vue</h1>
        <p class="lead">Treinando a manipulação de formulários</p>
      </div>
    </div>

    <div class="container">

      <div class="row">

        <!-- formulario -->
        <div class="col-sm-6">

          <h3>Preencha abaixo</h3>

          <form @submit.prevent="enviar" @reset="reset">

            <div class="form-group">
              <label>Nome:</label>
              <input type="text" class="form-control" placeholder="Seu nome" v-model.trim="desenvolvedor.nome">
            </div>

            <div class="form-group">
              <label>Endereço de email:</label>
              <input type="email" class="form-control" placeholder="Seu email" v-model.trim="desenvolvedor.email"
                >
                <!-- Desconstrução do v-model:
                :value="desenvolvedor.email"
                @input="desenvolvedor.email = $event.target.value" 
                
                -->
            </div>

            <div class="form-group">
              <label>Idade:</label>
              <input type="number" class="form-control" placeholder="Sua idade" v-model.number="desenvolvedor.idade">
            </div>

            <div class="form-group">

              <p>Gênero:</p>

              <div class="form-check form-check-inline">
                <input type="radio" class="form-check-input" value="Masculino" v-model="desenvolvedor.genero">
                <label class="form-check-label">Masculino</label>
              </div>

              <div class="form-check form-check-inline">
                <input type="radio" class="form-check-input" value="Feminino" v-model="desenvolvedor.genero">
                <label class="form-check-label">Feminino</label>
              </div>

            </div>

            <div class="form-group">
              <label>Ocupação:</label>
              <select class="form-control" v-model="desenvolvedor.ocupacao">
                <option value="" disabled>Seleccione uma opção...</option>
                <option v-for="(ocupacao, indice) in ocupacoes" v-bind:key="indice" :value="ocupacao" >
                {{ocupacao}}  
                </option>
              </select>
            </div>  

            <div class="form-group">

              <p>Tecnologias:</p>

              <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" value="JavaScript" v-model="desenvolvedor.tecnologias">
                <label class="form-check-label">JavaScript</label>
              </div>

              <div class="form-check form-check-inline" >
                <input type="checkbox" class="form-check-input" value="Vue JS" v-model="desenvolvedor.tecnologias">
                <label class="form-check-label">Vue JS</label>
              </div>

              <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" value="Vuex" v-model="desenvolvedor.tecnologias">
                <label class="form-check-label">Vuex</label>
              </div>

              <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" value="Vue Router" v-model="desenvolvedor.tecnologias">
                <label class="form-check-label">Vue Router</label>
              </div>

            </div>      

            <div class="form-group">
              <label>Resumo de perfil:</label>
              <textarea class="form-control" placeholder="Conte-nos um pouco sobre você..." v-model="desenvolvedor.biografia" ></textarea>
            </div>  

              <div class="form-group">
                <appRange label="Salario pretendido: " v-model.number="desenvolvedor.salario"
                min="1000"
                max="15000"
                step="250"
                inputClasses="form-control-range"/>
            </div>  

            <div class="form-group">

              <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" v-model="desenvolvedor.notificacao" true-value="Sim" false-value="Não">
                <label class="form-check-label">Receber notificações por email</label>
              </div>

            </div>

            <button class="btn btn-secondary" type="reset">Resetar</button>
           <button class="btn btn-success" type="button" @click="enviar">Enviar (Click Event)</button>
  <button class="btn btn-success" type="submit" >Enviar (Submit Event)</button>

          </form>

        </div>

        <!-- saida -->
        <div class="col-sm-6">

          <h3>Saída</h3>

          <div class="card">

            <div class="card-header">Dados</div>

            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Nome: </strong>{{desenvolvedor.nome}}</li>
              <li class="list-group-item"><strong>Email: </strong>{{desenvolvedor.email}} </li>
              <li class="list-group-item"><strong>Idade: </strong>{{desenvolvedor.idade}}</li>
              <li class="list-group-item"><strong>Gênero:</strong> {{desenvolvedor.genero}}</li>
              <li class="list-group-item"><strong>Ocupação:</strong> {{desenvolvedor.ocupacao}}</li>
              <li class="list-group-item"><strong>Tecnologias:</strong>
              
              <ul>
                <li v-for="(tecnologia, indice) in desenvolvedor.tecnologias"
                v-bind:key="indice"> {{tecnologia}}</li>
              </ul>

               </li>
              <li class="list-group-item"><strong>Biografia: </strong><div style="white-space: pre">{{desenvolvedor.biografia}}</div></li>
              <li class="list-group-item"><strong>Receber notificações?</strong> <!--{{desenvolvedor.notificacao ? "Sim" : "Não"}}-->
               {{desenvolvedor.notificacao}}</li>
               <li class="list-group-item"><strong>Salario pretendido: </strong>{{desenvolvedor.salario}}</li>
            </ul>

            <div class="card-header">Model</div>

            <div class="card-body">
              <pre><code>{{ desenvolvedor }}</code></pre>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
import appRange from './components/Range.vue' 

export default {
  components: {
    appRange
  },
  data(){
    return{
      desenvolvedor:{},
      valoresPadroes:{
        nome: "",
        email:"",
        idade:"",
        genero:"Masculino",
        biografia:"Esta é a minha biografia...",
        tecnologias: [],
        ocupacao:"",
      //  notificacao: false,
      notificacao: 'Não',
      salario: 1000
      },
      ocupacoes: [
        'Desenvolvedor Front End (Web)',
        'Desenvolvedor Front End (Mobile)',
        'Desenvolvedor Back End (Web)',
        'Desenvolvedor Back End (Mobile)',
        'Desenvolvedor Full Stack (Web)',
        'Desenvolvedor Full Stack (Mobile)'
      ]
    }
    },
    methods:{
      enviar(){
       const formularioEnviado = Object.assign({}, this.desenvolvedor);
       console.log('Formulário enviado', formularioEnviado) 
      },
      reset(){
        this.desenvolvedor= Object.assign({}, this.valoresPadroes)
      }
  },
  created(){
    this.reset();
  }
}
</script>

<style scoped>
  .btn {
    margin-right: 5px;
  }
</style>