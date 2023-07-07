import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/Main.vue";
import PolicemanPage from "../components/Policeman.vue";


const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage
    },
    {
        path: "/policeman/:id",
        name: "policeman",
        component: PolicemanPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;