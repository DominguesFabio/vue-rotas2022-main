<template>
  <div>
    <h1>Carros</h1> 
    <form  @submit.prevent="salvar()">
      <div class="form-control">
        <label for="nome">Nome </label>
        <input type="text" size="40" required v-model="carro.nome"/>
      </div>
      <div class="form-control">
          <label for="">Ano Fabricação </label>
          <input type="text" size="40" required v-model="carro.anoFabricacao"/>
      </div>
      <div class="form-control-dropdown">
          <label for="">Marca </label>
          <Dropdown v-model="carro.marca" :options="marcas" optionLabel="nome" placeholder="Selecione uma marca" />
      </div>
      <div class="form-control-dropdown">
          <label for="">Cor </label>
          <Dropdown v-model="carro.cor" :options="cores" optionLabel="nome" placeholder="Selecione uma cor" />
      </div>

      <Button type="submit" label="Salvar"/>
      <Button label="Voltar" @click="voltar()"/>
    </form>   
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
      return {
          cores: null,
          carro: {
              nome:''
        },
      }
    },
    mounted() {
      const id = this.$route.params.id
      if (id) {
        axios.get(
          `https://carros-app-example.herokuapp.com/carro/${id}`)
          .then(resp => this.carro = resp.data)
          .catch(error => { 
              alert(error)
              this.$router.push("/carro")
          })
      }
      else {
        this.carro = {}
      }
      axios
        .get('http://localhost:8080/marca')
        .then(resp => {
           this.marcas = resp.data
        })
        axios
        .get('http://localhost:8080/cor')
        .then(resp => {
           this.cores = resp.data
        })
    },
    created(){
      axios.get('https://carros-app-example.herokuapp.com/cor')
      .then (resp => this.cores = resp.nome)
    },
    methods: {
      salvar(){
      axios.post('https://carros-app-example.herokuapp.com/carro',
          this.carro)
          .then(() => this.mensagem = "Registro gravado")
          .catch(error => this.mensagem = `Problema na gravação ${error}`)
      },
      voltar() {
          // this.$router.go(-1)
          this.$router.go(-1)
      }
    }


}
</script>

<style>

</style>