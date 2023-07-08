<template>
  <div class="web_wrapper" :class="$route.name">
    <BackgroundLayout />
    <BaseLayout>
      <div class="mainContent">
        <section class="page-section page-container">
          <PageAside></PageAside>
          <div class="page-content">
            <router-view></router-view>
          </div>
        </section>
      </div>
    </BaseLayout>
  </div>
</template>

<script setup>
// IMPORT NECESSARY
import { onMounted } from "vue";
import { useStore } from "vuex";
// VARIABLE NECESSARY
const store = useStore();

// IMPORT COMPONENT
import PageAside from "@components/Aside/PageAside.vue";
import BaseLayout from "@components/Layout/BaseLayout.vue";
import BackgroundLayout from "@components/Layout/BackgroundLayout.vue";

onMounted(() => {
  // 讀取頁面關閉
  store.state.loading = false;
});
</script>

<style lang="scss" scoped></style>
