<template>
  <div class="custom-cursor">
    <div
      id="cursor-big"
      class="custom-cursor__ball custom-cursor__ball--big"
    ></div>
    <div
      id="cursor-small"
      class="custom-cursor__ball custom-cursor__ball--small"
    ></div>
  </div>
</template>
<script>
import gsap from "gsap";

export default {
  mounted() {
    const cursorBig = document.getElementById("cursor-big"),
      cursorSmall = document.getElementById("cursor-small"),
      links = document.getElementsByTagName("a"),
      withClassHover = document.getElementsByClassName(this.hoverClass),
      withHover = [...links, ...withClassHover];

    // Event Listener
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseDown", onMouseHover);
    document.addEventListener("mouseUp", onMouseHoverOut);
    document.addEventListener("mouseenter", () => {
      cursorBig.style.opacity = 1;
      cursorSmall.style.opacity = 1;
    });
    document.addEventListener("mouseleave", () => {
      cursorBig.style.opacity = 0;
      cursorSmall.style.opacity = 0;
    });
    withHover.forEach((element) => {
      element.addEventListener("mouseover", onMouseHover);
      element.addEventListener("mouseout", onMouseHoverOut);
    });

    function onMouseMove(e) {
      cursorSmall.style.opacity = 1;
      gsap.to(cursorBig, 0.4, {
        x: e.clientX - 18,
        y: e.clientY - 18,
      });
      gsap.to(cursorSmall, 0.1, {
        x: e.clientX - 4,
        y: e.clientY - 4,
      });
    }
    function onMouseHover() {
      gsap.to(cursorBig, 0.3, {
        scale: 3,
      });
    }
    function onMouseHoverOut() {
      gsap.to(cursorBig, 0.3, {
        scale: 1,
      });
    }
  },
};
</script>
<style lang="scss">
.custom-cursor__ball {
  position: fixed;
  top: 0;
  left: 0;
  //mix-blend-mode: difference;
  z-index: $cursor_zIndex;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease;
  &--big {
    content: "";
    width: 40px;
    height: 40px;
    //border: 1px solid $primary;
    background: rgba($secondary01, 0.2);
    border-radius: 50%;
    mix-blend-mode: difference;
  }
  &--small {
    content: "";
    width: 8px;
    height: 8px;
    background: $secondary01;
    border-radius: 50%;
  }
}
</style>
