<template>
  <div class="page-heading">
    <h2 class="page-heading-txt">{{ currentRouteName }}</h2>
  </div>
</template>

<script setup>
// IMPORT NECESSARY

// VARIABLE NECESSARY
const props = defineProps(["currentRouteName"]);
</script>

<style lang="scss" scoped>
.page-heading {
  margin: 1rem 0 2.5rem 0;
  &-txt {
    color: $primary;
  }
}
</style>
