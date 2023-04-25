<template>
  <section class="home-section" :class="sectionClass">
    <div :class="sectionClass + '-wrapper page-container'">
      <!-- Hero Section Start -->
      <template v-if="section.name == 'hero'">
        <div class="section-content">
          <Dot class="dot" />
          <span class="intro">{{ section.intro }}</span>
          <h2 class="title">{{ section.title }}</h2>
          <p class="subtitle">{{ section.subTitle }}</p>
          <p class="desc">{{ section.desc }}</p>
          <router-link to="#" class="btn readMore">
            Read More
            <span class="arrow"></span>
            <div class="circle-wrapper">
              <Circle />
            </div>
          </router-link>
        </div>
        <div class="section-image">
          <div class="img_div">
            <img src="/img/hero.jpg" alt="" />
          </div>
          <div class="img_bg"></div>
        </div>
      </template>
      <!-- Hero Section End -->

      <!-- About Section Start -->
      <template v-if="section.name == 'about'">
        <h3 class="title">{{ section.title }}</h3>
      </template>
      <!-- About Section End -->
    </div>
  </section>
</template>

<script setup>
// import
import { ref } from "vue";
import Dot from "@assets/icons/dot.svg";
import Circle from "@assets/icons/circle.svg";

// data
const props = defineProps(["section"]);
const sectionClass = ref(props.section.name);
</script>

<style lang="scss" scoped>
$hero_img-w: 636;
$hero_img-h: 437;
.home-section {
  position: relative;
  padding-top: 104px;
  padding-bottom: 104px;
  &.hero {
    padding-top: 93px;
    .hero-wrapper {
      position: relative;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .section {
      &-content {
        position: relative;
        width: calc(467 / 1240) * 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        @include media-breakpoint-down(lg) {
          width: inherit;
        }
      }
      &-image {
        position: relative;
        width: calc($hero_img-w / 1240) * 100%;
        &:hover {
          .img_div {
            transform: translate(0, 0);
          }
        }

        .img_div {
          padding-bottom: calc($hero_img-h / $hero_img-w) * 100%;
          filter: grayscale(95%);
          z-index: 1;
          transform: translate(-22px, -22px);
          transition: transform 0.3s ease-in;
        }
        .img_bg {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: $primary;
        }
      }
    }
    .dot {
      position: relative;
      margin-bottom: 40px;
    }
    .intro {
      display: block;
      margin-bottom: 16px;
      @extend .txt-headline3;
    }
    .title {
      @extend .txt-headline1;
      //font-size: clamp(40px, 10vw, 100px);
      text-transform: uppercase;
      //color: $primary;
    }
    .desc {
      @extend %base-text-style;
      margin-top: 16px;
      margin-bottom: 40px;
    }
  }
  &.about {
  }
}
</style>
