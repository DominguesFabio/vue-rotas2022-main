<template>
    <div>
        <h1>Cores</h1>
        <form id="form" class="form" @submit.prevent="salvar()">
            <div class="form-control">
                <label for="cor.nome"  >Nome da cor </label>
                <input type="text" size="40" required v-model="cor.nome"/>
            </div>
            <div class="form-control">
                <label for="rgb" >RGB </label>
                <input type="text" size="40" required v-model="cor.rgb"/>
            </div>
            <div class="form-control-checkbox">
                <Checkbox v-model="cor.ativo" :binary="true" />
                <label for="ativo" > Ativo</label>
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
            cor: {},
            mensagem: null
        }
    },
    mounted() {
        const id = this.$route.params.id
        if (id) {
            axios.get(
            `https://carros-app-example.herokuapp.com/cor/${id}`)
            .then(resp => this.cor = resp.data)
            .catch(error => {alert(error)
             this.$router.push("/cor")
        })
        }
        else {
            this.cor = {
            id:null,
            nome: '',
            rgb: '',
            ativo: false
        }
    }
    },
    methods: {
        salvar(){
        axios.post('https://carros-app-example.herokuapp.com/cor',
            this.cor)
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