<template>
  <div class="mainContent">
    <section class="page-section page-container">
      <PageAside></PageAside>
      <div class="page-content">
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
          <div class="section-heading">
            <h3 class="section-heading-txt">Personal Information</h3>
          </div>
          <section class="profile-detail">
            <div class="profile-field">
              <label class="profile-field-title">User Role</label>
              <div class="profile-field-input admin-badge disabled">
                <AdminIcon class="icon" />
                <span>Admin</span>
              </div>
            </div>
            <div class="profile-field">
              <label for="username" class="profile-field-title"
                >User Name</label
              >
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
          <div class="profile-save">
            <button class="btn" @click.prevent="updateProfile">Save</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// IMPORT
import { ref, computed } from "vue";
import { useStore } from "vuex";

// IMPORT ICON
import AdminIcon from "@assets/icons/admin.svg";
import DeleteIcon from "@assets/icons/delete.svg";
import EditIcon from "@assets/icons/edit.svg";

// IMPORT COMPONENT
import PageAside from "@components/Aside/PageAside.vue";

// DATA
const store = useStore();
const username = computed({
  get: () => {
    return store.state.user.profileUsername;
  },
  set: (payload) => {
    store.commit("changeUsername", payload);
  },
});
const email = computed(() => store.state.user.profileEmail);

// METHOD
const updateProfile = () => {
  store.dispatch("updateUSerSetting");
};
</script>

<style lang="scss" scoped>
.page-content {
  display: flex;
  flex-direction: row;
  gap: 55px;
}

.profile-initials {
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
      border: 1px solid $primary;
      border-radius: 50%;
    }
    .icon {
      fill: $primary;
    }
  }
}

.profile-info {
  .section-heading {
    margin-bottom: 1rem;
    &-txt {
      @extend .txt-headline4;
    }
  }
}

.profile-detail {
  margin-bottom: 40px;
  .icon {
    fill: $primary;
  }
}

.admin-badge {
  display: flex;
  align-items: center;
}

.profile-save {
  display: flex;
  justify-content: end;
}
</style>
