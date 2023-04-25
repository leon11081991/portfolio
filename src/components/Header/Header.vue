<template>
  <header class="web_header">
    <div class="web_header__inner container">
      <!-- Logo Start -->
      <div class="logo-wrapper">
        <h1 class="logo">
          <router-link class="siteName" to="#">
            <Logo class="logoIcon" />
            I'm logo
          </router-link>
        </h1>
      </div>
      <!-- Logo End -->

      <!-- Marquee Start -->
      <div class="marquee-wrapper">
        <ul class="marquee">
          <li
            class="marquee-txt"
            v-for="(marqueeText, index) in marqueeTexts"
            :key="index"
          >
            {{ marqueeText }}
          </li>
        </ul>
      </div>
      <!-- Marquee End -->
    </div>
    <!-- Menu Start -->
    <div
      class="menu"
      :class="store.state.header.menu ? 'active' : ''"
      @click="store.dispatch('toggleMenu')"
    >
      <span></span>
    </div>
    <!-- <div
      class="menu-open-bar"
      :class="store.state.header.menuBar ? 'toggle' : ''"
    ></div> -->
    <!-- Menu End -->
    <Transition name="Menu">
      <nav class="web_nav" v-if="store.state.header.menu">
        <div class="web_nav__inner">
          <div class="web_nav-main">
            <ul class="web_nav-list">
              <li
                class="web_nav-item"
                v-for="(navigator, index) in store.state.header.navigationList"
                :key="index"
              >
                <router-link class="web_nav-item-link" :to="navigator.path">
                  {{ navigator.name }}
                  <Arrow class="arrow" />
                </router-link>
              </li>
            </ul>
          </div>
          <div class="web_nav-submain">
            <div class="socialMedia">
              <ul class="socialMedia-list">
                <li class="socialMedia-item">
                  <a href="" class="socialMedia-item-link" target="_blank">
                    <Github class="item-icon" />
                  </a>
                </li>
                <li class="socialMedia-item">
                  <a href="" class="socialMedia-item-link" target="_blank">
                    <Linkin class="item-icon" />
                  </a>
                </li>
                <li class="socialMedia-item">
                  <a href="" class="socialMedia-item-link" target="_blank">
                    <Codepen class="item-icon" />
                  </a>
                </li>
                <li class="socialMedia-item">
                  <a href="" class="socialMedia-item-link" target="_blank">
                    <Notion class="item-icon" />
                  </a>
                </li>
              </ul>
            </div>
            <div class="login">
              <router-link to="/login" class="login-link"
                >Login / Register</router-link
              >
            </div>
          </div>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<script setup>
// import
import { ref, onMounted, computed, Transition } from "vue";
import { useStore } from "vuex";
import Logo from "@assets/logo.svg";
import Github from "@assets/icons/github.svg";
import Linkin from "@assets/icons/linkin.svg";
import Codepen from "@assets/icons/codepen.svg";
import Notion from "@assets/icons/notion.svg";
import Arrow from "@assets/icons/arrow.svg";

// data
const store = useStore();
const marqueeTexts = store.state.header.marqueeTexts;

// methods

onMounted(() => {
  console.log("onMounted");
});
</script>

<style lang="scss" scoped>
.web_header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $header_h-desktop * 1px;
  z-index: $header_zIndex;
  background-color: $white;
  &__inner {
    position: relative;
    height: 100%;
    overflow: hidden;
    display: grid;
    grid-template-columns: calc(251 / 1265) * 100% calc(1013 / 1265) * 100%;
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
  &-wrapper {
    position: relative;
    height: $header_h-desktop * 1px;
    display: flex;
    align-items: center;
  }
  .logoIcon {
    margin-right: 6px;
  }
  .siteName {
    @extend .txt-headline3;
    color: $primary;
  }
}
.marquee {
  &-wrapper {
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    background: $white;
  }
  position: absolute;
  width: 200%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  color: $primary;
  animation: marquee 20s linear infinite;
  -webkit-animation: marquee 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  &-txt {
    white-space: nowrap;
    @extend .txt-headline3;
  }
}

.menu {
  height: $header_h-desktop * 1px;
  width: $aside_w-desktop * 1px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: $menu_zIndex;
  background-color: $primary;

  span {
    display: block;
    position: absolute;
    top: 50%;
    left: 27%;
    transform: translateY(-50%);
    width: 35px;
    height: 1px;
    background: $white;
    opacity: 1;
    transition: all 0.25s ease-in-out;
    &::before,
    &::after {
      position: absolute;
      content: "";
      height: 1px;
      background: $white;
      transition: all 0.25s ease-in-out;
    }
    &::before {
      width: 40px;
      top: -10px;
    }
    &::after {
      width: 30px;
      bottom: -10px;
    }
  }

  &:hover {
    span,
    span::after {
      width: 40px;
    }
  }

  &.active {
    span {
      background: transparent;
      transition: all 0.25s ease-in-out;
      &::before {
        width: 45px;
        top: 0;
        transform: rotate(-25deg);
      }
      &::after {
        width: 45px;
        bottom: 0;
        transform: rotate(25deg);
      }
    }
  }
}

.web_nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: $primary;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: $aside_w-desktop * 1px;
    height: 100%;
    width: 1px;
    background: rgba($white, 0.2);
  }
  &__inner {
    width: calc(949 / 1440) * 100%;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }
  &-main {
    margin: 88px 0;
  }
  &-list {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -44px;
  }
  &-item {
    position: relative;
    &-link {
      position: relative;
      display: block;
      padding: 40px 0;
      @extend .txt-headline2;
      color: $white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &::before,
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
      }
      &::before {
        width: 0%;
        background: rgba($white, 1);
        transition: all 0.5s ease-in;
      }
      &::after {
        width: 100%;
        background: rgba($white, 0.3);
      }
      .arrow {
        fill: rgba($white, 0.3);
        transition: all 0.5s ease-in;
      }

      &:hover {
        color: $white;
        &::before {
          width: 100%;
          transition: all 0.5s ease-out;
        }
        .arrow {
          fill: $white;
          transition: all 0.5s ease-out;
        }
      }
    }
  }

  &-submain {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .socialMedia {
      &-list {
        display: flex;
      }
      &-item {
        &:not(:last-child) {
          margin-right: 33px;
        }
        &-link {
          border: 1px solid $white;
          border-radius: 50%;
          .item-icon {
            fill: $white;
            path {
            }
          }
        }
      }
    }
    .login {
      a {
        display: inline-block;
        position: relative;
        @extend .txt-headline4;
        color: $white;
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          height: 1px;
          width: 0%;
          background: $white;
          transition: all 0.5s ease-in;
        }
        &:hover {
          &::after {
            width: 100%;
            transition: all 0.5s ease-out;
          }
        }
      }
    }
  }
}
// 點擊 Menu動畫
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

//.menu-open-bar {
//  width: 100vw;
//  height: 50vh;
//  position: absolute;
//  top: 0;
//  left: 0;
//  background-color: $secondary;
//  z-index: 101;
//  transform: translate3d(0, -40vh, 0);
//  visibility: hidden;
//  &.toggle {
//    visibility: visible;
//    transform: translate3d(0, 100vh, 0);
//    transition: transform 0.8s;
//    transition-timing-function: $easeInOutQuart;
//  }
//}
</style>
