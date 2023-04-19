<template>
  <header class="web_header">
    <div class="web_header__inner">
      <div class="logo-box">
        <h1 class="logo">
          <router-link class="siteName" to="#">
            <Logo class="logoIcon" />
            I'm logo
          </router-link>
        </h1>
      </div>

      <div class="carousel-box"></div>
      <div class="menu" @click="toggleMenu">
        <span></span>
      </div>

      <Transition name="Menu">
        <nav class="web_nav" v-if="menu">
          <ul class="web_nav__list">
            <li class="web_nav__item">
              <router-link class="web_nav__item-link" to="#">Info</router-link>
            </li>
            <li class="web_nav__item">
              <router-link class="web_nav__item-link" to="#"
                >Articles</router-link
              >
            </li>
            <li class="web_nav__item">
              <router-link class="web_nav__item-link" to="#"
                >Create Post</router-link
              >
            </li>
            <li class="web_nav__item">
              <router-link class="web_nav__item-link" to="#"
                >Login/Register</router-link
              >
            </li>
          </ul>
        </nav>
      </Transition>
      <div class="menu-open-bar" :class="menuBar ? 'toggle' : ''"></div>
    </div>
  </header>
</template>

<script setup>
// import
import { ref, Transition } from "vue";
import Logo from "@assets/logo.svg";

// data
const mobile = ref(null);
const menu = ref(false);
const menuBar = ref(false);
const windowWidth = ref(null); // 視窗寬度

// methods
// 偵測視窗寬度
const checkScreen = () => {
  windowWidth.value = window.innerWidth;

  // 視窗小於768,啟用手機設定
  if (windowWidth.value <= 768) {
    mobile.value = true;
    console.log("Mobile");
    return;
  }
  mobile.value = false;
  console.log("Desktop");
  return;
};
window.addEventListener("resize", checkScreen); // 偵測當前視窗寬度
checkScreen(); // 初始偵測當前視窗寬度

// 點擊Menu
const toggleMenu = () => {
  menu.value = !menu.value;
  menuBar.value = true;
  // 1秒後移除
  setTimeout(() => {
    menuBar.value = false;
  }, 1000);
};
</script>

<style lang="scss" scoped>
.web_header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $header-h * 1px;
  z-index: 99;
  background-color: $white;
  &__inner {
    position: relative;
    height: 100%;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: $primary;
    z-index: 99;
  }
}
.logo {
  &-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 328px;
    height: $header-h * 1px;
    display: flex;
    align-items: center;
    padding-left: 132px;
  }
  //display: flex;
  //align-items: center;
  .logoIcon {
    margin-right: 6px;
  }
  .siteName {
    @extend %base-text-style;
    color: $primary;
  }
}
.menu {
  height: $menu-h * 1px;
  width: $menu-w * 1px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  background-color: $primary;
  &:hover {
    span,
    span::after {
      width: 55px;
    }
  }
  span {
    display: block;
    position: absolute;
    top: 50%;
    left: 33%;
    transform: translateY(-50%);
    width: 48px;
    height: 1px;
    background: $white;
    transition: all 0.25s;
    &::before,
    &::after {
      position: absolute;
      content: "";
      height: 1px;
      background: $white;
      transition: all 0.25s;
    }
    &::before {
      width: 57px;
      top: -15px;
    }
    &::after {
      width: 43px;
      bottom: -15px;
    }
  }
}

.web_nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $white;
  &__list {
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__item {
    margin: 30px 20px;
    &-link {
      color: $primary;
    }
  }
}

.Menu {
  &-enter-active,
  &-leave-active {
    transition: all 0.7s;
    transition-timing-function: $easeInOutQuart;
  }
  &-enter {
    &-from {
      top: -100%;
    }
    &-to {
      top: 0;
    }
  }
  &-leave {
    &-from {
      top: 0;
    }
    &-to {
      top: 100vh;
    }
  }
}

.menu-open-bar {
  width: 100vw;
  height: 50vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: $primary;
  z-index: 101;
  transform: translate3d(0, -40vh, 0);
  visibility: hidden;
  &.toggle {
    visibility: visible;
    transform: translate3d(0, 100vh, 0);
    transition: transform 0.8s;
    transition-timing-function: $easeInOutQuart;
  }
}
</style>
