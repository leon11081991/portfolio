<template>
  <SubTitle :text="skillsLabel" />
  <section class="skills-section">
    <div class="skill-line" v-for="(skill, index) in skills" :key="index">
      <Paragraph :mainText="skill" />
    </div>
  </section>
</template>

<script>
import SubTitle from "@components/Resume/SubTitle.vue";
import Paragraph from "@components/Resume/Paragraph.vue";

export default {
  Name: "Skills",
  components: { SubTitle, Paragraph },
  computed: {
    currentLanguage() {
      return this.$store.state.resume.currentLanguage;
    },

    resumeLabels() {
      return this.currentLanguage.resumeLabels;
    },

    skillsLabel() {
      return this.resumeLabels.skills;
    },

    professionalLabel() {
      return this.resumeLabels.professional;
    },

    skills() {
      return this.currentLanguage.data.skills;
    },
  },
};
</script>

<style lang="scss" scoped>
.skills-section {
  margin-top: 1rem;
}
.skill-line {
  display: flex;
}
</style>
