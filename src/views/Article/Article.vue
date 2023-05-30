<template>
  <div>
    <Loading v-if="!store.state.post.postLoaded" />
    <div class="mainContent" :class="route.name" v-else>
      <section class="page-section page-container">
        <PageAside></PageAside>
        <div class="page-content">
          <ul class="posts-list">
            <postCard
              v-for="post in postPosts"
              :key="post.postID"
              :post="post"
            ></postCard>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// IMPORT NECESSARY
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
// VARIABLE NECESSARY
const store = useStore();
const route = useRoute();

// IMPORT COMPONENT
import Loading from "@components/Base/Loading.vue";
import PageAside from "@/components/Aside/PageAside.vue";
import postCard from "@components/Post/PostCard.vue";

// DATA
const postPosts = computed(() => store.state.post.postPosts);

console.log("(Article.vue) --- SETUP");
store.dispatch("getPosts");

onMounted(() => {
  console.log("(Article.vue) --- ON MOUNTED");
});
</script>

<style lang="scss" scoped>
.posts-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
