<template>
  <main class="web_main">
    <WebHeader />
    <WebAside />
    <slot></slot>
    <WebFooter />
  </main>
</template>

<script setup>
// IMPORT COMPONENT
import WebHeader from "@components/Header/WebHeader.vue";
import WebAside from "@components/Aside/WebAside.vue";
import WebFooter from "@components/Footer/WebFooter.vue";
</script>
