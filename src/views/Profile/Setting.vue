<template>
  <div class="setting">
    <SectionHeading heading="Change Password"></SectionHeading>
    <div class="profile-info">
      <div class="profile-field">
        <label class="profile-field-title">Email</label>
        <div class="profile-field-input admin-badge disabled">
          <input id="email" type="text" name="email" v-model="email" />
        </div>
      </div>
      <div class="profile-field">
        <label class="profile-field-title">Password</label>
        <div class="profile-field-input">
          <input id="password" type="password" name="password" />
        </div>
      </div>
      <div class="profile-field">
        <label class="profile-field-title">Change Password</label>
        <div class="profile-field-input">
          <input id="password" type="password" name="password" />
        </div>
      </div>
      <div class="profile-action">
        <button @click.prevent="" class="btn">Save</button>
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

const email = computed(() => store.state.user.profileEmail);

onMounted(() => {
  console.log("(Setting.vue) --- ON MOUNTED");
});
</script>

<style lang="scss" scoped>
.profile-info {
  display: flex;
  flex-direction: column;
  max-width: 494px;
}
.profile-action {
  display: flex;
  justify-content: flex-end;
}
</style>
