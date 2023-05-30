<template>
  <div class="profile-aside" v-if="route.matched[0].path == '/profile'">
    <nav class="profile-aside">
      <ul class="profile-aside-list">
        <li
          class="profile-aside-item"
          v-for="(aside, index) in profileAside"
          :key="aside.pathName"
        >
          <router-link
            class="profile-aside-item-link"
            :to="{ name: aside.pathName }"
          >
            <Icon :name="aside.icon" />
            <span>{{ aside.title }}</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="sign-out">
      <button @click="$emit('clickSignOut')" class="btn style-contrast">
        Sign Out
      </button>
    </div>
  </div>
</template>

<script setup>
// IMPORT NECESSARY
import { ref } from "vue";
import { useRoute } from "vue-router";
// VARIABLE NECESSARY
const route = useRoute();
defineEmits(["clickSignOut"]);

// IMPORT COMPONENTS
import Icon from "@components/Base/Icon.vue";

// DATA
const profileAside = ref([
  {
    pathName: "Profile",
    icon: "profile",
    title: "Profile",
  },
  {
    pathName: "Setting",
    icon: "setting",
    title: "Setting",
  },
  {
    pathName: "Admin",
    icon: "admin",
    title: "Admin",
  },
]);
</script>

<style lang="scss" scoped>
.profile-aside {
  display: flex;
  flex-direction: column;
  flex: 1;
  &-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  &-item {
    &-link {
      display: flex;
      align-items: center;
      color: rgba($primary, 0.3);
      transition: all 0.5s ease-in;
      .icon {
        fill: rgba($primary, 0.3);
        transition: all 0.5s ease-in;
      }
      &:hover {
        color: rgba($primary, 1);
        .icon {
          fill: rgba($primary, 1);
        }
      }

      //&.current {
      //  color: rgba($primary, 1);
      //  .icon {
      //    fill: rgba($primary, 1);
      //  }
      //}
    }
    .router-link-exact-active {
      color: rgba($primary, 1);
      .icon {
        fill: rgba($primary, 1);
      }
    }
  }
}
</style>
