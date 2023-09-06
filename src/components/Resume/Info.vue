<template>
  <SubTitle :text="fullName" />
  <section class="info-section">
    <div class="info-wrap">
      <Paragraph :mainText="position" />
    </div>
    <div class="info-wrap">
      <Paragraph :mainText="phoneNumber" />
    </div>
    <div class="info-wrap">
      <Paragraph :mainText="email" />
    </div>
  </section>
</template>

<script>
import SubTitle from "@/components/Resume/SubTitle.vue";
import Paragraph from "@/components/Resume/Paragraph.vue";

export default {
  Name: "Info",
  components: { SubTitle, Paragraph },
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
    phoneNumber() {
      return this.currentResumeData.phone;
    },
    email() {
      return this.currentResumeData.email;
    },
  },
};
</script>

<style lang="scss" scoped>
.info-section {
  margin-top: 1rem;
}
.info-wrap:not(:last-child) {
  margin-bottom: 1rem;
}
//@media (max-width: 21cm) {
//}

//@media print {
//}
</style>
