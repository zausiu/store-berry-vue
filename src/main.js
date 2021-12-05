// import { createApp } from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler';
import { createRouter, createWebHashHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import PageHome from './components/PageHome.vue'
import PageLogin from './components/PageLogin.vue'


const routes = [
    { path: '/', component: PageHome },
    { path: '/login', component: PageLogin },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp({})
app.use(ElementPlus)
app.use(router)
app.mount('#app')