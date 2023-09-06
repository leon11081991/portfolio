<template>
  <Title :text="experienceLabel" />
  <section class="experience-section">
    <section
      v-for="(experience, index) in experiences"
      :key="index"
      class="experience-wrap"
    >
      <Paragraph :mainText="experience.workPeriod" />
      <Paragraph
        :mainText="experience.companyName"
        :subText="experience.workPosition"
      />
      <Paragraph :mainText="experience.workPositionEg" />
    </section>
  </section>
</template>

<script>
import Title from "@/components/Resume/Title.vue";
import Paragraph from "@/components/Resume/Paragraph.vue";

export default {
  Name: "Experience",
  components: { Title, Paragraph },
  computed: {
    currentLanguage() {
      return this.$store.state.resume.currentLanguage;
    },
    experienceLabel() {
      return this.currentLanguage.resumeLabels.experience;
    },
    experiences() {
      return this.currentLanguage.data.experience;
    },
  },
};
</script>

<style scoped>
.experience-section {
  margin-top: 1rem;
}
.experience-wrap:not(:last-child) {
  margin-bottom: 1rem;
}
</style>
