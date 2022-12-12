<template>
    <div>
        <h1>Cores</h1>
        <span class="p-buttonset">
            <Button label="Novo"  @click="novo()"/>
        </span>
        <div class="card">
            <DataTable :value="cores" responsiveLayout="scroll">
                <Column field="id" header="id" :sortable="true"></Column>
                <Column field="nome" header="Nome" :sortable="true"></Column>
                <Column field="rgb" header="RGB" :sortable="true"></Column>
                <Column field="ativo" header="Ativo" :sortable="true"></Column>
            </DataTable>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            cores: []
        };
    },
    mounted() {
        this.load();
    },
    methods: {
        load() {
            axios
                .get("https://carros-app-example.herokuapp.com/cor")
                .then(resp => {
                this.cores = resp.data;
            });
        },
        editar(cor) {
            this.$router.push(`/cor-form/${cor.id}`);
        },
        novo() {
            this.$router.push("/cor-form/");
        },
        excluir(cor) {
            const id = cor.id;
            axios
                .delete(`https://carros-app-example.herokuapp.com/cor/${id}`)
                .then(this.load())
                .catch(error => alert(error));
        }
    }
}
</script>

<style>

</style>
