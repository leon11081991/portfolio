<template>
  <div class="mainContent">
    <section class="page-section page-container">
      <PageAside></PageAside>
      <div class="page-content">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script setup>
// IMPORT NECESSARY
import { onMounted } from "vue";
// VARIABLE NECESSARY

// IMPORT COMPONENT
import PageAside from "@components/Aside/PageAside.vue";

onMounted(() => {
  console.log("(ProfileLayout.vue) --- ON MOUNTED");
});
</script>

<style lang="scss" scoped></style>
