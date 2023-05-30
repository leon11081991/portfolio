<template>
  <div>
    <Loading v-if="isUploading" />
    <div class="mainContent" :class="route.name">
      <section class="page-section page-container">
        <CoverPreviewModal v-if="postCoverPreview" />
        <div class="create-info">
          <div class="create-field">
            <input
              class="create-field-input"
              type="text"
              placeholder="文章標題..."
              v-model="postTitle"
            />
            <p>{{ store.state.post.postPublishDate }}</p>
          </div>

          <div class="upload-file">
            <label for="post-photo" class="upload-file-title"
              >封面圖片上傳</label
            >
            <div class="upload-file-input">
              <input
                id="post-photo"
                type="file"
                ref="postPhoto"
                accept=".png, .jpg, .jpeg"
                @change="coverFileChange"
              />
            </div>

            <span class="upload-file-select"
              >已選擇檔案：{{ postCoverPhotoName }}</span
            >
            <div class="upload-file-action">
              <button
                @click.prevent="openPreview"
                :class="{
                  inactive: !store.state.post.postCoverFileURL,
                }"
                class="btn style-contrast"
              >
                預覽圖片
              </button>
            </div>
          </div>
        </div>

        <div :class="{ invisible: !error }" class="error-msg">
          <p class="error-msg-txt">!!!{{ errorMsg }}!!!</p>
        </div>

        <div class="editor">
          <QuillEditor
            v-model:content="postHTML"
            contentType="html"
            :options="editorOptions"
            :toolbar="toolbarOptions"
            :modules="modules"
          />
        </div>

        <div class="create-action">
          <button @click.prevent="updatePost" class="btn">更新修改</button>
          <router-link :to="{ name: 'PostPreview' }" class="btn style-contrast"
            >預覽修改</router-link
          >
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// IMPORT NECESSARY
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { router } from "@/router/index";
// VARIABLE NECESSARY
const store = useStore();
const route = useRoute();

// IMPORT COMPONENT
import Loading from "@components/Base/Loading.vue";
import CoverPreviewModal from "@components/Modal/CoverPreviewModal.vue";

// IMPORT QUILL
import { QuillEditor } from "@vueup/vue-quill";
import BlotFormatter from "quill-blot-formatter";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

// IMPORT FIREBASE
import {
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { ref as reference } from "firebase/storage";
import { db, auth } from "@/firebase/firebaseInit";
import { doc, collection, addDoc, setDoc } from "firebase/firestore";
// Create a root reference
const storage = getStorage();

// DATA
const isUploading = ref(null);
const routeID = ref(null);
const currentPost = ref(null);
const error = ref(null);
const errorMsg = ref(null);
const postPhoto = ref(null);
const coverFile = ref(null);
// QUILL DATA
const toolbarOptions = {
  container: [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["link", "image", "video"],
    ["clean"], // remove formatting button
  ],
  handlers: {
    image: function image() {
      const quill = this.quill;
      const input = document.createElement("input");

      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.click();

      input.onchange = async () => {
        const file = input.files[0];

        // Save current cursor state 游標的狀態(為了插入圖片時所在的位置)
        const range = quill.getSelection(true);

        // 插入暫時的loading圖片
        quill.insertEmbed(
          range.index,
          "image",
          "https://cdn.dribbble.com/users/1341307/screenshots/5377324/morph_dribbble.gif"
        );
        // Move cursor to right side of image (easier to continue typing)
        quill.setSelection(range.index + 1);

        // Create a Firebase Storage child reference
        const storageRef = reference(
          storage,
          `documents/postPhotos/${file.name}`
        );
        console.log(storageRef);
        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        // https://firebase.google.com/docs/storage/web/upload-files#monitor_upload_progress
        uploadBytesResumable(storageRef, file).on(
          "state_changed",
          (snapshot) => {
            // console.log("uploadTask", uploadTask);
            // console.log("snapshot", snapshot);
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            // Handle unsuccessful uploads
            console.log("error", error);
          },
          async () => {
            // Handle successful uploads on complete
            await getDownloadURL(storageRef).then((downloadURL) => {
              console.log("Get PhotoURL: ", downloadURL);
              // Remove placeholder image
              quill.deleteText(range.index, 1);
              // 將storage中的圖片連結，插入編輯器裡
              quill.insertEmbed(range.index, "image", downloadURL);
            });
          }
        );
      };
    },
  },
};
const editorOptions = {
  theme: "snow",
  placeholder: "文章內容...",
};
const modules = {
  name: "blotFormatter",
  module: BlotFormatter,
  options: {},
};

const profileId = computed(() => store.state.user.profileId);
const postCoverPhotoName = computed(() => store.state.post.postCoverName);
const postCoverPreview = computed(() => store.state.post.postCoverPreview);
const postTitle = computed({
  get: () => {
    return store.state.post.postTitle;
  },
  set: (payload) => {
    store.commit("updatePostTitle", payload);
  },
});
const postHTML = computed({
  get: () => {
    return store.state.post.postHTML;
  },
  set: (payload) => {
    store.commit("newPost", payload);
  },
});

onMounted(async () => {
  routeID.value = route.params.postID;
  currentPost.value = await store.state.post.postPosts.filter((post) => {
    return post.postID === routeID.value;
  });
  store.commit("setPostState", currentPost.value[0]);
});

// METHODS
// (1) 更換上傳圖片名稱及預覽
const coverFileChange = () => {
  coverFile.value = postPhoto.value.files[0];
  //console.log(URL.createObjectURL(file.value));
  const coverFileName = coverFile.value.name;
  store.commit("fileNameChange", coverFileName);
  store.commit("createFileURL", URL.createObjectURL(coverFile.value));
};
// (2) 開啟預覽彈窗
const openPreview = () => {
  store.commit("openPhotoPreview");
};
// (3) 更新修改
const updatePost = () => {};
</script>

<style lang="scss" scoped>
.error-msg {
  &-txt {
    @extend .txt-headline4;
    color: $alert;
  }
}

.upload {
  &-file {
    position: relative;
    display: flex;
    align-items: center;
    &-title {
      @extend .btn;
      //flex: 1;
    }
    &-input {
      display: none;
    }
    &-select {
      flex: 1;
      margin-left: 1rem;
      @extend .txt-headline5;
      color: $gray03;
    }
    &-action {
      //flex: 1;
    }
  }
}
//.upload-file {

//  align-items: center;

//  .upload-field,
//  .upload-action {
//    flex: 1;
//  }
//}

.create-action {
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
}
</style>
