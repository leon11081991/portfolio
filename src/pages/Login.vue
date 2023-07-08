<template>
  <div class="web_wrapper" :class="$route.name">
    <BackgroundLayout />
    <div class="container" :class="$route.name === 'Login' ? 'login' : ''">
      <Logo class="login"></Logo>
      <div class="registrationLoginModal">
        <LoginModal
          @loginModalSubmit="loginModalSubmit"
          v-model:modalType.sync="modalType"
        ></LoginModal>
      </div>
    </div>
  </div>
</template>

<script setup>
// IMPORT NECESSARY
import { ref, onMounted } from "vue";
import { router } from "@/router/index";
import { useStore } from "vuex";
// VARIABLE NECESSARY
const store = useStore();

// IMPORT COMPONENT
import Logo from "@components/Base/Logo.vue";
import LoginModal from "@components/Modal/LoginModal.vue";
import BackgroundLayout from "@components/Layout/BackgroundLayout.vue";

// IMPORT FIREBASE
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { db, auth } from "@/firebase/firebaseInit";

// DATA
const modalType = ref("login");

// METHODS
// (1)
const loginModalSubmit = async (data) => {
  // 登入
  if (data.modalType == "login") {
    console.log("login data", data);
    // 使用者登入
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        console.log("Signed in");
        const user = userCredential.user;
        console.log(user);
        // 跳轉回首頁
        router.replace({ name: "Home" });
      })
      .catch((error) => {
        console.log("Login error.");
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode == "auth/wrong-password") {
          console.log("密碼錯誤");
        }
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  // 註冊
  if (data.modalType == "register") {
    //console.log("register data", data);
    try {
      // 建立使用者
      await createUserWithEmailAndPassword(auth, data.email, data.password);

      // 新增註冊的使用者資料到 db
      // https://firebase.google.com/docs/firestore/manage-data/add-data#add_a_document
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        username: data.username,
        email: data.email,
        password: data.password,
      });
      console.log("Register success");
      // 跳轉回首頁
      router.push({ name: "Home" });
    } catch (error) {
      console.log("Register error.");
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    }
  }
};

onMounted(() => {
  // 讀取頁面關閉
  store.state.loading = false;
});
</script>

<style lang="scss" scoped>
.login {
  &.container {
    z-index: $login_zIndex;
  }
}
.registrationLoginModal {
  position: relative;
  padding: 56px;
  border: 1px solid $primary;
  background: $white;

  max-width: 474px;
  margin-left: auto;
  margin-right: auto;
  &::after {
    display: block;
    content: "";
    position: absolute;
    bottom: -25px;
    right: -25px;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: $primary;
  }
}
</style>
