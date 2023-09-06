<template>
  <Transition name="slideDownToDown">
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
    // console.log("Transition mounted");
  },
};
</script>

<style lang="scss">
.slideDownToDown {
  &-enter-active,
  &-leave-active {
    transition: all 0.7s;
    transition-timing-function: $easeInOutQuart;
  }
  &-enter {
    &-from {
      transform: translateY(-100%);
    }
    &-to {
      transform: translateY(0);
    }
  }
  &-leave {
    &-from {
      transform: translateY(0);
    }
    &-to {
      transform: translateY(100%);
    }
  }
}
</style>
