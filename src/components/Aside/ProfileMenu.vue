<template>
  <div class="profile-menu">
    <div class="profile-menu-inner">
      <div class="info">
        <span class="initial">{{ store.state.user.profileInitial }}</span>
        <div class="info-details">
          <p class="userName">{{ store.state.user.profileUsername }}</p>
          <p class="email">{{ store.state.user.profileEmail }}</p>
        </div>
      </div>
      <ul class="options">
        <li v-if="admin" class="option">
          <router-link class="option-link" :to="{ name: 'Admin' }">
            <Icon name="admin" />
            <span>Admin</span>
          </router-link>
        </li>
        <li class="option">
          <router-link class="option-link" :to="{ name: 'Profile' }">
            <Icon name="profile" />
            <span>Profile</span>
          </router-link>
        </li>
        <li class="option">
          <router-link class="option-link" :to="{ name: 'Setting' }">
            <Icon name="setting" />
            <span>Setting</span>
          </router-link>
        </li>
        <li class="option">
          <div @click="$emit('clickSignOut')" class="option-link">
            <Icon name="signout" />
            <span>Sign out</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// IMPORT NECESSARY
import { computed } from "vue";
import { useStore } from "vuex";
// VARIABLE NECESSARY
defineEmits(["clickSignOut"]);
const store = useStore();

// IMPORT COMPONENTS
import Icon from "@components/Base/Icon.vue";

const admin = computed(() => store.state.user.profileAdmin);
console.log("admin", admin);
</script>

<style lang="scss" scoped>
.profile-menu {
  position: absolute;
  bottom: $footer_h-desktop * 1px;
  right: 0;
  background: $primary;
  color: $white;
  &-inner {
    padding: 24px 40px;
  }
  .info {
    position: relative;
    padding-bottom: 1rem;
    display: flex;
    grid-template-areas:
      "initial userName"
      ". email";
    &::after {
      position: absolute;
      content: "";
      bottom: 0;
      width: 100%;
      height: 1px;
      background: rgba($white, 0.3);
    }
    &-details {
      flex: 1;
      margin-left: 2rem;
    }
    .initial {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba($white, 0.3);
    }
  }
  .option {
    margin-top: 1rem;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
    &-link {
      display: flex;
      align-items: center;
      color: $white;
    }
    .icon {
      fill: $white;
    }
  }
}
</style>
