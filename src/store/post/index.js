import {
  collection,
  query,
  getDocs,
  orderBy,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/firebase/firebaseInit";

export const post = {
  state() {
    return {
      postPosts: [],
      postLoaded: null,
      postTitle: "",
      postTags: [],
      postHTML: "",
      postCoverName: "",
      postCoverFileURL: null,
      postCoverPreview: null,
      postPublishDate: null,
      currentPost: null,
    };
  },
  mutations: {
    updatePostTitle(state, payload) {
      state.postTitle = payload;
      //console.log("updatePostTitle", state.postTitle);
    },
    newPost(state, payload) {
      state.postHTML = payload;
      //console.log("newPost", state.postHTML);
    },
    fileNameChange(state, payload) {
      state.postCoverName = payload;
    },
    createFileURL(state, payload) {
      state.postCoverFileURL = payload;
      // console.log(state.postCoverFileURL);
    },
    openPhotoPreview(state) {
      state.postCoverPreview = !state.postCoverPreview;
      // console.log(state.postCoverPreview);
    },
    postsLoadedStatus(state, payload) {
      state.postLoaded = payload;
    },
    filterPost(state, payload) {
      state.postPosts = state.postPosts.filter(
        (post) => post.postID !== payload
      );
    },
    setPostState(state, payload) {
      state.postTitle = payload.postTitle;
      state.postHTML = payload.postHTML;
      state.postCoverFileURL = payload.postCoverFileURL;
      state.postCoverName = payload.postCoverName;
    },
  },
  actions: {
    async getPosts({ state, commit }) {
      commit("postsLoadedStatus", false);
      const postQuery = await query(
        collection(db, "posts"),
        orderBy("timestamp", "desc")
      );
      const postQueryResult = await getDocs(postQuery);
      postQueryResult.forEach((doc) => {
        if (!state.postPosts.some((post) => post.postID === doc.id)) {
          const postData = {
            postID: doc.data().postID,
            postHTML: doc.data().postHTML,
            postCoverPhoto: doc.data().postCoverPhoto,
            postTitle: doc.data().postTitle,
            postDate: doc.data().date,
            postWriterID: doc.data().profileId,
            timestamp: doc.data().timestamp,
          };
          state.postPosts.push(postData);
        }
      });
      commit("postsLoadedStatus", true);
      //console.log("getPosts", state.postPosts);
    },
    async deletePost({ commit }, payload) {
      const getPost = await deleteDoc(doc(db, "posts", payload));
      commit("filterPost", payload);
    },
    async getCurrentPost({ state, dispatch }, currentPostID) {
      await dispatch("getPosts");
      //console.log("state.postPosts", state.postPosts);
      state.currentPost = await state.postPosts.filter((post) => {
        return post.postID === currentPostID;
      });
      console.log("action currentPost", state.currentPost);
    },
  },
};
