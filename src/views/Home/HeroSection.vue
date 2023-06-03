<template>
  <section class="home-section" :class="sectionClass">
    <div :class="sectionClass + '-wrapper page-container'">
      <!-- Hero Section Start -->
      <template v-if="section.name == 'hero'">
        <div class="section-content">
          <Comma class="comma" />
          <div>
            <span class="intro moveIn">{{ section.intro }}</span>
          </div>
          <div>
            <h2 class="title moveIn">{{ section.title }}</h2>
          </div>
          <!-- <div>
            <p class="subtitle moveIn">{{ section.subTitle }}</p>
          </div> -->
          <div>
            <p class="desc moveIn">{{ section.desc }}</p>
          </div>
          <router-link to="#" class="btn readMore">
            Read More
            <span class="arrow"></span>
            <div class="circle-wrapper">
              <svg width="44" height="44" viewBox="0 0 50 50">
                <circle r="22" cx="25" cy="25" />
              </svg>
            </div>
          </router-link>
        </div>
        <div class="section-image">
          <div class="img_div">
            <img :src="getAssetURL('hero.jpg')" alt="" />
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
// IMPORT NECESSARY
import { ref, onMounted } from "vue";
import Typed from "typed.js";
// VARIABLE NECESSARY
const props = defineProps(["section"]);

// IMPORT UTILS
import { getAssetURL } from "@/utils/getUrl";

// IMPORT ICON
import Comma from "@assets/svg/comma.svg";
import Circle from "@assets/svg/circle.svg";

// DATA
const sectionClass = ref(props.section.name);

onMounted(() => {
  console.log("(HomeSection.vue) --- ON MOUNTED");
});
</script>

<style lang="scss" scoped>
$hero_img-w: 636;
$hero_img-h: 437;
.home-section {
  position: relative;
  padding-top: 0;
  padding-bottom: 104px;
  &.hero {
    padding-top: 0;
    .hero-wrapper {
      position: relative;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @include media-breakpoint-down(md) {
        flex-direction: column-reverse;
        gap: 2.5rem;
      }
    }
    .section {
      &-content {
        position: relative;
        width: calc(467 / 1240) * 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        @include media-breakpoint-down(md) {
          width: inherit;
        }
      }
      &-image {
        position: relative;
        width: calc($hero_img-w / 1240) * 100%;
        &:hover {
          .img_div {
            filter: grayscale(0%);
            transform: translate(0, 0);
          }
        }
        @include media-breakpoint-down(md) {
          width: 60%;
        }

        .img_div {
          padding-bottom: calc($hero_img-h / $hero_img-w) * 100%;
          filter: grayscale(95%);
          z-index: 1;
          transform: translate(-22px, -22px);
          transition: transform 0.3s ease-in, filter 0.6s ease-in;
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
    .comma {
      position: relative;
      margin-bottom: 40px;
      @include media-breakpoint-down(md) {
        margin-bottom: 20px;
      }
    }
    .intro {
      position: relative;
      display: block;
      margin-bottom: 1rem;
      @extend .txt-headline3;
    }
    .title {
      position: relative;
      @extend .txt-headline1;
      //font-size: clamp(40px, 10vw, 100px);
      text-transform: uppercase;
    }
    .desc {
      position: relative;
      @extend %base-text-style;
      margin-top: 16px;
      margin-bottom: 40px;
    }
    .moveIn {
      color: transparent;
      animation: textReveal 0.5s ease forwards;
      animation-delay: 1.5s;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: $primary;
        animation: textRevealBox 1s ease;
        animation-delay: 1s;
      }
    }

    .section-content > div:nth-child(2) .moveIn {
      animation-delay: 1.5s;
    }
    .section-content > div:nth-child(3) .moveIn {
      animation-delay: 2.5s;
    }
    .section-content > div:nth-child(4) .moveIn {
      animation-delay: 3.5s;
    }

    .section-content > div:nth-child(2) .moveIn::after {
      animation-delay: 1s;
    }
    .section-content > div:nth-child(3) .moveIn::after {
      animation-delay: 2s;
    }
    .section-content > div:nth-child(4) .moveIn::after {
      animation-delay: 3s;
    }
  }
}
</style>
