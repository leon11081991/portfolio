<template>
  <div class="web_wrapper" :class="$route.name">
    <BackgroundLayout />
    <BaseLayout>
      <div class="mainContent" :class="route.name">
        <section class="page-section page-container">
          <PageAside></PageAside>
          <div class="page-content About">
            <div class="introduction">
              <div class="about-header">
                <div class="header-inner">
                  <div class="profile-img">
                    <div class="img_div">
                      <img src="@/assets/img/profile-img.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="about-content">
                <div class="title" v-html="aboutData.title"></div>
                <div class="tags-wrap">
                  <span
                    class="tag"
                    v-for="(tag, index) in aboutData.tags"
                    :key="index"
                  >
                    # {{ tag }}
                  </span>
                </div>
                <div class="content" v-html="aboutData.content"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BaseLayout>
  </div>
</template>

<script setup>
// IMPORT NECESSARY
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

// VARIABLE NECESSARY
const route = useRoute();
const store = useStore();

import PageAside from "@/components/Aside/PageAside.vue";
import BackgroundLayout from "@/components/Layout/BackgroundLayout.vue";
import BaseLayout from "@/components/Layout/BaseLayout.vue";

const aboutData = reactive({
  title: "Hola! 我是 Leon，周翊庭",
  tags: ["健身小老師", "翻譯助手", "細節控"],
  content:
    "我是周翊庭，大家都叫我周周，我是淡江西語系畢業，但我同時也擁有電機工程的學位。<br/>我曾經在華航擔任發動機維修工程師，主要負責發動機的檢查和開立工單，同時為原廠技術人員的隨行翻譯。<br/>後來我去進修了電機工程，期間我學習了C語言，也自學python完成了自動化機器人的專題。在順利畢業後，我在職訓局持續學習關於物聯網相關的應用，並以Linux系統和python建構一個主動偵測人臉辨識系統。過程中也因為需要建構前端畫面，而開始自學前端。<br/>後來，我在鵠崙設計公司擔任前端工程師，主要負責完成一整個專案，包含切版、串接資料，與PM及設計師溝通協作。後期，當有專案需要其他功能時，負責開發後端的。<br/>由於以前有接觸過後端語言，除了更精進前端的技能之外，目前也正在學習 Laravel ，希望能藉此更深入了解後端的知識，在未來能更好的與各團隊之間協作。",
});

onMounted(() => {
  // 讀取頁面關閉
  store.state.loading = false;
});
</script>
<style lang="scss" scoped>
$profile-img-size: 264;

.introduction {
  display: grid;
  grid-template-columns: 29% 62.74%;
  justify-content: space-between;
  @include media-breakpoint-down(md) {
    grid-template-columns: inherit;
    grid-template-rows: auto auto;
    gap: 2rem;
  }
}
.profile-img {
  overflow: hidden;
  border-radius: 50%;
  @include media-breakpoint-down(md) {
    width: 50%;
    min-width: 200px;
  }
  .img_div {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    overflow: hidden;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
.title {
  margin-bottom: 1.5rem;
  @extend .txt-headline2;
}
.tags-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  .tag {
    flex: 0 0 1;
    padding: 4px 10px;
    background: $secondary02;
    border-radius: 50px;
  }
}

.content {
  margin-top: 1.5rem;
  color: $gray01;
}
</style>
