<template>
  <div class="web_wrapper" :class="$route.name">
    <BackgroundLayout />
    <BaseLayout>
      <div class="mainContent" :class="route.name">
        <section class="page-section page-container">
          <PageAside></PageAside>
          <div class="page-content">
            <ul class="project-list">
              <ProjectItem
                v-for="(project, index) in projectList"
                :key="project.projectTitle"
                :project="project"
              ></ProjectItem>
            </ul>
          </div>
        </section>
      </div>
    </BaseLayout>
  </div>
</template>

<script setup>
// IMPORT NECESSARY
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
// VARIABLE NECESSARY
const store = useStore();
const route = useRoute();

// IMPORT COMPONENT
import PageAside from "@components/Aside/PageAside.vue";
import ProjectItem from "@components/Project/ProjectItem.vue";
import BackgroundLayout from "@components/Layout/BackgroundLayout.vue";
import BaseLayout from "@components/Layout/BaseLayout.vue";

// DATA
const projectList = computed(() => store.state.project.projectList);

store.dispatch("getProjects");

onMounted(() => {
  store.state.loading = false;
});
</script>

<style lang="scss" scoped>
.project {
  &-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.5rem;
    row-gap: 40px;

    @include media-breakpoint-down(sm) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
