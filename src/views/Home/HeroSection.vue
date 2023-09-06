<template>
  <section class="home-section" :class="sectionClass">
    <div :class="sectionClass + '-wrapper page-container'">
      <template v-if="section.name == 'hero'">
        <div class="section-content">
          <Comma class="comma" />
          <div class="intro-wrap">
            <span class="intro moveIn">{{ section.intro }}</span>
          </div>
          <div class="title-wrap">
            <h2 class="title moveIn">{{ section.title }}</h2>
          </div>

          <Typed class="typed-wrap" :options="options">
            <p class="typing desc moveIn"></p>
          </Typed>

          <div class="readMore-wrap">
            <ButtonReadMore />
          </div>
        </div>

        <div class="section-image">
          <SelfPhoto class="svgRWD selfPhoto" />
          <Amoeba class="svgRWD bg" />
          <AmoebaDot class="svgRWD bgDot" />
        </div>
      </template>

      <template v-if="section.name == 'about'">
        <h3 class="title">{{ section.title }}</h3>
      </template>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { Typed } from "@duskmoon/vue3-typed-js";

import ButtonReadMore from "@/components/Base/ButtonReadMore.vue";
import Comma from "@assets/svg/comma.svg";
import Amoeba from "@assets/svg/amoeba.svg";
import AmoebaDot from "@/assets/svg/amoeba-dot.svg";
import SelfPhoto from "@/assets/svg/selfPhoto.svg";

const props = defineProps(["section"]);
const options = {
  strings: props.section.desc,
  loop: true,
  typeSpeed: 100,
  smartBackspace: true,
};

// DATA
const sectionClass = ref(props.section.name);

// METHOD
const setSvgRwd = () => {
  const svgs = document.getElementsByClassName("svgRWD");

  for (let i = 0; i < svgs.length; i++) {
    svgs[i].setAttribute(
      "viewBox",
      "0,0," + svgs[i].getBBox().width + "," + svgs[i].getBBox().height
    );
  }
};

onMounted(() => {
  setSvgRwd();
});
</script>

<style lang="scss" scoped>
$section-content_w: 440;
$section-image_w: 519;
$section-gap_w: 140;
$selfPhoto_w: 380;

.home-section {
  position: relative;
  width: 100%;

  .hero-wrapper {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include media-breakpoint-down(md) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .section {
    &-content {
      position: relative;
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto;
      grid-template-areas:
        "comma"
        "intro"
        "title"
        "typed"
        "readMore";
      max-width: 440px;
      width: 100%;
      @include media-breakpoint-down(md) {
        margin-top: 60px;
        width: inherit;
        max-width: inherit;
        grid-template-columns: 25% 25% 25% 25%;
        grid-template-rows: auto auto;
        grid-template-areas:
          "intro title title title"
          "typed typed typed typed" "readMore readMore readMore readMore";
      }
      @include media-breakpoint-down(sm) {
        grid-template-columns: 100%;
        grid-template-areas: "intro" "title" "typed" "readMore";
      }

      .comma {
        grid-area: comma;
        position: absolute;
        top: -80px;
        @include media-breakpoint-down(md) {
          top: -60px;
        }
      }
      .intro-wrap {
        grid-area: intro;
      }
      .title-wrap {
        grid-area: title;
      }
      .typed-wrap {
        grid-area: typed;
      }
      .desc-wrap {
        grid-area: desc;
      }
      .readMore-wrap {
        margin-right: 15px;
        grid-area: readMore;
        @include media-breakpoint-down(md) {
          justify-self: flex-end;
        }
      }

      .intro {
        position: relative;
        display: block;
        margin-bottom: 0.5rem;
        @extend .txt-headline3;
      }
      .title {
        position: relative;
        margin-bottom: 1rem;
        text-transform: uppercase;
        @extend .txt-headline1;
        @include media-breakpoint-down(md) {
          text-align: center;
        }
        @include media-breakpoint-down(sm) {
          margin-bottom: 0.5rem;
        }
      }
      .typed-element {
        margin-bottom: 2.5rem;
        @include media-breakpoint-down(md) {
          margin-bottom: 1.5rem;
        }
        @include media-breakpoint-down(sm) {
          margin-bottom: 1rem;
        }
      }
      .desc {
        position: relative;
        @extend %base-text-style;
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
    }
    &-image {
      position: relative;
      flex: 1 0 auto;
      max-width: $section-image_w * 1px;
      width: calc((1200 - $section-content_w - $section-gap_w) / 1200) * 100%;
      @include media-breakpoint-down(md) {
        height: 280px;
      }
      @include media-breakpoint-down(sm) {
        height: 250px;
        width: 65%;
      }

      .selfPhoto,
      .bg,
      .bgDot {
        width: calc($selfPhoto_w / $section-image_w) * 100%;
        position: absolute;
        top: 50%;
        @include media-breakpoint-down(lg) {
          width: 82%;
        }
      }
      .selfPhoto {
        left: 0;
        z-index: 1;
        transform: translateY(calc(-50% - 12px));
        filter: grayscale(100%);
        transition: all 0.4s ease-in;
        &:hover {
          filter: grayscale(0%);
          transform: translate(6.95%, -50%);
        }
      }
      .bg {
        left: 0;
        transform: translate(6.95%, -50%);
      }
      .bgDot {
        transform: translate(26.8%, calc(-50% - 13px));
      }
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
</style>
