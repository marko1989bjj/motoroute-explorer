import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Routes from "@/views/Routes.vue";
import RouteDetail from "@/views/RouteDetail.vue";
import Favorites from "@/views/Favorites.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/routes",
      name: "routes",
      component: Routes,
    },
    {
      path: "/routes/:id",
      name: "route-detail",
      component: RouteDetail,
    },
    {
      path: "/favorites",
      name: "favorites",
      component: Favorites,
    },
  ],
});

export default router;
