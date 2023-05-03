<template>
  <div class="mainContent">
    <section class="page-section page-container">
      <aside class="page-aside">
        <div class="breadcrumb">
          <div class="breadcrumb-link">
            <router-link :to="{ name: 'Home' }">
              <HomeIcon class="icon-bc" />
            </router-link>
          </div>
          <span class="slash">/</span>
          <div class="breadcrumb-link">
            <router-link :to="{ name: project }">Projects</router-link>
          </div>
        </div>
        <div class="page-heading">
          <h2 class="page-heading-txt">Projects</h2>
        </div>
      </aside>
      <div class="page-content">
        <ul class="project-list">
          <ProjectItem
            v-for="(project, index) in projects"
            :key="index"
            :project="project"
          ></ProjectItem>
        </ul>
      </div>
    </section>
  </div>
</template>
<script setup>
import HomeIcon from "@assets/icons/home.svg";

import ProjectItem from "@components/Project/ProjectItem.vue";

import { ref } from "vue";

const projects = ref([
  {
    img: "",
    title: "綠的國際",
    link: "",
  },
  {
    img: "",
    title: "綠的國際-輕品家居",
    link: "",
  },
  {
    img: "",
    title: "勵馨基金會",
    link: "",
  },
  {
    img: "",
    title: "凱奧藝廊",
    link: "",
  },
  {
    img: "",
    title: "Open Vision Technology",
    link: "",
  },
  {
    img: "",
    title: "廖儀婷律師事務所",
    link: "",
  },
  {
    img: "",
    title: "北藝大文化資源學院",
    link: "",
  },
  {
    img: "",
    title: "北藝大博物館研究所",
    link: "",
  },
]);
</script>
<style lang="scss" scoped>
.project {
  &-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.5rem;
    row-gap: 40px;
  }
}
</style>
