<template>
  <li class="posts-item">
    <router-link
      :to="{ name: 'Post', params: { postID: post.postID } }"
      class="posts-item-inner"
    >
      <div class="post-info">
        <ul class="post-tags">
          <li v-for="(item, index) in post.tag" :key="index" class="tag">
            {{ item }}
          </li>
        </ul>
        <div class="post-title">
          <h3 class="post-title-txt">
            {{ post.postTitle }}
          </h3>
        </div>
        <div class="post-content">
          <div class="post-content-txt" v-html="post.postHTML"></div>
        </div>
      </div>
      <div class="post-img">
        <div class="img_div">
          <img :src="post.postCoverFileURL" alt="" />
        </div>
      </div>
      <div v-if="admin" @click.prevent="toggleSettingMenu" class="post-setting">
        <Icon name="dot-setting" />
        <div v-if="settingMenu" class="setting-menu">
          <ul class="setting-menu-list">
            <li @click="editPost" class="setting-menu-item edit">
              <Icon name="edit" />
              <p class="setting-menu-txt">編輯</p>
            </li>
            <li @click="deletePost" class="setting-menu-item dele">
              <Icon name="delete" />
              <p class="setting-menu-txt">刪除</p>
            </li>
          </ul>
        </div>
      </div>
    </router-link>
  </li>
</template>

<script setup>
// IMPORT NECESSARY
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
// VARIABLE NECESSARY
const store = useStore();
const router = useRouter();
const props = defineProps(["post"]);
console.log("router", router);

// IMPORT COMPONENTS
import Icon from "@components/Base/Icon.vue";
// DATA
const settingMenu = ref(false);
const admin = computed(() => store.state.user.profileAdmin);

// METHODS
// (1) 切換文章設定選單
const toggleSettingMenu = () => {
  settingMenu.value = !settingMenu.value;
};
// (2) 刪除文章
const deletePost = () => {
  store.dispatch("deletePost", props.post.postID);
};
const editPost = () => {
  router.push({ name: "EditPost", params: { postID: props.post.postID } });
};
</script>

<style lang="scss" scoped>
.posts-item {
  position: relative;
  &-inner {
    position: relative;
    display: grid;
    column-gap: 25px;
    grid-template-columns: minmax(auto, 405px) minmax(auto, 408px);
    &:hover {
      .post-title-txt {
        background-size: 100% 1px;
        transition: background-size 500ms ease-in-out;
      }
    }
  }
}

.post {
  &-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    .tag {
      padding: 2px 10px;
      background: $secondary02;
      border-radius: 8px;
      @extend .txt-s;
    }
  }
  &-title {
    display: inline-block;
    position: relative;
    margin-top: 1rem;
    margin-bottom: 1.5rem;

    &-txt {
      display: inline;
      @extend .txt-headline3;
      background-image: linear-gradient($primary, $primary);
      background-repeat: no-repeat;
      background-position: bottom left;
      background-size: 0% 1px;
      transition: background-size 500ms ease-in-out;
    }
  }
  &-content {
    &-txt {
      @extend .txt-s;
      color: $secondary01 !important;
      // 顯示內容最多為兩行，剩餘用...表示
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      & > * {
        @extend .txt-s;
        color: $secondary01 !important;
      }
    }
  }
  &-img {
    .img_div {
      padding-bottom: calc($post-card-img_h/$post-card-img_w) * 100%;
    }
  }
  &-setting {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 56px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background: rgba($primary, 0.6);
    & > .icon {
      position: absolute;
      width: 28px;
    }

    .setting-menu {
      position: absolute;
      top: 57px;
      right: -46px;
      z-index: 1;
      &-list {
        display: flex;
        flex-direction: column;
        border: 1px solid $primary;
      }
      &-item {
        position: relative;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        white-space: nowrap;
        background: $white;
        cursor: pointer;
        &:not(:last-child) {
          border-bottom: 1px solid $primary;
        }
        & > .icon {
          fill: $gray01;
        }
      }
      &-txt {
        color: $gray01;
      }
    }
  }
}
</style>
