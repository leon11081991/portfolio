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
import { useStore } from "vuex";
// VARIABLE NECESSARY
const store = useStore();

// IMPORT COMPONENT
import PageAside from "@components/Aside/PageAside.vue";

// DATA
</script>
