import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
require('@/assets/styles/main.scss');


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')


