<template>
  <!-- <Transition name="slideDownToDown" @enter="onEnter" @leave="onLeave"> -->
  <Transition name="slide">
    <slot></slot>
    <!-- pass down slot content -->
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
.slide {
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

.slide-enter-active,
.slide-leave-active {
  transition: all 0.7s;
  transition-timing-function: $easeInOutQuart;
}
.slide-enter-from {
  transform: translateY(-100%);
}
.slide-enter-to {
  transform: translateY(0);
}
.slide-leave-from {
  transform: translateY(0);
}
.slide-leave-to {
  transform: translateY(100%);
}
</style>
