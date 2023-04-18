<template>
  <header class="web_header">
    <div class="web_header__inner">
      <h1 class="logo">
        <router-link class="home-path" to="#">LEON</router-link>
      </h1>
      <nav class="web_nav" v-if="!mobile">
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
      <div class="menu" @click="toggleMenu" v-if="mobile">
        <span></span>
      </div>
      <Transition name="mobileMenu">
        <nav class="mobile_nav" v-if="mobileMenu">
          <ul class="mobile_nav__list">
            <li class="mobile_nav__item">
              <router-link class="mobile_nav__item-link" to="#"
                >Info</router-link
              >
            </li>
            <li class="mobile_nav__item">
              <router-link class="mobile_nav__item-link" to="#"
                >Articles</router-link
              >
            </li>
            <li class="mobile_nav__item">
              <router-link class="mobile_nav__item-link" to="#"
                >Create Post</router-link
              >
            </li>
            <li class="mobile_nav__item">
              <router-link class="mobile_nav__item-link" to="#"
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

// data
const mobile = ref(null);
const mobileMenu = ref(false);
const menuBar = ref(false);
const windowWidth = ref(null); // 視窗寬度

// methods

// 偵測視窗寬度
const checkScreen = () => {
  windowWidth.value = window.innerWidth;

  // 視窗小於768,啟用手機設定
  if (windowWidth.value <= 768) {
    mobile.value = true;
    return;
  }
  mobile.value = false;
  mobileMenu.value = false; // 避免開啟手機選單後,視窗又被拉至桌機寬度
  return;
};
window.addEventListener("resize", checkScreen); // 偵測當前視窗寬度
checkScreen(); // 初始偵測當前視窗寬度

const toggleMenu = () => {
  mobileMenu.value = !mobileMenu.value;
  menuBar.value = true;
  // 1秒後移除
  setTimeout(() => {
    menuBar.value = false;
    console.log(
      "mobileMenu, menuBar: ",
      mobileMenu.value + ", " + menuBar.value
    );
  }, 1000);
};
</script>

<style lang="scss" scoped>
.web_header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 96px;
  z-index: 99;
  border-bottom: 1px solid $border-color;
  background-color: $secondary;
  &__inner {
    position: relative;
    height: 100%;
  }
}
.logo {
  position: absolute;
  width: 96px;
  .home-path {
    position: relative;
    text-indent: -9999px;
    height: 0;
    padding-top: 100%;
    background-color: $secondary;
  }
}

.menu {
  height: 55px;
  width: 55px;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translate(0, -50%);
  z-index: 1;
  &:hover {
    span,
    span::after {
      width: 55px;
    }
  }
  span {
    display: block;
    width: 40px;
    height: 3px;
    border-radius: 5px;
    background: $secondary4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.25s;
    &::before,
    &::after {
      position: absolute;
      content: "";
      height: 3px;
      background: $secondary4;
      border-radius: 5px;
      transition: all 0.25s;
    }
    &::before {
      width: 55px;
      top: -15px;
    }
    &::after {
      width: 20px;
      bottom: -15px;
    }
  }
}

.web_nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-left: 96px;
  &__list {
    display: flex;
    height: 100%;
    padding: 0 45px;
  }
  &__item {
    margin: 0 20px;
    &-link {
      position: relative;
      color: $secondary4;
      line-height: 96px;
      font-size: 22px;
    }
  }
}

.mobile_nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $third;
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
      color: $white;
    }
  }
}

.mobileMenu {
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
  background-color: #262a32;
  z-index: 1;
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
