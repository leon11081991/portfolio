<template>
  <Title :text="contactsLabel" />
  <div v-if="phoneNumber" class="contact-line">
    <Icon name="phone" class="noGap" />
    <Paragraph class="contact" :text="phoneNumber" />
  </div>
  <div v-if="email" class="contact-line">
    <Icon name="email" class="noGap" />
    <Paragraph class="contact" :text="email" />
  </div>
  <div v-if="email" class="contact-line">
    <Icon name="104" class="noGap" />
    <Anchor class="contact" :link="links.link" :text="links.title" />
    <!-- <Paragraph class="contact" :text="link" /> -->
  </div>
</template>

<script>
import Title from "@/components/Resume/Title.vue";
import Paragraph from "@/components/Resume/Paragraph.vue";
import Anchor from "@/components/Resume/Anchor.vue";
import Icon from "@/components/Base/Icon.vue";

export default {
  name: "Contacts",
  components: { Title, Paragraph, Anchor, Icon },

  computed: {
    currentLanguage() {
      return this.$store.state.resume.currentLanguage;
    },

    contactsLabel() {
      return this.currentLanguage.resumeLabels.contacts;
    },

    contacts() {
      return this.currentLanguage.data.contacts;
    },

    phoneNumber() {
      return this.contacts.phone;
    },

    email() {
      return this.contacts.email;
    },

    links() {
      return this.contacts.resume104;
    },
  },
};
</script>

<style scoped>
.contact-line {
  display: flex;
  margin: 0 auto;
  align-items: center;
}

.contact {
  padding-left: 1em;
  margin: 0.25em;
}
</style>
