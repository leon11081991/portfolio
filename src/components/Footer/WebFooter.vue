<template>
  <footer class="web_footer">
    <div class="web_footer__inner">
      <ul class="information-list">
        <li
          class="information-item col"
          v-for="(info, index) in store.state.footer.information"
          :key="info.title"
        >
          <a
            :href="info.link"
            class="information-item-link"
            :target="info.target"
          >
            <span>{{ info.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
// IMPORT NECESSARY
import { useStore } from "vuex";
// VARIABLE NECESSARY
const store = useStore();
</script>

<style lang="scss" scoped>
.web_footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: $footer_h-desktop * 1px;
  background: $white;
  z-index: $footer_zIndex;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: $primary;
  }
  &__inner {
    position: relative;
    height: 100%;
    padding-right: $aside_w-desktop * 1px;
    @include media-breakpoint-down(md) {
      padding-right: unset;
    }
  }
}
.information {
  &-list {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    height: 100%;
    @include media-breakpoint-down(sm) {
      grid-template-columns: 50% 50%;
      grid-template-rows: 50% 50%;
    }
  }
  &-item {
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    background: $white;
    border-right: 1px solid rgba($primary, 0.1);

    // 藍色圓點點
    &::before {
      position: absolute;
      left: 29px;
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: $primary;
      z-index: 1;
      transition: all 350ms ease;
    }

    &:hover {
      &::before {
        background: $white;
        z-index: 5;
      }
    }
    &-link {
      width: 100%;
      height: 100%;
      padding: 10px 56px;
      display: flex;
      align-items: center;
      // 滑動的藍色色塊
      &::after,
      &::before {
        content: " ";
        display: block;
        position: absolute;
        width: 100%;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
      }
      &::before {
        transform: translateX(-100%);
        background: $primary;
        z-index: 1;
      }
      &::after {
        transform: translateX(-100%);
        background: $primary;
        z-index: 0;
        transition: none;
        transition: transform 350ms ease;
      }
      // hover時,滑動的藍色色塊
      &:hover {
        &::before {
          transform: translateX(0);
          transition: transform 350ms ease;
        }
        &::after {
          opacity: 1;
          transform: translateX(0);
          transition: transform 350ms 360ms ease;
        }
        // hover時,藍色點點變白色點點
        .information-item::before {
          background: $white;
          z-index: 5;
        }
        // hover時,字體變白色
        span {
          color: $white;
        }
      }

      span {
        z-index: 5;
        position: relative;
        transition: color 350ms ease;
        color: $primary;
      }
    }
  }
}
</style>
