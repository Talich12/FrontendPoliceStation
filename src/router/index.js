import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/Main.vue";
import PolicemanPage from "../components/Policeman.vue";
import AddPoliceman from "../components/AddPoliceman.vue"
import Car from "../components/Car.vue"
import AddCar from "../components/AddCar.vue"
import Armory from "../components/Armory.vue"
import AddArmory from "../components/AddArmory.vue"
import Trainee from "../components/Trainee.vue"
import AddTrainee from "../components/AddTrainee.vue"
import Detention from "../components/Detention.vue"
import AddDetention from "../components/AddDetention.vue";
import Criminal from "../components/Criminal.vue"
import AddCriminal from "../components/AddCriminal.vue"

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
    {
        path: "/armory/:id",
        name: "Armory",
        component: Armory
    },
    {
        path: "/add-armory",
        name: "AddArmory",
        component: AddArmory
    },
    {
        path: "/trainee/:id",
        name: "Trainee",
        component: Trainee
    },
    {
        path: "/add-trainee",
        name: "AddTrainee",
        component: AddTrainee
    },
    {
        path: "/detention/:id",
        name: "Detention",
        component: Detention
    },
    {
        path: "/add-detention",
        name: "AddDetention",
        component: AddDetention
    },
    {
        path: "/criminal/:id",
        name: "Criminal",
        component: Criminal
    },
    {
        path: "/add-criminal",
        name: "AddCriminal",
        component: AddCriminal
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;