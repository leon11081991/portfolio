<template>
  <aside class="page-aside">
    <Breadcrumb></Breadcrumb>

    <PageHeading
      v-if="route.name !== 'Post'"
      :currentRouteName="currentRouteName"
    ></PageHeading>

    <div
      v-if="admin && $route.name == 'Article' && !$route.params.postID"
      class="create-post"
    >
      <router-link :to="{ name: 'CreatePost' }" class="btn"
        >新增文章
        <Icon name="plus" />
      </router-link>
    </div>

    <ProfileAside
      v-if="route.matched[0].path == '/profile'"
      @clickSignOut="handleSignOut"
    ></ProfileAside>
  </aside>
</template>

<script setup>
// IMPORT NECESSARY
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
// VARIABLE NECESSARY
const store = useStore();
const route = useRoute();

// IMPORT COMPONENTS
import Breadcrumb from "@components/Aside/Breadcrumb.vue";
import PageHeading from "@components/Aside/PageHeading.vue";
import ProfileAside from "@components/Aside/ProfileAside.vue";
import Icon from "@components/Base/Icon.vue";

// DATA
const admin = computed(() => store.state.user.profileAdmin);
const currentRouteName = computed(() => route.name.toUpperCase());

// METHODS
// (1) 登出
const handleSignOut = () => {
  store.dispatch("signOutCurrentUser");
};
</script>

<style lang="scss" scoped>
.page-aside {
  display: flex;
  flex-direction: column;
}
.create-post {
  display: inline-flex;
  .btn {
    display: flex;
    align-items: center;
  }
}
</style>
