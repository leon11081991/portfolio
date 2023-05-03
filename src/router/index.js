import { createRouter, createWebHistory } from "vue-router";
import { store } from "../store/index";

import Home from "@views/Home.vue";
import About from "@views/About.vue";
import Projects from "@views/Projects.vue";
import Articles from "@views/Articles.vue";
import NewPost from "@views/NewPost.vue";
import Login from "@views/Login.vue";
import Profile from "@views/Profile.vue";
import Admin from "@views/Admin.vue";
import NotFoundPage from "@views/NotFoundPage.vue";

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
    path: "/projects",
    name: "Projects",
    component: Projects,
    meta: {
      title: "Projects",
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
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      title: "Profile",
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      title: "Admin",
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
    path: "/:pathMatch(.*)*",
    component: NotFoundPage,
    meta: {
      title: "Not Found",
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
