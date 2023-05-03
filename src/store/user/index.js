import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "@/firebase/firebaseInit";

export const user = {
  state() {
    return {
      user: null,
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
    // 個人資料頁面，更改 username
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
    },
    // 更新使用者資料
    async updateUSerSetting({ commit, state }) {
      const dataBase = doc(db, "users", state.profileId);
      await updateDoc(dataBase, {
        username: state.profileUsername,
      });
      //const dbResults = await getDoc(dataBase);
      //console.log("updateUSerSetting dbResults", dbResults.data());
      commit("setProfileInitial");
    },
  },
};
