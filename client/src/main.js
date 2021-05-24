import { createApp } from 'vue';
import PerfectScrollbar from 'vue3-perfect-scrollbar';

import App from './App.vue';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
import store from './store/index';

const app = createApp(App);

app.use(store);

app.use(PerfectScrollbar);

app.mount('#app');
