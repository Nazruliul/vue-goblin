import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import home from "../view/home.vue";
import shop from "../view/shop.vue";
import about from "../view/about.vue";
const routes = [
    {
        path : "/",
        component : home,
    },
    {
        path : "/shop",
        component : shop,
    },
    {
        path : "/about",    
        component : about,
    },
];
const router = createRouter({
    history : createWebHistory(),
    routes,
});
export default router;