<template>
  <li class="articles-item">
    <div class="articles-item-inner">
      <div class="card-top">
        <div class="folder">
          <Folder class="icon" />
        </div>
        <div class="superuser">
          <Edit class="icon edit" />
          <Delete class="icon delete" />
        </div>
      </div>
      <h4 class="card-title">{{ post.articleTitle }}</h4>
      <div class="card-content">
        <p>{{ post.articleContent }}</p>
        <router-link to="#" class="card-link">HERE</router-link>
      </div>
    </div>
  </li>
</template>

<script setup>
//import
import Folder from "@assets/icons/folder.svg";
import Edit from "@assets/icons/edit-regular.svg";
import Delete from "@assets/icons/trash-regular.svg";
// data
const props = defineProps(["post"]);
</script>

<style lang="scss" scoped>
.articles-item {
  position: relative;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
  &-inner {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 2rem 1.5rem;
    background-color: $secondary2;

    .card {
      &-top {
        display: flex;
        justify-content: space-between;
        .folder {
          .icon {
            width: 50px;
            height: 50px;
            margin-left: -8px;
          }
        }
        .superuser {
          position: absolute;
          top: 5px;
          right: 5px;
          z-index: 99;
          display: flex;
          .icon {
            transition: all 0.5s ease-in-out;
            cursor: pointer;
            &:hover {
              background-color: $secondary;
              border-radius: 3px;
              color: #64ffda;
            }
          }
        }
      }
      &-title {
        margin: 0.5rem 0 1rem 0;
      }
      &-content {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      &-link {
        display: inline-flex;
        align-items: center;
        margin-top: auto;
      }
    }
  }
}
</style>
