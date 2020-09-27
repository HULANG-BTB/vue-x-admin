import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import apiConfig from './config/apiConfig'
import xaxios from './plugins/x-axios'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(xaxios, apiConfig)
app.mount('#app')
