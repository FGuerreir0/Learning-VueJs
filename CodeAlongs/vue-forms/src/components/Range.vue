<template>
  <div>

    <label>{{customLabel}}</label>
    <input type="range" v-bind="$attrs" :value="value" 
    @change="actualizar" 
   
    :class="inputClasses">

  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  model: {
prop: 'value',
event: 'change'
  },
  props: {
    label: String,
    value: [Number, String],
    inputClasses: [String, Object, Array]
  },
  data(){
    return{
      valorActual: this.value || this.$attrs.min
    }
  },
  computed: {
    customLabel(){
      return `${this.label} (${this.valorActual}eur.)`
    }
  },
  methods:{
      actualizar(event){
        const valor = event.target.value
        this.$emit('change', valor)
        this.valorActual = valor
      }
  },
  created(){
    console.log('Attrs:', this.$attrs )
  }
}
</script>