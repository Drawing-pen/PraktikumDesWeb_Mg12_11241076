import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Contact from "../pages/Contact.vue";

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: Home
    },
    {
        path: '/contact',
        name: 'ContactPage',
        component: Contact
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router