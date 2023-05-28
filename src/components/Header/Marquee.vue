<template>
  <div class="marquee-wrapper">
    <ul class="marquee">
      <li class="marquee-txt" v-for="marquee in marquees">
        {{ marquee }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps(["marquees"]);
</script>

<style lang="scss" scoped>
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
</style>
