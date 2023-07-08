<template>
  <div class="web_wrapper" :class="$route.name">
    <BackgroundLayout />
    <BaseLayout>
      <div class="mainContent" :class="route.name">
        <section class="page-section page-container" v-if="currentPost">
          <PageAside></PageAside>
          <div class="page-content">
            <div class="post-title">
              <h3 class="post-title-txt">{{ currentPost[0].postTitle }}</h3>
            </div>
            <div class="post-info">
              <div class="date">
                Date /
                {{ currentPost[0].postDate.replace(/-/g, ".") }}
              </div>
              <div class="writer">
                <div class="writer-initial"></div>
                <p class="writer-name">Leon Chou</p>
              </div>
            </div>
            <div class="post-cover-photo">
              <div class="img_div">
                <img :src="currentPost[0].postCoverFileURL" alt="" />
              </div>
            </div>
            <div class="post-content" v-html="currentPost[0].postHTML"></div>
          </div>
        </section>
      </div>
    </BaseLayout>
  </div>
</template>

<script setup>
// IMPORT NECESSARY
import { ref, computed, onBeforeMount, onMounted, onUpdated } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
// VARIABLE NECESSARY
const store = useStore();
const route = useRoute();
const props = defineProps(["postID"]);

// IMPORT COMPONENT
import PageAside from "@components/Aside/PageAside.vue";
import BackgroundLayout from "@components/Layout/BackgroundLayout.vue";
import BaseLayout from "@components/Layout/BaseLayout.vue";

// DATA
const loading = ref(false);
const currentPost = computed(() => store.state.post.currentPost);
console.log("(Post.vue) --- SETUP");

onBeforeMount(() => {
  store.dispatch("getCurrentPost", props.postID);
  console.log("currentPost", currentPost);
});

onMounted(() => {
  // 讀取頁面關閉
  store.state.loading = false;
});
</script>

<style lang="scss" scoped>
.post-title {
  margin-bottom: 1rem;
}
.post-content {
  color: $secondary01;
}
.post-info {
  display: flex;
  align-items: center;
  @extend .txt-s;
  color: $secondary01;
}
</style>
