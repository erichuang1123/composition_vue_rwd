import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import reset from './assets/css/reset.css'
import googleFont from './assets/css/googlefont.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// import Meta from 'vue-meta'

createApp(App).use(store).use(router).mount('#app')
// Vue.use(Meta)
