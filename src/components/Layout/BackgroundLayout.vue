<template>
  <div class="bg" :class="$route.name == 'Login' ? 'login' : ''">
    <div class="layout" v-show="!mobileBackground"></div>
    <div class="layout" v-show="!mobileBackground"></div>
    <div class="layout"></div>
    <div class="layout"></div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const mobileBackground = computed(() => store.state.mobileBackground);
</script>

<style lang="scss" scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  //z-index: $bg_zIndex;
  padding-right: $aside_w-desktop * 1px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @include media-breakpoint-down(md) {
    padding-right: unset;
  }
  @include media-breakpoint-down(sm) {
    grid-template-columns: repeat(2, 1fr);
  }
  &.login {
    padding-right: 0;
  }
}

.layout {
  position: relative;
  display: block;
  background: transparent;

  &:not(:last-child) {
    border-right: 1px solid rgba($primary, 0.1);
  }
}
</style>
