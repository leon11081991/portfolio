<template>
  <div class="container">
    <div class="registrationLoginModal">
      <LoginModal
        @loginModalSubmit="loginModalSubmit"
        v-model:modalType.sync="modalType"
      ></LoginModal>
    </div>
  </div>
</template>
<script setup>
// IMPORT
import { ref } from "vue";
import { useRouter } from "vue-router";
// IMPORT COMPONENT
import LoginModal from "@components/Modal/LoginModal.vue";
// IMPORT FIREBASE
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { db, auth } from "@/firebase/firebaseInit";

// DATA
const router = useRouter();
const modalType = ref("login");

// METHOD
const loginModalSubmit = async (data) => {
  // 登入
  if (data.modalType == "login") {
    console.log("login data", data);
    // 使用者登入
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // 跳轉回首頁
        router.push({ name: "Home" });
      })
      .catch((error) => {
        console.log("Login error.");
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  // 註冊
  if (data.modalType == "register") {
    console.log("register data", data);
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
</script>
<style lang="scss" scoped>
.registrationLoginModal {
  position: relative;
  padding: 56px;
  border: 1px solid $primary;
  background: $white;
  z-index: $login_zIndex;
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
    //background: $primary;
    z-index: -1;
  }
}
</style>
