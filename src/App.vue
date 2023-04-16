<template>
  <div class="web_wrapper">
    <Header></Header>
    <BaseLayout>
      <router-view></router-view>
    </BaseLayout>
  </div>
</template>

<script setup>
import Header from "@components/Header/Header.vue";
import BaseLayout from "@components/Layout/BaseLayout.vue";
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
