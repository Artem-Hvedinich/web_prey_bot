import {createRouter, createWebHistory} from 'vue-router'
import NeedView from '../views/NeedView.vue'
import ThankView from '../views/ThankView.vue'
import Home from '../components/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/need',
            name: 'need',
            component: NeedView
        }, {
            path: '/thank',
            name: 'thank',
            component: ThankView
        },

    ]
})

export default router
