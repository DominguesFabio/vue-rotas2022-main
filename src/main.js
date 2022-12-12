import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column'; 
import Row from 'primevue/row';        
import Checkbox from 'primevue/checkbox';
import Dropdown from 'primevue/dropdown';

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App); 
app.use(PrimeVue)
app.use(router)

app.component('Button', Button);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Row', Row);
app.component('Checkbox', Checkbox);
app.component('Dropdown', Dropdown);


app.mount('#app')
