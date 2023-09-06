<template>
  <Preloader v-if="showPreloader" />
  <Loading v-if="store.state.loading" />
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in" appear>
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
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
import Preloader from "@components/Base/Preloader.vue";
import Loading from "@components/Base/Loading.vue";

// IMPORT FIREBASE
import { auth } from "./firebase/firebaseInit";
import { onAuthStateChanged } from "firebase/auth";

// DATA
const showPreloader = ref(null);

// METHODS
// (1) 偵測視窗寬度
const checkScreen = () => {
  store.dispatch("checkScreen");
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
  showPreloader.value = true;

  setTimeout(() => {
    showPreloader.value = false;
  }, 9000);
  checkScreen(); // 初始偵測當前視窗寬度
  window.addEventListener("resize", checkScreen); // 偵測當前視窗寬度
});

// WATCH
watch(
  // 路由發生變化時
  () => route.name,
  (newVal, oldVal) => {
    // checkRoute();
    console.log(`NewRoute: ${newVal} / OldRoute: ${oldVal}`);
  }
);
</script>

<style lang="scss">
.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 2s ease-in;
  }
  &-enter {
    &-from {
      opacity: 0;
    }
  }
  &-leave {
    &-to {
      opacity: 1;
    }
  }
}
</style>
