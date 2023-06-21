<template>
  <Transition
    @leave="$emit('onLeave')"
    @after-leave="$emit('onAfterLeave')"
    name="slideUpToDown"
  >
    <slot></slot>
  </Transition>
</template>

<script setup>
import { Transition } from "vue";
</script>

<style lang="scss">
.slideUpToDown {
  &-enter-active,
  &-leave-active {
    transition: all 0.6s;
    transition-timing-function: $easeInOutQuart;
  }
  &-leave-active {
    transition: all 0.4s;
  }
  &-enter {
    &-from {
      transform: translateX(100%);
    }
    &-to {
      transform: translateX(0);
    }
  }
  &-leave {
    &-from {
      transform: translateX(0);
    }
    &-to {
      transform: translateX(100%);
    }
  }
}
</style>
