<template>
  <main class="web_main" :class="route.name">
    <WebHeader />
    <WebAside v-if="!mobile" />
    <slot></slot>
    <WebFooter />
  </main>
</template>

<script setup>
// IMPORT NECESSARY
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
// VARIABLE NECESSARY
const store = useStore();
const route = useRoute();

// IMPORT COMPONENT
import WebHeader from "@components/Header/WebHeader.vue";
import WebAside from "@components/Aside/WebAside.vue";
import WebFooter from "@components/Footer/WebFooter.vue";

// DATA
const mobile = computed(() => store.state.mobile);
//console.log("mobile", mobile);
</script>
