<template>
  <div class="profile-aside" v-if="route.matched[0].path == '/profile'">
    <nav class="profile-aside">
      <ul class="profile-aside-list">
        <li class="profile-aside-item">
          <router-link
            class="profile-aside-item-link"
            :to="{ name: 'Profile' }"
          >
            <Icon name="profile" />
            <span>Profile</span>
          </router-link>
        </li>
        <li class="profile-aside-item">
          <router-link
            class="profile-aside-item-link"
            :to="{ name: 'Setting' }"
          >
            <Icon name="setting" />
            <span>Setting</span>
          </router-link>
        </li>
        <li v-if="admin" class="profile-aside-item">
          <router-link class="profile-aside-item-link" :to="{ name: 'Admin' }">
            <Icon name="admin" />
            <span>Admin</span>
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
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
// VARIABLE NECESSARY
const route = useRoute();
const store = useStore();
const admin = computed(() => store.state.user.profileAdmin);

defineEmits(["clickSignOut"]);

// IMPORT COMPONENTS
import Icon from "@/components/Base/Icon.vue";
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
