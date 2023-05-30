<template>
  <div class="modal-card login">
    <header class="modal-card-head">
      <p class="modal-card-title">{{ modalTitle }}</p>
    </header>
    <div class="modal-card-content">
      <div class="authByOthers">
        <a href="/auth/" class="socialLogin">
          <Icon name="facebook" class="initial" />
        </a>
        <a href="/auth/" class="socialLogin">
          <Icon name="google" class="initial" />
        </a>
      </div>
      <form @submit="submitCheckForm" method="post">
        <section class="modal-card-form">
          <!-- 登入表單 Start-->
          <template v-if="modalType == 'login'">
            <div class="field">
              <label for="userEmail" class="field-title">信箱</label>
              <div class="field-input">
                <input
                  id="userEmail"
                  class=""
                  type="email"
                  placeholder="Aa123456@gmail.com"
                  name="userEmail"
                  v-model="email"
                />
              </div>
              <p v-if="emailWithError" class="field-error">請輸入email</p>
            </div>
            <div class="field">
              <label for="userPassword" class="field-title">密碼</label>
              <div class="field-input">
                <input
                  id="userPassword"
                  class=""
                  type="password"
                  placeholder="********"
                  name="userPassword"
                  v-model="password"
                  autocomplete="off"
                />
              </div>
              <p v-if="passwordWithError" class="field-error">請輸入密碼</p>
            </div>
          </template>
          <!-- 登入表單 End-->

          <!-- 註冊表單 Start -->
          <template v-if="modalType == 'register'">
            <div class="field">
              <label for="userName" class="field-title">使用者名稱</label>
              <div class="field-input">
                <input
                  id="userName"
                  class=""
                  type="text"
                  placeholder="Aa123456"
                  name="userEName"
                  v-model="userName"
                />
              </div>
              <p v-if="userNameWithError" class="field-error">
                請輸入使用者名稱
              </p>
            </div>
            <div class="field">
              <label for="userEmail" class="field-title">信箱</label>
              <div class="field-input">
                <input
                  id="userEmail"
                  class=""
                  type="email"
                  placeholder="Aa123456@gmail.com"
                  name="userEmail"
                  v-model="email"
                />
              </div>
              <p v-if="emailWithError" class="field-error">請輸入email</p>
            </div>
            <div class="field">
              <label for="userPassword" class="field-title">密碼</label>
              <div class="field-input">
                <input
                  id="userPassword"
                  class=""
                  type="password"
                  placeholder="********"
                  name="userPassword"
                  v-model="password"
                />
              </div>
              <p v-if="passwordWithError" class="field-error">請輸入密碼</p>
            </div>
          </template>
          <!-- 註冊表單 End -->

          <!-- Forgot Pwd Start -->
          <div class="forgotPwd" v-if="modalType == 'login'">
            <a href="#">忘記密碼？</a>
          </div>
          <!-- Forgot Pwd End -->

          <!-- Submit Button Start -->
          <div class="reg_login_button">
            <button type="submit" class="btn submitBtn">
              立即{{ modalTitle }}
            </button>
          </div>
          <!-- Submit Button End -->

          <!-- Toggle Login/Register Start -->
          <div class="modal-card-form-bottom">
            {{ modalType == "login" ? "尚未有帳號？" : "已有帳號？" }}
            <a
              href="#"
              v-if="modalType == 'login'"
              @click.prevent="registerClick"
              >立即註冊</a
            >
            <a
              href="#"
              v-if="modalType == 'register'"
              @click.prevent="loginClick"
              >立即登入</a
            >
          </div>
          <!-- Toggle Login/Register End -->
        </section>
      </form>
    </div>
  </div>
</template>
<script setup>
// IMPORT NECESSARY
import { ref, computed } from "vue";
// VARIABLE NECESSARY
const props = defineProps({
  modalType: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["loginModalSubmit", "update:modalType"]);

// IMPORT COMPONENTS
import Icon from "@components/Base/Icon.vue";

// DATA
const userName = ref("");
const email = ref("");
const password = ref("");
const repeatPassword = ref("");
const errorMsg = ref("");
// 預設 提示錯誤圍觀關閉
const userNameWithError = ref(null);
const emailWithError = ref(null);
const passwordWithError = ref(null);
const repeatPasswordWithError = ref(null);

const modalTitle = computed(() => {
  if (props.modalType == "login") {
    return "登入";
  }
  if (props.modalType == "register") {
    return "註冊";
  }
});
console.log("Modal Type", props.modalType);

// METHODS
// (1)
const loginClick = () => {
  emit("update:modalType", "login");
  console.log("loginClick", props.modalType);
  // props.modalType = "login";
};
//(2)
const registerClick = () => {
  emit("update:modalType", "register");
  console.log("registerClick", props.modalType);
  // props.modalType = "register";
};
// (3) 檢查送出表單
const submitCheckForm = async (event) => {
  event.preventDefault();

  userNameWithError.value = false;
  emailWithError.value = false;
  passwordWithError.value = false;
  repeatPasswordWithError.value = false;

  // 基本驗證：是否都有填寫必填資料
  if (props.modalType == "login") {
  }
  // 基本驗證：是否都有填寫必填資料
  if (props.modalType == "register") {
    console.log("Register validation Start");
    if (!userName.value) {
      userNameWithError.value = true;
      console.log("userName is empty. ", userNameWithError.value);
      return;
    }
    if (!email.value) {
      emailWithError.value = true;
      console.log("email is empty. ", emailWithError.value);
      return;
    }
    if (!password.value) {
      passwordWithError.value = true;
      console.log("password is empty. ", passwordWithError.value);
      return;
    }

    // if (repeatPassword.value !== password.value) {
    //  repeatPasswordWithError.value = true;
    //console.log("repeatPassword is not the same. ", repeatPassword.value);
    //
    // }
  }

  emit("loginModalSubmit", {
    modalType: props.modalType,
    username: userName.value,
    email: email.value,
    password: password.value,
  });
  console.log("login modal emit");
};
</script>

<style lang="scss" scoped>
.modal-card {
  &-head {
    text-align: center;
  }
  &-title {
    @extend .txt-headline3;
    color: $black;
  }
  &-content {
    padding-top: 24px;
    .authByOthers {
      display: flex;
      justify-content: center;
      gap: 1rem;
      .socialLogin {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border: 1px solid $primary;
        border-radius: 50%;
      }
    }
    form {
      margin-top: 24px;
    }
    .forgotPwd {
      @extend %base-text-style;
      text-align: end;
      a {
        color: $gray03;
      }
    }
    .reg_login_button {
      margin-top: 1rem;
      margin-bottom: 1.5rem;
    }
  }
  &-form {
    .field {
      &-title {
        margin-bottom: 8px;
        color: $gray02;
      }
      &-input {
        position: relative;
        padding: 0.5rem;
        background-color: $white;
        border: 1px solid $primary;
        display: flex;
        align-items: center;
        input {
          width: 100%;
          padding: 0 1rem;
          border: none;
        }
      }
      &-error {
        color: $alert;
      }
    }
    &-bottom {
      display: flex;
      align-items: center;
      @extend %base-text-style;
      color: $gray03;
    }
  }
}
</style>
