import {createRouter, createWebHistory} from "vue-router";
import Preview from "@/pages/Preview.vue";
import Main from "@/pages/Main.vue";

const routes = [
    {
        path: "/",
        component: Main,
    },
    {
        path: "/preview",
        component: Preview,
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;