<template>
  <Transition name="slideUpToDown">
    <slot></slot>
  </Transition>
</template>

<script>
import { Transition, TransitionGroup } from "vue";

export default {
  components: {
    Transition,
    TransitionGroup,
  },
  mounted() {
    console.log("Transition mounted");
  },
};
</script>

<style lang="scss">
.slideUpToDown {
  &-enter-active,
  &-leave-active {
    transition: all 0.5s;
    transition-timing-function: $easeInOutQuart;
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
