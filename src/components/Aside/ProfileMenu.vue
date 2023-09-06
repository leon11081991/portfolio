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
</script>

<style lang="scss" scoped>
.profile-menu {
  position: fixed;
  bottom: $footer_h-desktop * 1px;
  //right: 0;
  background: $gray01;
  color: $white;
  border-radius: 24px 0px 0px 0px;
  z-index: $aside_zIndex + 1;

  right: -100%;
  transition: all 0.8s $easeInOutQuart;
  @include media-breakpoint-down(md) {
    background: $primary;
  }

  &-inner {
    padding: 24px 40px;
  }
  .info {
    position: relative;
    padding-bottom: 1rem;
    display: flex;
    //grid-template-areas:
    //"initial userName"
    //". email";
    @include media-breakpoint-down(md) {
      flex-direction: column;
      align-items: center;
    }
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
      max-width: 200px;

      .userName,
      .email {
        word-break: normal;
        white-space: pre-wrap;
        word-wrap: break-word;
      }
      @include media-breakpoint-down(lg) {
        max-width: unset;
      }

      @include media-breakpoint-down(md) {
        margin-left: unset;

        .userName,
        .email {
          text-align: center;
        }
      }
    }
    .initial {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba($white, 0.3);
      flex: 0 0 auto;
    }
  }
  .options {
    display: inline-flex;
    flex-direction: column;
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
      &:hover {
        cursor: pointer;
      }
    }
    .icon {
      fill: $white;
    }
  }

  &.webHeader {
    position: relative;
    bottom: unset;
    right: unset;

    .profile-menu-inner {
      padding: 30px 0;
    }
    .options {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      //justify-content: center;
      //gap: 1rem;
    }
  }
}
</style>
