<template>
  <header class="web_header">
    <HeaderBackground />
    <div class="web_header__inner container">
      <Logo></Logo>
      <Marquee v-if="!mobile" :marquees="marqueeTexts"></Marquee>
    </div>
    <div
      class="menu"
      :class="headerMenu ? 'active' : ''"
      @click.prevent="handleHeaderMenu"
    >
      <span></span>
    </div>
    <TransitionSlideDownToDown>
      <nav class="web_nav" v-if="headerMenu">
        <div class="web_nav__inner">
          <div class="web_nav-main">
            <ul class="web_nav-list">
              <li
                class="web_nav-item"
                v-for="navigator in navigationList"
                :key="navigator.name"
              >
                <router-link
                  class="web_nav-item-link"
                  :to="{ name: navigator.name }"
                >
                  {{ navigator.name.toUpperCase() }}
                  <Icon name="arrow" class="initial" />
                </router-link>
              </li>
            </ul>
          </div>

          <ProfileMenu />

          <div class="web_nav-subMain">
            <SocialMedia class="headerMenu" />
            <div class="user-controller">
              <router-link
                v-if="!userLogged"
                :to="{ name: 'Login' }"
                class="user-controller-link"
                >Login / Register</router-link
              >
              <span
                v-else
                @click.prevent="handleSignOut"
                class="user-controller-link"
                >Sign Out</span
              >
            </div>
          </div>
        </div>
      </nav>
    </TransitionSlideDownToDown>
  </header>
</template>

<script setup>
// IMPORT NECESSARY
import { computed } from "vue";
import { useStore } from "vuex";
// VARIABLE NECESSARY
const store = useStore();

// IMPORT COMPONENTS
import HeaderBackground from "@components/Header/HeaderBackground.vue";
import Marquee from "@components/Header/Marquee.vue";
import SocialMedia from "@components/Base/SocialMedia.vue";
import Icon from "@components/Base/Icon.vue";
import Logo from "@components/Base/Logo.vue";
import TransitionSlideDownToDown from "@components/Transition/slideDownToDown.vue";
import ProfileMenu from "@components/Aside/ProfileMenu.vue";

// DATA
const marqueeTexts = computed(() => store.state.header.marqueeTexts);
const headerMenu = computed(() => store.state.header.menu);
const navigationList = computed(() => store.state.header.navigationList);
const userLogged = computed(() => store.state.user.user);
const mobile = computed(() => store.state.mobile);

// METHODS
// (1) 切換選單
const handleHeaderMenu = () => {
  store.dispatch("toggleMenu");
};
// (2) 登出
const handleSignOut = () => {
  store.dispatch("signOutCurrentUser");
};
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
    @include media-breakpoint-down(md) {
      display: flex;
      justify-content: center;
    }
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
  &:hover {
    cursor: pointer;
  }

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
  z-index: $webNav_zIndex;
  overflow-y: scroll;
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
      .icon {
        height: initial;
        width: initial;
        fill: rgba($white, 0.3);
        transition: fill 0.8s ease-in, transform 0.5s ease-in;
      }

      &:hover {
        color: $white;
        &::before {
          width: 100%;
          transition: all 0.4s ease-out;
        }
        .icon {
          fill: $white;
          transform: translateX(5px);
          transition: fill 0.8s ease-in, transform 0.5s ease-in;
        }
      }
    }
  }

  &-subMain {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .user-controller {
      &-link {
        display: inline;
        position: relative;
        @extend .txt-headline4;
        color: $white;
        cursor: pointer;
        background-image: linear-gradient($white, $white);
        background-repeat: no-repeat;
        background-position: bottom left;
        background-size: 0% 1px;
        transition: background-size 500ms ease-in-out;
        &:hover {
          background-size: 100% 1px;
          transition: background-size 500ms ease-in-out;
        }
      }
    }
  }
}
</style>
