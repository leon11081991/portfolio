<template>
  <div class="bg">
    <div class="layout" v-for="(item, index) in 4" :key="index"></div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { ref, onMounted, computed } from "vue";

const store = useStore();

const layoutLeft = computed(() => store.state.layoutLeft);
const layoutRight = computed(() => store.state.layoutRight);

// 偵測視窗寬度
const checkScreen = () => {
  store.dispatch("checkScreen");
};
checkScreen(); // 初始偵測當前視窗寬度
window.addEventListener("resize", checkScreen); // 偵測當前視窗寬度

onMounted(() => {
  // console.log(1);
});
</script>

<style lang="scss" scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: $bg_zIndex;
  padding-right: $aside_w-desktop * 1px;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}

.layout {
  position: relative;
  display: block;
  background: transparent;

  &:not(:last-child) {
    border-right: 1px solid rgba($primary, 0.1);
  }
}
</style>
