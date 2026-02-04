import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import home from "../view/home.vue";
import student from "../view/student.vue";
import about from "../view/about.vue";
const routes = [{
    path : "/",
    name : "home",
    component : home,
},{
    path : "/about",
    name : "About",
    component : about,
},{
    path : "/student",
    name : "Student",
    component : student,
}];
const router = createRouter({
    history : createWebHistory(),
    routes,
});
export default router;