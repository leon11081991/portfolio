<template>
  <div class="socialMedia">
    <ul class="socialMedia-list">
      <li
        class="socialMedia-item"
        v-for="social in socialList"
        :key="social.name"
      >
        <a :href="social.link" class="socialMedia-item-link" target="_blank">
          <Icon :name="social.name" class="initial" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
// IMPORT NECESSARY
import { computed } from "vue";
import { useStore } from "vuex";
// VARIABLE NECESSARY
const store = useStore();

// IMPORT COMPONENTS
import Icon from "@components/Base/Icon.vue";

// DATA
const socialList = computed(() => store.state.socialList);
</script>

<style lang="scss" scoped>
.socialMedia {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $white;
  &-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  &-item {
    &-link {
      height: 40px;
      width: 40px;
      border: 1px solid $primary;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s ease-in-out;
      .icon {
        transition: all 0.3s ease-in-out;
        color: $primary;
      }
      &:hover {
        background-color: $primary;
        .icon {
          color: $white;
        }
      }
    }
  }
  &.headerMenu {
    background: transparent;
    .socialMedia-list {
      flex-direction: row;
    }
    .socialMedia-item-link {
      border: 1px solid $white;
      .icon {
        color: $white;
      }
      &:hover {
        background-color: $white;
        .icon {
          color: $primary;
        }
      }
    }
  }
}
</style>
