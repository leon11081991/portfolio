import { createRouter, createWebHistory } from "vue-router";
import { store } from "../store/index";
import { computed } from "vue";
import { auth } from "@/firebase/firebaseInit";

import Home from "@/pages/Home.vue";

const routes = [
  {
    // 首頁
    path: "/",
    name: "Home",
    component: Home,
    // component: () => import("../pages/Home/Home.vue"),
    alias: ["/index", "/home"],
    meta: {
      title: "Home",
      requiresAuth: false,
    },
  },
  {
    // 關於我頁面
    path: "/about",
    name: "About",
    // 以函式的形式加載路由，可以把各自的路由文件分别打包，只有在解析特定路由時，才會加載該路由component
    component: () => import("../pages/About.vue"),
    meta: {
      title: "About Me",
      requiresAuth: false,
    },
  },
  {
    // Resume
    path: "/resume",
    name: "Resume",
    component: () => import("../pages/Resume.vue"),
    meta: {
      title: "Resume",
      requiresAuth: false,
    },
  },
  {
    // 專案頁面
    path: "/projects",
    name: "Projects",
    component: () => import("../pages/Projects.vue"),
    meta: {
      title: "Projects",
      requiresAuth: false,
    },
  },
  {
    // 文章列表頁面
    path: "/article",
    name: "Article",
    component: () => import("../pages/Article.vue"),
    alias: "/posts",
    meta: {
      title: "Article",
      requiresAuth: false,
    },
  },
  {
    // 文章內容頁面
    path: "/post/:postID",
    name: "Post",
    component: () => import("../pages/Post.vue"),
    props: true,
    meta: {
      title: "Post",
      requiresAuth: false,
    },
  },
  {
    // 編輯文章內容頁面
    path: "/edit-post/:postID",
    name: "EditPost",
    component: () => import("../pages/EditPost.vue"),
    props: true,
    meta: {
      title: "Edit Post",
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    path: "/create-post",
    name: "CreatePostLayout",
    meta: {
      title: "Create Post",
      requiresAuth: true,
      requiresAdmin: true,
    },
    children: [
      {
        path: "create",
        name: "CreatePost",
        component: () => import("../pages/CreatePost.vue"),
        title: "Create Post",
        requiresAuth: true,
        requiresAdmin: true,
      },

      {
        path: "preview",
        name: "PostPreview",
        component: () => import("../pages/PostPreview.vue"),
        meta: {
          title: "Post Preview",
          requiresAuth: true,
          requiresAdmin: true,
        },
      },
    ],
  },
  {
    // 登入/註冊頁面
    path: "/login",
    name: "Login",
    component: () => import("../pages/Login.vue"),
    meta: {
      title: "Login",
      requiresAuth: false,
    },
  },
  {
    // 個人資料頁面
    path: "/profile",
    name: "ProfilePage",
    component: () => import("../pages/ProfilePage.vue"),
    children: [
      {
        // 個人資料
        path: "",
        name: "Profile",
        component: () => import("../views/Profile/Profile.vue"),
        meta: {
          title: "Profile",
          requiresAuth: true,
        },
      },
      {
        // 密碼設定
        path: "setting",
        name: "Setting",
        component: () => import("../views/Profile/Setting.vue"),
        meta: {
          title: "Setting",
          requiresAuth: true,
        },
      },
      {
        // 管理者權限
        path: "admin",
        name: "Admin",
        component: () => import("../views/Profile/Admin.vue"),
        meta: {
          title: "Admin",
          requiresAuth: true,
          requiresAdmin: true,
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
  // console.log("beforeEach");

  // 讀取頁面顯示
  store.state.loading = true;
  // console.log("LOADING:", store.state.loading);

  // 設定頁面標籤title name
  document.title = `${to.meta.title} | LEON`;

  // 跳轉頁面時，將 menu 收合
  store.state.header.menu = false;
  // 跳轉頁面時，將 profileMenu 收合
  store.state.aside.profileMenu = false;

  // const admin = store.state.user.profileAdmin;

  const admin = computed(() => store.state.user.profileAdmin);
  // 是Admin才能建立文章、預覽文章
  if (to.path.startsWith("/create-post") && !admin) {
    return Promise.resolve({ name: "Login" });
    // }
  }
});

router.beforeEach(async (to, from, next) => {
  let user = auth.currentUser;
  let admin = null;

  if (user) {
    let token = await user.getIdTokenResult();
    admin = token.claims.admin;
  }

  if (to.matched.some((res) => res.meta.requiresAuth)) {
    if (user) {
      if (to.matched.some((res) => res.meta.requiresAdmin)) {
        if (admin) {
          return next();
        }
        return next({ name: "Home" });
      }
      return next();
    }
    return next({ name: "Home" });
  }
  return next();
});

export { router };
