import { createRouter, createWebHistory } from "vue-router";
import { store } from "../store/index";

import Home from "@pages/Home.vue";
import About from "@pages/About.vue";
import Articles from "@pages/Articles.vue";
import NewPost from "@pages/NewPost.vue";
import Login from "@pages/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "About Me",
    },
  },
  {
    path: "/articles",
    name: "Articles",
    component: Articles,
    meta: {
      title: "Articles",
    },
  },
  {
    path: "/newpost",
    name: "NewPost",
    component: NewPost,
    meta: {
      title: "New Post",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  // 設定頁面標籤title name
  document.title = `${to.meta.title} | LEON`;

  // 跳轉頁面時，將 menu 收合
  store.state.header.menu = false;
});

export { router };
