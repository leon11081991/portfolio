<template>
  <div class="mainContent">
    <HomeSection :section="heroSection" />
    <HomeSection :section="aboutMe" />
    <section class="home-section articles">
      <div class="articles-wrapper container">
        <h3 class="section-title">筆記文章</h3>
        <ul class="articles-list">
          <ArticleCard
            :post="post"
            v-for="(post, index) in sampleArticles"
            :key="index"
          />
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
// import
import { ref } from "vue";
import HomeSection from "@components/Layout/HomeSection.vue";
import ArticleCard from "@components/ArticleCard.vue";

// data
const heroSection = {
  name: "hero",
  locate: "Taiwan, Taipei",
  intro: "Hi, my name is",
  title: "Leon Chou",
  subTitle: "A front-end engineer for the web.",
  desc: "I’m a front-end engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.測試",
};

const aboutMe = {
  name: "about",
  title: "About Me",
};

const sampleArticles = [
  {
    articleTitle: "article #1",
    articleContent:
      "一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props，哪些是透传 attribute (关于透传 attribonal digital experiences. Currently, I’m focused on building accessible, human-cenute，我们会在专门的章节中讨论)。",
    articleDate: "May 1 ,2023",
  },
  {
    articleTitle: "article #2",
    articleContent:
      "一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props，哪些是透传 attribute (关于透传 attrrvreibute，我们会在专门的章节中讨论)。",
    articleDate: "May 2 ,2023",
  },
  {
    articleTitle: "article #3",
    articleContent:
      "一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props，哪些是透传 attribute (关于透传 attribute，我们会在专门的章节中讨论)。",
    articleDate: "May 3 ,2023",
  },
];
</script>

<style lang="scss" scoped>
// 文章component
.articles {
  &-list {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 15px;
    @include media-breakpoint-down(md) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
}
</style>
