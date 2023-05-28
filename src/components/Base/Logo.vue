<template>
  <div class="logo-wrapper">
    <h1 class="logo">
      <router-link class="siteName" :to="{ name: 'Home' }">
        <Logo class="logoIcon" />
      </router-link>
    </h1>
  </div>
</template>

<script setup>
import Logo from "@assets/logo.svg";
</script>

<style lang="scss" scoped>
.logo {
  &-wrapper {
    position: relative;
    height: $header_h-desktop * 1px;
    display: flex;
    align-items: center;
    &.login {
      position: absolute;
      top: 0;
    }
  }
  .logoIcon {
    margin-right: 6px;
  }
  .siteName {
    @extend .txt-headline3;
    color: $primary;
  }
}
</style>
