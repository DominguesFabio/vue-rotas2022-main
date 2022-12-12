<template>
    <div>
        <h1>Marca</h1>
        <span class="p-buttonset">
            <Button label="Novo" @click="novo()"/>
        </span>
        <div class="card">
            <DataTable :value="marcas" responsiveLayout="scroll">
                <Column field="id" header="Id" :sortable="true"></Column>
                <Column field="nome" header="Nome" :sortable="true"></Column>
                <ConfirmDialog :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}"></ConfirmDialog>
                <Column><Button @click="excluir(marcas.marca)" icon="pi pi-check" label="Confirm"></Button></Column>
            </DataTable>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            marcas: [],
            mensagem : null
        }
    },
    mounted() {
        this.load()
        
    },
    methods: {
        editar(marca) {
            this.$router.push(`/marca-form/${marca.id}`)
        },
        novo() {
            this.$router.push('/marca-form/')
        },
        excluir(marca) {
            const id = marca.id
            axios
                .delete(`https://carros-app-example.herokuapp.com/marca/${id}`)
                .then(this.load())
                .catch(error => this.mensagem = `Problema na exclusão ${error}`)
        },
        load() {
            axios
            .get('https://carros-app-example.herokuapp.com/marca')
            .then(resp => {
                this.marcas = resp.data
            })
        }
    }
}
</script>

<style>

.p-buttonset {
    line-height: 2.25rem;
    margin-bottom: 0.5rem;
}

</style>