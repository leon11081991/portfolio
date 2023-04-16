import { createRouter, createWebHistory } from "vue-router";

import Home from "@pages/Home.vue";
import Articles from "@pages/Articles.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/articles",
    name: "Articles",
    component: Articles,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
