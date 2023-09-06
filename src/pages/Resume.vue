<template>
  <div class="web_wrapper" :class="$route.name">
    <BackgroundLayout />
    <BaseLayout>
      <div class="mainContent" :class="$route.name">
        <section class="page-section page-container">
          <div class="header">
            <div class="header-inner">
              <Header />
            </div>
          </div>
          <div class="content">
            <div class="column-first">
              <div class="info">
                <Info />
              </div>
              <div class="education">
                <Education />
              </div>
            </div>
            <div class="column-second">
              <div class="experience">
                <Experience />
              </div>
            </div>
            <div class="column-third">
              <div class="skills">
                <Skills />
              </div>
              <div class="languages">
                <Language />
              </div>
            </div>
          </div>
        </section>
      </div>
    </BaseLayout>
  </div>
</template>
<script>
import BackgroundLayout from "@/components/Layout/BackgroundLayout.vue";
import BaseLayout from "@/components/Layout/BaseLayout.vue";
import Header from "@/components/Resume/Header.vue";
import Info from "@/components/Resume/Info.vue";
import Education from "@/components/Resume/Education.vue";
import Experience from "@/components/Resume/Experience.vue";
import Skills from "@/components/Resume/Skills.vue";
import Language from "@/components/Resume/Language.vue";

export default {
  name: "Resume",
  components: {
    BackgroundLayout,
    BaseLayout,
    Header,
    Info,
    Education,
    Experience,
    Skills,
    Language,
  },
  mounted() {
    // 讀取頁面關閉
    this.$store.state.loading = false;
  },
};
</script>

<style lang="scss" scoped>
.Resume {
  .mainContent {
    display: flex;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .page-section {
    display: grid;
    grid-template-areas: "header content";
    grid-auto-columns: 21.3% 80%;
    @include media-breakpoint-down(lg) {
      grid-template-areas: "header" "content";
      grid-auto-columns: 100%;
      gap: 20px;
    }
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    grid-area: header;
    gap: 2rem;
    &-inner {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      height: 100%;
      @include media-breakpoint-down(lg) {
        width: 100%;
        flex-direction: row;
      }
      @include media-breakpoint-down(sm) {
        flex-direction: column;
        gap: 20px;
      }
    }
  }

  .content {
    grid-area: content;
    display: grid;
    grid-template-areas: "first second third";
    grid-auto-columns: 36% 36% 28%;
    @include media-breakpoint-down(md) {
      grid-template-areas: "first first" "second third";
      grid-auto-columns: 50% 50%;
    }
    @include media-breakpoint-down(sm) {
      grid-template-areas: "first" "second" "third";
      grid-auto-columns: 100%;
      gap: 40px;
    }
  }

  .column {
    &-first,
    &-second,
    &-third {
      padding-left: 8px;
      @include media-breakpoint-down(sm) {
        padding-left: initial;
      }
    }

    &-first {
      grid-area: first;
      display: flex;
      flex-direction: column;
      gap: 40px;

      @include media-breakpoint-down(md) {
        display: grid;
        grid-auto-rows: 100%;
        grid-template-areas: "info education";
        grid-template-columns: 50% 50%;
        gap: unset;
      }
      @include media-breakpoint-down(sm) {
        grid-template-areas: "info" "education";
        grid-auto-rows: initial;
        grid-template-columns: initial;
        gap: 40px;
      }
    }
    &-second {
      grid-area: second;
    }
    &-third {
      grid-area: third;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
  }

  .info {
    grid-area: info;
  }
  .education {
    grid-area: education;
    @include media-breakpoint-down(md) {
      padding-left: 8px;
    }
    @include media-breakpoint-down(sm) {
      padding-left: initial;
    }
  }
  .experience {
    grid-area: experience;
  }
  .skills {
    grid-area: skills;
  }
  .languages {
    grid-area: languages;
  }
}
</style>
