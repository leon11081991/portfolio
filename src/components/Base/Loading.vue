<template>
  <div class="loading">
    <div class="pac-man">
      <div class="dot"></div>
    </div>
    <!-- <span>Wait for me to finish eating :)</span> -->
  </div>
</template>

<script>
export default {
  mounted() {
    // 添加滚动事件的监听器
    window.addEventListener("wheel", this.disableScroll, { passive: false });
  },
  beforeUnmount() {
    // 移除滚动事件的监听器
    window.removeEventListener("wheel", this.disableScroll);
  },
  methods: {
    disableScroll(event) {
      event.preventDefault(); // 阻止滚动事件的默认行为
    },
  },
};
</script>

<style lang="scss" scoped>
$pacman-size: 60px;
.loading {
  position: fixed;
  z-index: 1;
  //padding-top: $header_h-desktop * 1px;
  width: 100%;
  height: calc(100vh - $header_h-desktop * 1px - $footer_h-desktop * 1px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  backdrop-filter: blur(8px); /* 模糊效果 */
  -webkit-backdrop-filter: blur(8px);
  .pac-man {
    position: relative;
    display: block;
    border-radius: 50%;
    margin: 0 auto;
    border-radius: 100rem 100rem 0 0;
    transform-origin: bottom;
    animation: eating-top 0.5s infinite;
    width: $pacman-size;
    height: calc(#{$pacman-size} / 2);
    background: $primary;

    &,
    &::before {
      width: $pacman-size;
      height: calc(#{$pacman-size} / 2);
      background: $primary;
    }

    &::before {
      content: "";
      display: block;
      margin-top: calc(#{$pacman-size} / 2);
      position: absolute;
      transform-origin: top;
      border-radius: 0 0 100rem 100rem;
      transform: rotate(80deg);
      animation: eating-bottom 0.5s infinite;
    }

    &::after {
      position: absolute;
      top: 12px;
      right: 20px;
      border-radius: 50%;
      content: "";
      display: block;
      height: 10px;
      width: 10px;
      background: $white;
    }
  }
  .dot {
    position: absolute;
    border-radius: 100rem;
    content: "";
    display: block;
    height: 8px;
    width: 8px;
    margin-top: calc((#{$pacman-size} / 2) - 3px);
    margin-left: calc((#{$pacman-size} / 2) - 3px);
    transform-origin: center;
    animation: center 0.5s infinite, ball 0.5s -0.33s infinite linear;
  }
  //span {
  //  margin-top: 3rem;
  //}
}

@keyframes eating-top {
  0% {
    transform: rotate(-40deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-40deg);
  }
}

@keyframes eating-bottom {
  0% {
    transform: rotate(80deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(80deg);
  }
}

@keyframes center {
  0% {
    transform: rotate(40deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(40deg);
  }
}

@keyframes ball {
  0% {
    box-shadow: 34px 0 0 0 rgba($primary, 0.3), 57px 0 0 0 rgba($primary, 0.3),
      80px 0 0 0 rgba($primary, 0.3);
  }
  100% {
    box-shadow: 10px 0 0 0 rgba($primary, 0.3), 34px 0 0 0 rgba($primary, 0.3),
      57px 0 0 0 rgba($primary, 0.3);
  }
}
</style>
