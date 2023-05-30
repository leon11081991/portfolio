import { createRouter, createWebHistory } from "vue-router";
import { store } from "../store/index";
import { computed } from "vue";

import Home from "@views/Home/Home.vue";

const routes = [
  {
    // 首頁
    path: "/",
    name: "Home",
    //component: Home,
    component: () => import("../views/Home/Home.vue"),
    alias: ["/index", "/home"],
    meta: {
      title: "Home",
    },
  },
  {
    // 關於我頁面
    path: "/about",
    name: "About",
    // 以函式的形式加載路由，可以把各自的路由文件分别打包，只有在解析特定路由時，才會加載該路由component
    component: () => import("../views/About.vue"),
    meta: {
      title: "About Me",
    },
  },
  {
    // 專案頁面
    path: "/projects",
    name: "Projects",
    component: () => import("../views/Projects.vue"),
    meta: {
      title: "Projects",
    },
  },
  // {
  //   // 文章頁面
  //   path: "/article",
  //   name: "ArticleLayout",
  //   component: () => import("@views/Article/ArticleLayout.vue"),
  //   meta: {
  //     title: "Article",
  //   },
  //   children: [
  //     {
  //       // 文章列表頁面
  //       path: "",
  //       name: "Article",
  //       component: () => import("@views/Article/Article.vue"),
  //       alias: "/posts",
  //       meta: {
  //         title: "Article",
  //       },
  //       children: [],
  //     },
  //     {
  //       // 文章內容頁面
  //       path: "post/:postID",
  //       name: "Post",
  //       component: () => import("@views/Article/Post.vue"),
  //       props: true,
  //       meta: {
  //         title: "Post",
  //       },
  //     },
  //   ],
  // },
  {
    // 文章列表頁面
    path: "/article",
    name: "Article",
    component: () => import("../views/Article/Article.vue"),
    alias: "/posts",
    meta: {
      title: "Article",
    },
    children: [],
  },
  {
    // 文章內容頁面
    path: "/post/:postID",
    name: "Post",
    component: () => import("../views/Article/Post.vue"),
    props: true,
    meta: {
      title: "Post",
    },
  },
  {
    // 編輯文章內容頁面
    path: "/edit-post/:postID",
    name: "EditPost",
    component: () => import("../views/EditPost.vue"),
    props: true,
    meta: {
      title: "Edit Post",
    },
  },
  {
    // 登入/註冊頁面
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      title: "Login",
    },
  },
  {
    // 個人資料頁面
    path: "/profile",
    name: "ProfileLayout",
    component: () => import("../views/Profile/ProfileLayout.vue"),
    children: [
      {
        // 個人資料
        path: "",
        name: "Profile",
        component: () => import("../views/Profile/Profile.vue"),
        meta: {
          title: "Profile",
        },
      },
      {
        // 密碼設定
        path: "setting",
        name: "Setting",
        component: () => import("../views/Profile/Setting.vue"),
        meta: {
          title: "Setting",
        },
      },
      {
        // 管理者權限
        path: "admin",
        name: "Admin",
        component: () => import("../views/Profile/Admin.vue"),
        meta: {
          title: "Admin",
        },
      },
    ],
  },
  {
    path: "/create-post",
    name: "CreatePostLayout",
    meta: {
      title: "Create Post",
    },
    children: [
      {
        path: "create",
        name: "CreatePost",
        component: () => import("../views/CreatePost.vue"),
        title: "Create Post",
      },

      {
        path: "preview",
        name: "PostPreview",
        component: () => import("../views/PostPreview.vue"),
        meta: {
          title: "Post Preview",
        },
      },
    ],
  },

  {
    // 404頁面
    path: "/:pathMatch(.*)*",
    redirect: {
      name: "Home",
    },
    //component: () => import("@views/NotFoundPage.vue"),
    // meta: {
    //   title: "Not Found",
    // },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0,
        behavior: "smooth",
      };
    }
  },
});

router.beforeEach(async (to, from) => {
  // 設定頁面標籤title name
  document.title = `${to.meta.title} | LEON`;

  // 跳轉頁面時，將 menu 收合
  store.state.header.menu = false;
  // 跳轉頁面時，將 profileMenu 收合
  store.state.aside.profileMenu = false;

  const admin = store.state.user.profileAdmin;

  //const admin = computed(() => store.state.user.profileAdmin);
  // 是Admin才能建立文章、預覽文章
  if (to.path.startsWith("/create-post") && !admin) {
    return Promise.resolve({ name: "Login" });
    // }
  }
});

export { router };
