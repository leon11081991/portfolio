import { createRouter, createWebHistory } from "vue-router";

import Home from "@pages/Home.vue";
import Articles from "@pages/Articles.vue";
import NewPost from "@pages/NewPost.vue";
import Login from "@pages/Login.vue";

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
  {
    path: "/newpost",
    name: "NewPost",
    component: NewPost,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
