<template>
  <a
    href="https://leonchou.notion.site/Leon-Chou-81d0b75acbab4a44a7e6a6ffac0f55f7?pvs=4"
    target="_blank"
    class="btn readMore"
  >
    Read More
    <span class="arrow"></span>
    <div class="circle-wrapper">
      <svg v-if="!mobile" width="44" height="44" viewBox="0 0 50 50">
        <circle r="22" cx="25" cy="25" />
      </svg>
    </div>
  </a>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const mobile = computed(() => store.state.mobile);
</script>

<style lang="scss" scoped>
@keyframes draw {
  to {
    stroke-dashoffset: 314.16px;
  }
}
@keyframes draw-back {
  from {
    stroke-dashoffset: 314.16px;
  }
  to {
    stroke-dashoffset: 0;
  }
}

.btn.readMore {
  position: relative;
  @extend .txt-btn;
  border: none;
  background: transparent;
  color: $primary;
  padding: 4px 69px 4px 0px;
  &:hover {
    background: transparent;
    color: $primary;
    svg {
      circle {
        animation: draw 1.3s;
        animation-fill-mode: forwards;
      }
    }
  }

  .circle-wrapper {
    position: absolute;
    bottom: 0;
    right: -22px;
    transform: translateY(50%);
    display: inline-block;
    svg {
      height: fit-content;
      width: fit-content;
      circle {
        --circle-len: 314.16px;
        fill: none;
        stroke: $primary;
        stroke-width: 1px;
        stroke-dasharray: var(--circle-len);
        stroke-dashoffset: 0;
        transform: scaleX(-1);
        transform-origin: center;
        // animation: draw-back 1.5s;
        animation-delay: 0s;
        // animation-fill-mode: backwards;
      }
    }
  }
  .arrow {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 157px;
    background: $primary;
    &::before,
    &::after {
      display: inline-block;
      content: "";
      position: absolute;
      height: 1px;
      width: 6px;
      background: $primary;
      border-radius: 2px;
    }
    &::before {
      transform: rotate(45deg);
      top: -2px;
      right: -1px;
    }
    &::after {
      transform: rotate(-45deg);
      top: 2px;
      right: -1px;
    }
  }
}
</style>
