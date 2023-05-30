<template>
  <div class="admin">
    <SectionHeading heading="Administration"></SectionHeading>
    <div class="admin-info">
      <div class="profile-field">
        <label for="addAdmin" class="profile-field-title"
          >Add admin by email</label
        >
        <div class="profile-field-input">
          <input
            id="addAdmin"
            type="text"
            name="addAdmin"
            v-model="adminEmail"
          />
        </div>
      </div>
      <p class="message">{{ functionMsg }}</p>
      <button @click.prevent="addAdminRole" class="btn">Submit</button>
    </div>
  </div>
</template>
<script>
// IMPORT NECESSARY
import { ref } from "vue";

// IMPORT FIREBASE FUNCTION
import { functions } from "@/firebase/firebaseInit";
import { httpsCallable } from "firebase/functions";

// IMPORT COMPONENTS
import SectionHeading from "@components/Base/SectionHeading.vue";

export default {
  name: "Admin",
  components: { SectionHeading },
  // `setup` 是專門用於composition API的特殊Hook
  setup() {
    const adminEmail = ref("");
    const functionMsg = ref(null);
    // 暴露 state 到模板
    return {
      adminEmail,
      functionMsg,
    };
  },
  mounted() {
    console.log("(Admin.vue) --- ON MOUNTED");
  },
  methods: {
    async addAdminRole() {
      // https://firebase.google.com/docs/functions/callable#call_the_function
      const addAdminRole = await httpsCallable(functions, "addAdminRole");
      const result = await addAdminRole({ email: this.adminEmail });
      // console.log(result.data);
      this.functionMsg = result.data.message;
    },
  },
};
</script>

<style lang="scss" scoped></style>
