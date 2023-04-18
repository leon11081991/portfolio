<template>
  <section class="home-section" :class="sectionClass">
    <div :class="sectionClass + '-wrapper'" class="container">
      <template v-if="section.name == 'hero'">
        <span class="locate">
          <location class="icon" />
          {{ section.locate }}
        </span>
        <span class="intro">{{ section.intro }}</span>
        <h2 class="title">{{ section.title }}</h2>
        <p class="subtitle">{{ section.subTitle }}</p>
        <p class="desc">{{ section.desc }}</p>
      </template>
      <template v-if="section.name == 'about'">
        <h3 class="title">{{ section.title }}</h3>
      </template>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import location from "@assets/icons/location.svg";
const props = defineProps(["section"]);
console.log(props.section);
const sectionClass = ref(props.section.name);
</script>

<style lang="scss">
.home-section {
  position: relative;
  padding-bottom: 104px;
  &.hero {
    height: calc(100vh - 96px);
    padding-bottom: 0;
    display: flex;
    align-items: center;
    .hero-wrapper {
    }
    .locate {
      display: flex;
      align-items: center;
      font-size: 0.8rem;
      .icon {
        padding-right: 0.5rem;
      }
    }
    .intro {
      display: block;
    }
    .title {
      //text-align: center;
      font-size: clamp(40px, 10vw, 100px);
      font-weight: 900;
      letter-spacing: 0.1rem;
      color: $focus;
    }
    .subtitle {
      //text-align: center;
      font-size: clamp(32px, 10vw, 60px);
      line-height: 1;
      font-weight: 600;
    }
    .desc {
      margin-top: 2rem;
      width: 60%;
    }
  }
}
</style>
