<template>
  <aside class="web_aside">
    <div class="web_aside__inner">
      <div class="socialMedia">
        <ul class="socialMedia-list">
          <li
            class="socialMedia-item"
            v-for="media in store.state.aside.socialMedia"
          >
            <a :href="media.link" target="_blank"></a>
          </li>
        </ul>
      </div>
      <div class="login">
        <router-link to="#">Login</router-link>
      </div>
    </div>
  </aside>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
</script>
<style lang="scss" scoped>
.web_aside {
  position: fixed;
  top: 0;
  right: 0;
  width: $aside_w-desktop * 1px;
  height: 100%;
  z-index: $aside_zIndex;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 1px;
    height: 100%;
    background: $primary;
  }
  &__inner {
    position: relative;
    height: 100%;
    padding: $header_h-desktop * 1px 0 $footer_h-desktop * 1px 0;
  }
}
.socialMedia {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &-list {
  }
  &-item {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid $primary;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}

.login {
  position: absolute;
  bottom: 0;
  right: 0;
  width: $aside_w-desktop * 1px;
  height: $footer_h-desktop * 1px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}
</style>
