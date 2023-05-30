<template>
  <div class="mainContent" :class="route.name">
    <section class="page-section page-container">
      <PageAside></PageAside>
      <div class="page-content">
        <h1>About</h1>
      </div>
    </section>
  </div>
</template>
<script setup>
// IMPORT NECESSARY
import { onMounted } from "vue";
import { useRoute } from "vue-router";
// VARIABLE NECESSARY
const route = useRoute();

// IMPORT COMPONENT
import PageAside from "@/components/Aside/PageAside.vue";

onMounted(() => {
  console.log("(About.vue) --- ON MOUNTED");
});
</script>
<style lang=""></style>
