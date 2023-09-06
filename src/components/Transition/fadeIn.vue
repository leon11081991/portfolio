<template>
  <Transition name="fadeIn">
    <slot></slot>
  </Transition>
</template>

<script setup>
import { Transition, onMounted } from "vue";

onMounted(() => {
  //console.log("Transition onMounted");
});
</script>

<style lang="scss">
.fadeIn {
  &-enter-active,
  &-leave-active {
    transition: opacity 2s ease;
  }
  &-enter {
    &-from {
      opacity: 0;
    }
  }
  &-leave {
    &-to {
      opacity: 1;
    }
  }
}
</style>
