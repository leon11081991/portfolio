<template>
  <div>
    <Loading v-if="!store.state.project.projectLoaded" />
    <div class="mainContent" :class="route.name" v-else>
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
  </div>
</template>

<script setup>
// IMPORT NECESSARY
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
// VARIABLE NECESSARY
const store = useStore();
const route = useRoute();

// IMPORT COMPONENT
import Loading from "@components/Base/Loading.vue";
import PageAside from "@components/Aside/PageAside.vue";
import ProjectItem from "@components/Project/ProjectItem.vue";

// DATA
//const loading = computed(() => store.state.project.projectLoaded);
const projectList = computed(() => store.state.project.projectList);

console.log("(Projects.vue) --- SETUP");
store.dispatch("getProjects");
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
