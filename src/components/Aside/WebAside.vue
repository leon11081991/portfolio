<template>
  <aside class="web_aside">
    <div class="web_aside__inner">
      <div class="socialMedia">
        <ul class="socialMedia-list">
          <li
            class="socialMedia-item"
            v-for="media in store.state.aside.socialMedia"
          >
            <a :href="media.link" target="_blank"></a>
          </li>
        </ul>
      </div>
      <div class="login" v-if="!user">
        <router-link :to="{ name: 'Login' }">Login</router-link>
      </div>
      <div class="profile" ref="profile" v-else>
        <div @click="toggleProfileMenu" class="profileInitial">
          <UserIcon class="icon" />
        </div>
        <!-- <ProfileMenu v-if="profileMenu" @signOut="clickSignOut"></ProfileMenu> -->
        <div class="profile-menu" v-if="profileMenu">
          <div class="profile-menu-inner">
            <div class="info">
              <span class="initial">{{ store.state.user.profileInitial }}</span>
              <div class="info-details">
                <p class="userName">{{ store.state.user.profileUsername }}</p>
                <p class="email">{{ store.state.user.profileEmail }}</p>
              </div>
            </div>
            <ul class="options">
              <li class="option">
                <router-link class="option-link" :to="{ name: 'Admin' }">
                  <AdminIcon class="icon" />
                  <span>Admin</span>
                </router-link>
              </li>
              <li class="option">
                <router-link class="option-link" :to="{ name: 'Profile' }">
                  <ProfileIcon class="icon" />
                  <span>Profile</span>
                </router-link>
              </li>
              <li class="option">
                <router-link class="option-link" to="#">
                  <SettingIcon class="icon" />
                  <span>Setting</span>
                </router-link>
              </li>
              <li class="option">
                <div @click="clickSignOut" class="option-link">
                  <SignOutIcon class="icon" />
                  <span>Sign out</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
<script setup>
// IMPORT ICON
import UserIcon from "@assets/icons/user.svg";
import AdminIcon from "@assets/icons/admin.svg";
import ProfileIcon from "@assets/icons/profile.svg";
import SettingIcon from "@assets/icons/setting.svg";
import SignOutIcon from "@assets/icons/signout.svg";
// IMPORT
import { ref, computed } from "vue";
import { useStore } from "vuex";
import ProfileMenu from "@components/Aside/ProfileMenu.vue";
// IMPORT FIREBASE
import { signOut } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "@/firebase/firebaseInit";

// DATA
const store = useStore();
const profileMenu = ref(null);

// METHOD
const toggleProfileMenu = (e) => {
  profileMenu.value = !profileMenu.value;
};

const clickSignOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      window.location.reload();
    })
    .catch((error) => {
      // An error happened.
    });
};

// COMPUTED
const user = computed(() => store.state.user.user);
console.log(user.value);
</script>
<style lang="scss" scoped>
.web_aside {
  position: fixed;
  top: 0;
  right: 0;
  width: $aside_w-desktop * 1px;
  height: 100%;
  z-index: $aside_zIndex;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 1px;
    height: 100%;
    background: $primary;
  }
  &__inner {
    position: relative;
    height: 100%;
    padding: $header_h-desktop * 1px 0 $footer_h-desktop * 1px 0;
  }
}
.socialMedia {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &-list {
  }
  &-item {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid $primary;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}

.login {
  position: absolute;
  bottom: 0;
  right: 0;
  width: $aside_w-desktop * 1px;
  height: $footer_h-desktop * 1px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}

.profile {
  position: absolute;
  bottom: 0;
  right: 0;
  width: $aside_w-desktop * 1px;
  height: $footer_h-desktop * 1px;
  .profileInitial {
    position: absolute;
    bottom: 50%;
    right: 50%;
    transform: translate(50%, 50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: $white;
    .icon {
      width: 40px;
      height: 40px;
      margin: 0;
      padding: 0;
      fill: $primary;
    }
  }
}

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
    .userName {
    }
    .email {
    }
  }

  .options {
    margin-top: 1rem;
  }
  .option {
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
