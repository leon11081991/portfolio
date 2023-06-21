<template>
  <Title :text="skillsLabel" />
  <SubTitle :text="professionalLabel" />

  <div class="skill-line" v-for="(skill, index) in skills" :key="index">
    <!-- <img class="circle" src="@/assets/circle.svg" /> -->
    <Paragraph :text="skill" />
  </div>
</template>

<script>
import Title from "@/components/Resume/Title.vue";
import SubTitle from "@/components/Resume/SubTitle.vue";
import Paragraph from "@/components/Resume/Paragraph.vue";

export default {
  Name: "Skills",
  components: { Title, SubTitle, Paragraph },
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

<style scoped>
.circle {
  width: 8px;
  margin-left: 8px;
}

.material-icons {
  display: inline-flex;
  align-items: center;
}

.skill-line {
  display: flex;
}

.contact {
  padding-left: calc(1em + 8px);
  margin: 0.25em;
}
</style>
