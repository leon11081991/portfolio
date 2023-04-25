<template>
  <main class="web_main">
    <Header />
    <Aside />
    <slot></slot>
    <Footer />
  </main>
</template>

<script setup>
// import
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import Header from "@components/Header/Header.vue";
import Aside from "@components/Aside/Aside.vue";
import Footer from "@components/Footer/Footer.vue";

// data
const store = useStore();
</script>

<style lang="scss" scoped>
.web_main {
  position: relative;
}
</style>
