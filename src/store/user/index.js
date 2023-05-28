import { doc, getDoc, updateDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { db, auth } from "@/firebase/firebaseInit";
import { router } from "@/router/index";

export const user = {
  state() {
    return {
      user: null,
      profileAdmin: null,
      profileUsername: null,
      profileEmail: null,
      profileId: null,
      profileInitial: null,
    };
  },
  mutations: {
    updateUser(state, payload) {
      state.user = payload;
    },
    // 該使用者是不是 admin
    setProfileAdmin(state, payload) {
      state.profileAdmin = payload;
      //console.log(state.profileAdmin);
    },
    // 將db中的使用者資料，儲存在個人資料中
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileUsername = doc.data().username;
      state.profileEmail = doc.data().email;
      //console.log("state.profileId", state.profileId);
      //console.log("state.profileUsername", state.profileUsername);
      //console.log("state.profileEmail", state.profileEmail);
    },
    setProfileInitial(state) {
      state.profileInitial = state.profileUsername.match(/(\b\S)?/g).join("");
    },
    // 修改個人資料頁面，更新 username
    changeUsername(state, payload) {
      state.profileUsername = payload;
    },
  },
  getters: {},
  actions: {
    // 利用目前登入的使用者ID, 從db中找出資料
    async getCurrentUser({ commit }, currentUser) {
      const dataBase = doc(db, "users", currentUser.uid);
      const dbResults = await getDoc(dataBase);
      //console.log("dataBase", dataBase);
      //console.log("dbResults", dbResults.data());
      commit("setProfileInfo", dbResults);
      commit("setProfileInitial");

      // 確認該使用者是不是 admin
      const token = await currentUser.getIdTokenResult();
      const admin = await token.claims.admin; // return true or false;
      //console.log("Is admin?", admin);
      commit("setProfileAdmin", admin);
    },
    // 更新使用者資料
    async updateUserSetting({ commit, state }) {
      const dataBase = doc(db, "users", state.profileId);
      await updateDoc(dataBase, {
        username: state.profileUsername,
      });
      //const dbResults = await getDoc(dataBase);
      //console.log("updateUserSetting dbResults", dbResults.data());
      commit("setProfileInitial");
    },
    // 登出使用者
    signOutCurrentUser({ commit, rootState }) {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          //window.location.reload();

          // 跳轉回首頁
          router.push({ name: "Home" });
        })
        .catch((error) => {
          // An error happened.
        });
    },
  },
};
