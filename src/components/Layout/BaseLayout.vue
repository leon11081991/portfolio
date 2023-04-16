<template>
  <main class="web_main">
    <slot></slot>
    <Footer></Footer>
  </main>
</template>

<script setup>
import Footer from "@components/Footer/Footer.vue";
</script>

<style lang="scss" scoped>
.web_main {
}
</style>
