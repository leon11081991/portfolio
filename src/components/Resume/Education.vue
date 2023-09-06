<template>
  <SubTitle :text="educationLabel" />
  <section class="education-section">
    <section
      class="education-wrap"
      v-for="(education, index) in educations"
      :key="index"
    >
      <Paragraph
        :mainText="education.institutionName"
        :subText="education.degreeTitle"
      />
      <Paragraph :mainText="education.studyDirection" />
    </section>
  </section>
</template>

<script>
import SubTitle from "@/components/Resume/SubTitle.vue";
import Paragraph from "@/components/Resume/Paragraph.vue";

export default {
  Name: "Education",
  components: { SubTitle, Paragraph },
  computed: {
    currentLanguage() {
      return this.$store.state.resume.currentLanguage;
    },
    educationLabel() {
      return this.currentLanguage.resumeLabels.education;
    },
    educations() {
      return this.currentLanguage.data.education;
    },
  },
};
</script>

<style scoped>
.education-section {
  margin-top: 1rem;
}
.education-wrap:not(:last-child) {
  margin-bottom: 1rem;
}
</style>
