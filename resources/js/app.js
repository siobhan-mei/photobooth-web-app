import './bootstrap';
import { createApp } from 'vue';
import App from './components/App.vue';
                         
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import router from './router';

createApp(App).use(router).mount('#app');