import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/Main.vue";
import PolicemanPage from "../components/Policeman.vue";
import AddPoliceman from "../components/AddPoliceman.vue"
import Car from "../components/Car.vue"
import AddCar from "../components/AddCar.vue"


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
    {
        path: "/car/:id",
        name: "car",
        component: Car
    },
    {
        path: "/add-policeman",
        name: "add_policeman",
        component: AddPoliceman
    },
    {
        path: "/add-car",
        name: "add_car",
        component: AddCar
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;