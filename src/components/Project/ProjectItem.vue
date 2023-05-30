<template>
  <li class="project-item">
    <a :href="project.link" class="project-item-link" target="_blank">
      <div class="project-img">
        <div class="filter">
          <Icon name="magnifier" class="initial" />
        </div>
        <div class="img_div">
          <img :src="project.projectCover" :alt="project.projectTitle" />
        </div>
      </div>
      <div class="project-title">{{ project.projectTitle }}</div>
    </a>
  </li>
</template>

<script setup>
// VARIABLE NECESSARY
const props = defineProps(["project"]);

// IMPORT COMPONENTS
import Icon from "@components/Base/Icon.vue";
</script>

<style lang="scss" scoped>
.project {
  &-item {
    &-link {
      &:hover {
        .project-title {
          &::before {
            width: 100%;
          }
        }
        .filter {
          opacity: 1;
        }
      }
    }
  }
  &-img {
    position: relative;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    .filter {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      opacity: 0;
      transition: opacity 0.4s ease-in;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 184, 0.6),
        rgba(0, 0, 184, 0.6)
      );
      .icon {
        height: 35px;
        width: 35px;
        color: $white;
      }
    }
    .img_div {
      padding-bottom: calc(229 / 405) * 100%;
    }
  }
  &-title {
    position: relative;
    display: inline-block;
    margin-top: 1rem;
    @extend .txt-headline3;
    line-height: 1.5;
    color: $primary;
    &::before {
      display: inline-block;
      position: absolute;
      bottom: 0;
      left: 0;
      content: "";
      height: 1px;
      width: 0%;
      background: $primary;
      transition: all 0.5s ease-in-out;
    }
  }
}
</style>
