<template>
  <Title :text="experienceLabel" />
  <section
    class="experience-section"
    v-for="(experience, index) in experiences"
    :key="index"
  >
    <section class="work-position-section">
      <SubTitle :text="experience.workPosition" />
      <SubTitle :text="experience.workPeriod" />
    </section>

    <Headline :text="experience.companyName" />
    <Paragraph
      v-for="(desc, index) in experience.description"
      :key="index"
      :text="desc"
    />
  </section>
</template>

<script>
import Title from "@/components/Resume/Title.vue";
import SubTitle from "@/components/Resume/SubTitle.vue";
import Headline from "@/components/Resume/Headline.vue";
import Paragraph from "@/components/Resume/Paragraph.vue";

export default {
  Name: "Experience",

  components: { Title, SubTitle, Headline, Paragraph },

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
  margin-bottom: 2em;
}

/* .experience-section:last-child {
  margin-bottom: 0;
} */

.work-position-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
