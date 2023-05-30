<template>
  <aside class="web_aside">
    <div class="web_aside__inner">
      <SocialMedia></SocialMedia>
      <div class="login" v-if="!user">
        <router-link :to="{ name: 'Login' }">Login</router-link>
      </div>

      <div
        @mouseover="handleMouseover"
        @mouseleave="handleMouseLeave"
        class="profile"
        ref="profile"
        v-else
      >
        <div class="profileInitial">
          <Icon name="user" />
        </div>
        <!-- <ProfileMenu
          v-if="profileMenu"
          @clickSignOut="handleSignOut"
        ></ProfileMenu> -->
        <transition name="fade">
          <ProfileMenu v-if="profileMenu" @clickSignOut="handleSignOut" />
        </transition>
      </div>
    </div>
  </aside>
</template>

<script setup>
// IMPORT NECESSARY
import { computed } from "vue";
import { useStore } from "vuex";
// VARIABLE NECESSARY
const store = useStore();

// IMPORT COMPONENT
import SocialMedia from "@components/Base/SocialMedia.vue";
import ProfileMenu from "@components/Aside/ProfileMenu.vue";
import Icon from "@components/Base/Icon.vue";

// DATA
const profileMenu = computed(() => store.state.aside.profileMenu);
const user = computed(() => store.state.user.user);

// METHODS
// (1) 切換個人資料選單
const handleToggleProfileMenu = () => {
  store.dispatch("toggleProfileMenu");
};
const handleMouseover = () => {
  store.dispatch("profileMenuOpen");
};
const handleMouseLeave = () => {
  store.dispatch("profileMenuClose");
};
// (2) 登出
const handleSignOut = () => {
  store.dispatch("signOutCurrentUser");
};
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
.profile {
  position: absolute;
  bottom: 0;
  right: 0;
  width: $aside_w-desktop * 1px;
  height: $footer_h-desktop * 1px;
  .profileInitial {
    position: absolute;
    bottom: 50%;
    right: 50%;
    transform: translate(50%, 50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: $white;
    .icon {
      width: 40px;
      height: 40px;
      margin: 0;
      padding: 0;
      fill: $primary;
    }
  }
}
</style>
