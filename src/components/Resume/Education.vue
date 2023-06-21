<template>
  <Title :text="educationLabel" />
  <section
    class="education-section"
    v-for="(education, index) in educations"
    :key="index"
  >
    <SubTitle :text="education.degreeTitle" />
    <Headline :text="education.institutionName" />
    <Paragraph :text="education.studyDirection" />
  </section>
</template>

<script>
import Title from "@/components/Resume/Title.vue";
import Headline from "@/components/Resume/Headline.vue";
import SubTitle from "@/components/Resume/SubTitle.vue";
import Paragraph from "@/components/Resume/Paragraph.vue";

export default {
  Name: "Education",

  components: { Title, Headline, SubTitle, Paragraph },

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
  margin-bottom: 2em;
}

.education-section:last-child {
  margin-bottom: 0;
}
</style>
