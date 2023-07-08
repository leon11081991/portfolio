<template>
  <div class="web_wrapper" :class="$route.name">
    <BackgroundLayout />
    <BaseLayout>
      <div class="mainContent" :class="route.name">
        <section class="page-section page-container">
          <PageAside></PageAside>
          <div class="page-content">
            <h1>About</h1>
          </div>
        </section>
      </div>
    </BaseLayout>
  </div>
</template>

<script setup>
// IMPORT NECESSARY
import { defineAsyncComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
// VARIABLE NECESSARY
const route = useRoute();
const store = useStore();

// IMPORT COMPONENT
const PageAside = defineAsyncComponent(() =>
  import("../components/Aside/PageAside.vue")
);
const BackgroundLayout = defineAsyncComponent(() =>
  import("../components/Layout/BackgroundLayout.vue")
);
const BaseLayout = defineAsyncComponent(() =>
  import("../components/Layout/BaseLayout.vue")
);

onMounted(() => {
  // 讀取頁面關閉
  store.state.loading = false;
});
</script>
<style lang=""></style>
