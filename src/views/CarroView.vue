<template>
  <div>
    <h1>Carros</h1>
      <span class="p-buttonset">
          <Button label="Novo" @click="novo()"/>
      </span>
      <div class="card">
          <DataTable :value="Carros" responsiveLayout="scroll">
              <Column field="nome" header="Nome" :sortable="true"></Column>
              <Column field="marca.nome" header="Marca" :sortable="true"></Column>
              <Column field="cor.nome" header="Cor" :sortable="true"></Column>
          </DataTable>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
     carros: [
     ]
    }
  },
  mounted() {
    this.load()
      
  },
  methods: {
    editar(carro) {
      this.$router.push(`/carro-form/${carro.id}`)
    },
    novo() {
      this.$router.push('/carro-form/')
    },
    excluir(carro) {
      const id = carro.id
      axios
        .delete(`https://carros-app-example.herokuapp.com/carro/${id}`)
        .then(this.load())
        .catch(error => alert(error))
    },
    load() {
      axios
      .get('https://carros-app-example.herokuapp.com/carro')
      .then(resp => (this.carros = resp.data)
      )
    }

  }
}
</script>

<style>

</style>