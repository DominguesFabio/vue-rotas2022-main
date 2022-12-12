<template>
  <div>
    <h1>Marcas</h1>
    <form @submit.prevent="salvar()">
        <label for="nome">Nome:</label>
        <input type="text" size="40" required v-model="marca.nome"/>
        <br>
        <span class="p-buttonset">
            <Button type="submit" label="Salvar" icon="pi pi-check" />
        </span>
        <span class="p-buttonset">
            <Button label="Voltar" icon="pi pi-times" @click="voltar()"/>
        </span>
    </form>    
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
      return {
        marca: {
          nome:''
        },
        mensagem: null
      }
    },
    mounted() {
      const id = this.$route.params.id
      if (id) {
        axios.get(
          `https://carros-app-example.herokuapp.com/marca/${id}`)
          .then(resp => this.marca = resp.data)
          .catch(error => { 
              alert(error)
              this.$router.push("/marca")
          })
      }
      else {
        this.marca = {
          id:null,
          nome: ''
        }
      }
    },
    methods: {
        salvar(){
          axios.post('https://carros-app-example.herokuapp.com/marca',
              this.marca)
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