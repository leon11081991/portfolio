<template>
  <div class="web_wrapper" :class="$route.name == 'Login' ? 'login' : ''">
    <BackgroundLayout />

    <template v-if="defaultWithNavigation">
      <BaseLayout>
        <!-- <router-view></router-view> -->
        <router-view v-slot="{ Component, route }">
          <transition name="fade">
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </BaseLayout>
    </template>

    <template v-else>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </template>
  </div>
</template>

<script setup>
// IMPORT NECESSARY
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
// VARIABLE NECESSARY
const route = useRoute();
const store = useStore();
// IMPORT COMPONENT
// import LoadingBar from "@components/Base/Loading.vue";
import BackgroundLayout from "@components/Layout/BackgroundLayout.vue";
import BaseLayout from "@components/Layout/BaseLayout.vue";

// IMPORT FIREBASE
import { auth } from "./firebase/firebaseInit";
import { onAuthStateChanged } from "firebase/auth";

// DATA
const defaultWithNavigation = ref(null);

// METHODS
// (1) 偵測視窗寬度
const checkScreen = () => {
  store.dispatch("checkScreen");
};
// (2) 檢查路由
const checkRoute = () => {
  if (route.name === "Login" || route.name === "ForgotPassword") {
    defaultWithNavigation.value = false;
    return;
  }
  defaultWithNavigation.value = true;
};
// (3) 登入狀態改變
onAuthStateChanged(auth, (currentUser) => {
  // 將 currentUser儲存在user, user的值也會為true;
  store.commit("updateUser", currentUser);
  if (currentUser) {
    // 使用者登入時
    store.dispatch("getCurrentUser", currentUser);
  } else {
    // 使用者登出時
  }
});

// ON MOUNTED
onMounted(() => {
  console.log("(App.vue) --- ON MOUNTED");
  checkScreen(); // 初始偵測當前視窗寬度
  window.addEventListener("resize", checkScreen); // 偵測當前視窗寬度
});

// WATCH
watch(
  // 路由發生變化時
  () => route.name,
  (newVal, oldVal) => {
    checkRoute();
    console.log(`NewRoute: ${newVal} / OldRoute: ${oldVal}`);
  }
);
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
