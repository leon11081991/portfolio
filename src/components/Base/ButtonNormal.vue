<template>
  <button
    class="btn style-contrast"
    @click.prevent="openPreview"
    :class="{
      inactive: !store.state.post.postCoverFileURL,
    }"
  >
    預覽圖片
  </button>
</template>
<script>
export default {
  Name: "ButtonNormal",
  props: {
    type: {
      type: [String],
      required: true,
    },
    text: {
      type: [String, Number],
    },
  },
};
</script>
<style lang=""></style>
