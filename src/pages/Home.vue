<template>
  <div class="web_wrapper" :class="$route.name">
    <BackgroundLayout />
    <BaseLayout>
      <div class="mainContent" :class="route.name">
        <HeroSection :section="heroSection" />
      </div>
    </BaseLayout>
  </div>
</template>

<script setup>
// IMPORT NECESSARY
import { reactive, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
// VARIABLE NECESSARY
const store = useStore();
const route = useRoute();

// IMPORT COMPONENT
import HeroSection from "@views/Home/HeroSection.vue";
import BackgroundLayout from "@components/Layout/BackgroundLayout.vue";
import BaseLayout from "@components/Layout/BaseLayout.vue";

// DATA
const heroSection = reactive({
  name: "hero",
  intro: "Hi, my name is",
  title: "Leon Chou",
  subTitle: "",
  desc: "將設計與技術結合，創造出具有美感且有良好用戶體驗的網站和應用程式",
});

onMounted(() => {
  // 讀取頁面關閉
  store.state.loading = false;
});
</script>

<style lang="scss" scoped></style>
