// import { createApp } from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler';
import { createRouter, createWebHashHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import StoreRack from './components/StoreRack.vue'
import LoginForm from './components/LoginForm.vue'

// const routes = [
//     { path: '/', component: StoreRack },
//     { path: '/login', component: LoginForm },
// ]

// const router = createRouter({
//     history: createWebHashHistory(),
//     routes,
// })

// const app = createApp();
// app.use(ElementPlus);
// app.use(router);
// app.mount('#app');

const routes = [
    { path: '/', component: StoreRack },
    { path: '/login', component: LoginForm },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp({})
app.use(router)
app.use(ElementPlus)
app.mount('#app')
