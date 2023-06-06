<template>
  <div class="header-bg">
    <div class="layout"></div>
    <div class="layout blank"></div>
  </div>
</template>

<script setup></script>
<style lang="scss">
.header-bg {
  position: absolute;
  width: calc(100% - $aside_w-desktop * 1px);
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  @include media-breakpoint-down(md) {
    grid-template-columns: unset;
  }
  .layout {
    position: relative;
    display: block;
    border-right: 1px solid rgba($primary, 0.1);
  }
}
</style>
