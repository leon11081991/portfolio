<template>
  <SubTitle :text="languageLabel" />
  <section class="language-section">
    <section class="language-wrap">
      <Paragraph
        v-for="(language, index) in languages"
        :key="index"
        :mainText="language"
        class="language-line"
      />
    </section>
  </section>
</template>

<script>
import SubTitle from "@/components/Resume/SubTitle.vue";
import Paragraph from "@/components/Resume/Paragraph.vue";

export default {
  Name: "Language",
  components: { SubTitle, Paragraph },
  computed: {
    currentLanguage() {
      return this.$store.state.resume.currentLanguage;
    },
    languageLabel() {
      return this.currentLanguage.resumeLabels.language;
    },
    languages() {
      return this.currentLanguage.data.language;
    },
  },
};
</script>

<style lang="scss" scoped>
.language-section {
  margin-top: 1rem;
}

.language-wrap {
  display: flex;
  flex-wrap: wrap;
}

.language-line {
  position: relative;
  &:not(:first-child) {
    margin-left: 0.5rem;
  }
  &:not(:last-child) {
    margin-right: 1rem;
  }
  &:not(:last-child)::after {
    position: absolute;
    content: "/";
    display: inline-block;
    width: 1rem;
    right: -1.5rem;
  }
}
</style>
