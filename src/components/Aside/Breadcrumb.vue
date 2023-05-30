<template>
  <div class="breadcrumb">
    <div class="breadcrumb-item">
      <router-link :to="{ name: 'Home' }" class="breadcrumb-item-link">
        <Icon name="home" />
      </router-link>
    </div>
    <span class="slash">/</span>
    <div class="breadcrumb-item" v-for="item in levelList" :key="item.name">
      <a class="breadcrumb-item-link">{{ item.name.toUpperCase() }}</a>
    </div>
    <div v-if="route.params && postTitle" class="breadcrumb-item">
      <a class="breadcrumb-item-link">{{ postTitle }}</a>
    </div>
  </div>
</template>

<script setup>
// IMPORT NECESSARY
import { ref, computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
// VARIABLE NECESSARY
const route = useRoute();
const store = useStore();

// IMPORT COMPONENTS
import Icon from "@components/Base/Icon.vue";

// DATA
const levelList = ref(null);

const postTitle = computed(() => {
  if (route.params.postID) {
    return store.state.post.currentPost[0].postTitle;
  }
  return;
});

// METHODS
const getBreadcrumb = () => {
  // console.log("route", route);
  const matched = route.matched.filter(
    // 只顯示有meta title的路由
    (item) => item.meta && item.meta.title
  );
  //console.log("matched", matched);
  const secondLvl = matched[0];

  // 如果不是文章內頁
  if (route.name !== "Post") {
    levelList.value = matched;
  } else {
    secondLvl.name = "Article";
    levelList.value = matched;
  }
  //console.log("breadcrumbList", levelList.value);
};

onBeforeMount(() => {
  getBreadcrumb();
});
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: flex;
  align-items: center;

  &-item {
    margin: 0 6px;
    &:first-child {
      margin: 0 6px 0 0;
    }
    &:last-child {
      .breadcrumb-item-link {
        color: rgba($primary, 0.3);
      }
    }
    &-link {
      @extend .txt-s;
      color: rgba($primary, 1);
      transition: all 0.5s ease-in-out;
      &:hover {
        color: $secondary01;
      }
      .icon {
        margin: 0;
      }
    }
  }

  .slash {
    color: rgba($primary, 0.3);
  }
}
</style>
