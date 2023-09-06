<template>
  <div class="person-photo">
    <img class="person-photo-image" src="~@/assets/img/resume-photo.png" />
  </div>
  <div class="person-tags">
    <Tag v-for="(tag, index) in tags" :key="index" :tag="tag" />
  </div>
  <a :href="downloadLink" class="btn person-download" download="filename"
    >Download</a
  >
</template>

<script>
import Tag from "@/components/Resume/Tag.vue";

export default {
  Name: "Header",
  components: { Tag },
  computed: {
    currentResumeData() {
      return this.$store.state.resume.currentLanguage.data;
    },

    fullName() {
      const data = this.currentResumeData;
      const chName = data.name["chName"];
      const engName = data.name["engName"];
      return `${chName} ${engName}`;
    },

    position() {
      return this.currentResumeData.position;
    },
    tags() {
      return this.currentResumeData.tags;
    },
    downloadLink() {
      return this.currentResumeData.downloadLink;
    },
  },
};
</script>

<style lang="scss" scoped>
.person-photo {
  border-radius: 50%;
  //height: 176px;
  //width: 176px;
  overflow: hidden;

  position: relative;
  width: 100%;
  height: auto;

  @include media-breakpoint-down(lg) {
    width: auto;
  }

  &-image {
    max-width: 100%;
  }
}

.person-tags {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  gap: 12px;
  flex: 0 0 auto;
  @include media-breakpoint-down(lg) {
    margin: 0 2rem;
  }
  @include media-breakpoint-down(md) {
  }
}

.person-download {
  @include media-breakpoint-down(md) {
    margin-left: auto;
  }
  @include media-breakpoint-down(sm) {
    margin-left: initial;
  }
}
</style>
