import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Button from "primevue/button"

import App from './App.vue'
import router from './router'

import './assets/main.css'
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";
import Password from "primevue/password";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.component('PVButton', Button);
app.component('MenuBar', Menubar)
app.component('InputText', InputText);
app.component('Password', Password);

app.mount('#app')
