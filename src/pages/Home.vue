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

import HeroSection from "@views/Home/HeroSection.vue";
import BackgroundLayout from "@components/Layout/BackgroundLayout.vue";
import BaseLayout from "@components/Layout/BaseLayout.vue";

const store = useStore();
const route = useRoute();

const heroSection = reactive({
  name: "hero",
  intro: "Hi, my name is",
  title: "Leon Chou",
  desc: [
    "重視團隊、注重團隊合作",
    "擁有團隊協作經驗",
    "能互相理解、冷靜溝通",
    "具備獨立完成專案的能力",
    "主動積極解決問題、喜歡學習與分享",
    "工作細心、有耐心",
    "個性剛開始慢熟  //但熟了很活潑：）",
  ],
});

onMounted(() => {
  // 讀取頁面關閉
  store.state.loading = false;
});
</script>

<style lang="scss" scoped></style>
