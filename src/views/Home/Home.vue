<template>
  <div class="mainContent">
    <HeroSection :section="heroSection" />
    <!-- <HomeSection :section="aboutSection" /> -->
  </div>
</template>

<script setup>
// IMPORT NECESSARY
import { ref, reactive, onMounted } from "vue";
import { useStore } from "vuex";
// VARIABLE NECESSARY
const store = useStore();

// IMPORT COMPONENT
import HeroSection from "@views/Home/HeroSection.vue";

// DATA
const heroSection = reactive({
  name: "hero",
  intro: "Hi, my name is",
  title: "Leon Chou",
  subTitle: "",
  // desc: "I'm Passionate about things that make web applications work well and look perfect.",
  desc: "將設計與技術結合，創造出具有美感且有良好用戶體驗的網站和應用程式",
});

onMounted(() => {
  console.log("(Home.vue) --- ON MOUNTED");
});
</script>

<style lang="scss" scoped></style>
