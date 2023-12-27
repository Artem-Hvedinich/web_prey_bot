import {createRouter, createWebHistory} from 'vue-router'
import Users from "@/components/admin/Users.vue";
import AdminView from "@/views/AdminView.vue";
import DataTime from "@/components/admin/DataTime.vue";

const routes = [
    {
        path: '/admin',
        name: 'admin',
        component: AdminView,
        children: [
            {
                path: 'users',
                component: Users
            },
            {
                path: 'time',
                component: DataTime
            }
        ]
    },
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
