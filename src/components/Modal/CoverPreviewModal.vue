<template>
  <div class="modal" ref="modal">
    <div class="modal-content">
      <Icon @click="closePreview" name="close" />
      <div class="preview-img">
        <div class="img_div">
          <img :src="postCoverPhoto" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// IMPORT NECESSARY
import { computed } from "vue";
import { useStore } from "vuex";
// VARIABLE NECESSARY
const store = useStore();

// IMPORT COMPONENTS
import Icon from "@components/Base/Icon.vue";

//DATA
const postCoverPhoto = computed(() => store.state.post.postCoverFileURL);

// METHODS
// (1) 關閉預覽彈窗
const closePreview = () => {
  store.commit("openPhotoPreview");
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: $bg_zIndex + 1;

  &-content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $white;
    height: 400px;
    width: 600px;
    border-radius: 8px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

    .icon {
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
    }

    .preview-img {
      width: 90%;
      margin-top: 1.5rem;

      .img_div {
        padding-bottom: calc($post-card-img_h/$post-card-img_w) * 100%;
      }
    }
  }
}
</style>
