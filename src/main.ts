import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router'
import 'uno.css'
import "primevue/resources/themes/lara-light-indigo/theme.css";     
import Button from "primevue/button"

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue);
app.use(router)

app.component('Button', Button);

app.mount('#app')
