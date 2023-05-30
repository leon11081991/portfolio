<template>
  <div class="profile">
    <div class="profile-initials">
      <div class="initial"></div>
      <div class="controls">
        <span class="dele">
          <DeleteIcon class="icon" />
        </span>
        <span class="edit">
          <EditIcon class="icon" />
        </span>
      </div>
    </div>
    <div class="profile-info">
      <SectionHeading heading="Personal Information"></SectionHeading>
      <section class="profile-detail">
        <div class="profile-field">
          <label class="profile-field-title">User Role</label>
          <div v-if="admin" class="profile-field-input admin-badge disabled">
            <span>Admin</span>
          </div>
        </div>
        <div class="profile-field">
          <label for="username" class="profile-field-title">User Name</label>
          <div class="profile-field-input">
            <input
              id="username"
              type="text"
              name="username"
              v-model="username"
            />
          </div>
        </div>
        <div class="profile-field">
          <label for="email" class="profile-field-title">Email</label>
          <div class="profile-field-input admin-badge disabled">
            <input id="email" type="text" name="email" v-model="email" />
          </div>
        </div>
      </section>
      <div class="profile-update">
        <button class="btn" @click.prevent="updateProfile">Save</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// IMPORT NECESSARY
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
// VARIABLE NECESSARY
const store = useStore();

// IMPORT COMPONENTS
import SectionHeading from "@components/Base/SectionHeading.vue";
import DeleteIcon from "@assets/svg/delete.svg";
import EditIcon from "@assets/svg/edit.svg";

// DATA
const username = computed({
  get: () => {
    return store.state.user.profileUsername;
  },
  set: (payload) => {
    store.commit("changeUsername", payload);
  },
});
const email = computed(() => store.state.user.profileEmail);
const admin = computed(() => store.state.user.profileAdmin);
console.log("admin", admin);

// METHODS
// (1) 更新使用者設定
const updateProfile = () => {
  store.dispatch("updateUserSetting");
};

onMounted(() => {
  console.log("(Profile.vue) --- ON MOUNTED");
});
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: row;
  gap: 55px;

  &-initials {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    .initial {
      width: 160px;
      height: 160px;
      border: 1px solid $primary;
      border-radius: 50%;
      background: $primary;
    }
    .controls {
      display: flex;
      gap: 2rem;
      .dele,
      .edit {
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid $primary;
        border-radius: 50%;
      }
      .icon {
        fill: $primary;
      }
    }
  }
  &-info {
    flex: 1;
  }
  &-detail {
    margin-bottom: 40px;
    .icon {
      fill: $primary;
    }
  }
  &-update {
    display: flex;
    justify-content: end;
  }
}

.admin-badge {
  display: flex;
  align-items: center;
}
</style>
