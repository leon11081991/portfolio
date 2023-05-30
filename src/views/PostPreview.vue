<template>
  <div class="mainContent" :class="route.name">
    <section class="page-section page-container">
      <div class="post-title">
        <h3 class="post-title-txt">{{ postTitle }}</h3>
      </div>
      <div class="post-info">
        <div class="date">Date / {{ postPublishDate }}</div>
        <div class="writer">
          <div class="writer-initial"></div>
          <p class="writer-name">Leon Chou</p>
        </div>
      </div>
      <div class="post-cover-photo">
        <div class="img_div">
          <img :src="postCoverPhoto" alt="" />
        </div>
      </div>
      <div class="post-content" v-html="postHTML"></div>
    </section>
  </div>
</template>

<script setup>
// IMPORT NECESSARY
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
// VARIABLE NECESSARY
const store = useStore();
const route = useRoute();

// DATA
const postTitle = computed(() => store.state.post.postTitle);
const postHTML = computed(() => store.state.post.postHTML);
const postCoverPhoto = computed(() => store.state.post.postCoverFileURL);
const postPublishDate = computed(() => store.state.post.postPublishDate);
</script>

<style lang="scss" scoped>
.post-title {
  margin-bottom: 1rem;
  &-txt {
    @extend .txt-headline2;
  }
}

.post-info {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  @extend .txt-s;
  color: $secondary01;
}

.post-cover-photo {
  .img_div {
    padding-bottom: calc(300 / 727) * 100%;
  }
}

.post-content {
  margin-top: 1.5rem;
  @extend %base-text-style;
  color: $secondary01;
}
</style>
